// EventCard.js
import React, { useEffect, useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, CircularProgress, Box } from '@mui/material';
import { fetchEventMedia } from '../../../Cloudinary/Cloudinary';

const Tile = ({ event }) => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    const loadImages = async () => {
      const fetchedImages = await fetchEventMedia(event.path);
      setImages(fetchedImages);
    }
    loadImages();
  }, [event.path]);

  return (
    <Card>
      <CardActionArea>
        {images && images.length > 0 ? (
          <CardMedia
            component="img"
            height="140"
            image={images[0].url}
            alt={event.name}
          />
        ) : (
          <Box display="flex" justifyContent="center" alignItems="center" height="140">
            <CircularProgress />
          </Box>
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
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
