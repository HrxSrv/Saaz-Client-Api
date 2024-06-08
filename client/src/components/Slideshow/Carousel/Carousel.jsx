import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    url: 'https://via.placeholder.com/800x400.png?text=Image+1',
    title: 'Image 1',
  },
  {
    url: 'https://via.placeholder.com/800x400.png?text=Image+2',
    title: 'Image 2',
  },
  {
    url: 'https://via.placeholder.com/800x400.png?text=Image+3',
    title: 'Image 3',
  },
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ width: '100%',height:'80%', margin: 'auto' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} sx={{ position: 'relative' }}>
            <img src={image.url} alt={image.title} style={{ width: '100%', height: 'auto' }} />
            <Typography
              variant="h6"
              sx={{
                position: 'absolute',
                bottom: 10,
                left: 10,
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '5px 10px',
              }}
            >
              {image.title}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
