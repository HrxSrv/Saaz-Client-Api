import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  { useState, useEffect } from 'react';
import DummyImages from "../../../Cloudinary/Fetching Photos/DummyImages"
const images = [
  {
    url: "https://drive.google.com/uc?export=view&id=1FpK14Nci-OO2OX9RZk1WvpopwUUHRT8D",
    title: "bg (3).png"
  },
  {
    url: "https://drive.google.com/uc?export=view&id=1IQ283uGGjyi5jpuy4HTsjaPeiR_JMf35",
    title: "bg (2).png"
  },
  {
    url: "https://drive.google.com/uc?export=view&id=1741BdOior9tL0ldtZQUHWmsVushrY11R",
    title: "bg (1).png"
  },
  {
    url: "https://drive.google.com/uc?export=view&id=1GAQyYiqP3YlbRqww7XAt40qRexNubFbH",
    title: "bg.png"
  }
];
const ImageSlider = () => {
  const Dimages = DummyImages();
  console.log(Dimages);
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
    <Box sx={{ width: '100%', margin: 'auto' }}>
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
