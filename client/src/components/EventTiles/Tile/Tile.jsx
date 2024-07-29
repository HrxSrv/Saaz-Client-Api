import React, { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  Box,
  Fade,
} from "@mui/material";
import { fetchEventMedia } from "../../../Cloudinary/Cloudinary";
import "./Tile.scss";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// import 'lazysizes';
// import 'lazysizes/plugins/attrchange/ls.attrchange';

const Tile = ({ event }) => {
  const [images, setImages] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadImages = async () => {
      const fetchedImages = await fetchEventMedia(event.path);
      setImages(fetchedImages);
    };
    loadImages();
  }, [event.path]);

  console.log("Event Object:", event); // Debugging line to log the event object
  const eventName = event.name;

  useEffect(() => {
    const interval = setInterval(() => {
      if (images && images.length > 0) {
        setShowImage(false);
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
          setShowImage(true);
        }, 300);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [images]);

  const getTransformedImageUrl = (url) => {
    return url.replace("/upload/", "/upload/w_600,q_50/");
  };

  const handleTileClick = () => {
    navigate(`/event/${event.name}`, { state: { images: images, eventName: eventName} });
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  let height;
  let fontSize;
  if (isSmallScreen) {
    height = 150; // height for small screens
    fontSize="20px";
  } else if (isMediumScreen) {
    height = 280; // height for medium screens
    fontSize="30px";
  } else if (isLargeScreen) {
    height = 280; // height for large screens
    fontSize="37.64px";
  }
  return (
    <Card
      className="transparent-card"
      style={{
        backgroundColor: "#1E969F",
        borderRadius: "10px",
        border: "1px solid black",
      boxShadow: "6px 6px 15px rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(6px)",
      }}
      onClick={handleTileClick}
    >
      <CardActionArea style={{ backgroundColor: "transparent" }}>
        {images && images.length > 0 ? (
          <Fade in={showImage} timeout={500}>
            <CardMedia
              component="img"
              height={height}
              src={getTransformedImageUrl(images[currentImageIndex].url)}
              alt={event.name}
              // className="cardMedia"
            />
          </Fade>
        ) : (
          <Box display="flex" justifyContent="center" alignItems="center" height="340">
            <CardMedia
              component="img"
              height={height}
              // alt={event.name}
              // classNam e="cardMedia"
            />
          </Box>
        )}
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              fontFamily: "Anton",
              fontSize: `${fontSize}`,
              fontWeight: "400",
              // lineHeight: "40.47px",
              letterSpacing: "0.045em",
              wordWrap: "break-word",
              // width: "150px", // Adjust width as per your design
              position:'relative',
              bottom:'-15px'
            }}
          >
            {event.name || "Unnamed Event"} {/* Fallback text for debugging */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* {event.description} */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Tile;
