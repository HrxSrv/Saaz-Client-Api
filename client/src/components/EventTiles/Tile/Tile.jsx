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
import Carousel, { Modal, ModalGateway } from "react-images";

const Tile = ({ event }) => {
  const [images, setImages] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const fetchedImages = await fetchEventMedia(event.path);
      setImages(fetchedImages);
    };
    loadImages();
  }, [event.path]);

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

  const openLightbox = (event, { index }) => {
    setCurrentImageIndex(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImageIndex(0);
    setViewerIsOpen(false);
  };

  const getTransformedImageUrl = (url) => {
    return url.replace("/upload/", "/upload/w_600,q_50/");
  };

  return (
    <Card className="transparent-card">
      <CardActionArea onClick={(event) => openLightbox(event, { index: currentImageIndex })}>
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
              fontWeight: 400,
              lineHeight: "40.47px",
              letterSpacing: "0.045em",
              wordWrap: "break-word",
              width: "250px",
            }}
          >
            {event.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* {event.description} */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <ModalGateway>
        {viewerIsOpen && images && (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImageIndex}
              views={images.map((image, index) => ({
                src: getTransformedImageUrl(image.url),
                alt: event.name,
              }))}
            />
          </Modal>
        )}
      </ModalGateway>
    </Card>
  );
};

export default Tile;
