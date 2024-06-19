// EventCard.js
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
const Tile = ({ event }) => {
  const [images, setImages] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);
  
  useEffect(() => {
    const loadImages = async () => {
      const fetchedImages = await fetchEventMedia(event.path);
      setImages(fetchedImages);
    };
    loadImages();
  }, [event.path]);
  console.log(images);
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

  return (
    <Card className="transparent-card"  style={{
      'background-color': 'transparent'
    }}>
      <CardActionArea style={{
      'background-color': 'transparent'
    }}>
        {images && images.length > 0 ? (
          <Fade in={showImage} timeout={500}>
            <CardMedia
              component="img"
              height="340"
              image={getTransformedImageUrl(images[currentImageIndex].url)}
              alt={event.name}

            />
          </Fade>
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="140"
          >
            <CircularProgress />
          </Box>
        )}
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              "font-family": "Anton",
              "font-size": "37.64px",
              "font-weight": "400",
              "line-height": "40.47px",
              "letter-spacing": "0.045em",
              'wordWrap': "break-word", // Ensures long words break into a new line
              'width': "250px", // Example: Adjust width as per your design
            }}
          >
            {event.name}
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
