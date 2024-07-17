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
import 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';

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

  return (
    <Card
      className="transparent-card"
      style={{
        backgroundColor: "transparent",
        borderRadius: "10px",
      }}
      onClick={handleTileClick}
    >
      <CardActionArea style={{ backgroundColor: "transparent" }}>
        {images && images.length > 0 ? (
          <Fade in={showImage} timeout={500}>
            <CardMedia
              component="img"
              height="340"
              data-src={getTransformedImageUrl(images[currentImageIndex].url)}
              alt={event.name}
              className="lazyload"
            />
          </Fade>
        ) : (
          <Box display="flex" justifyContent="center" alignItems="center" height="340">
            <CircularProgress />
          </Box>
        )}
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              fontFamily: "Anton",
              fontSize: "37.64px",
              fontWeight: "400",
              lineHeight: "40.47px",
              letterSpacing: "0.045em",
              wordWrap: "break-word",
              width: "250px", // Adjust width as per your design
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
