import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import { fetchEventMedia } from '../../../Cloudinary/Cloudinary.js';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const [images, setImages] = useState([]);

  const backupimages = [
    {
      "asset_id": "52e51265677c5beab300697283cee487",
      "url": "http://res.cloudinary.com/djy2jlthj/image/upload/v1718386282/Dummy%20Images/hh9xki6uoxl4udvxswex.png",
      // "title": "Backup Image 1"
    },
    {
      "asset_id": "8ee4203ab1b78fd24b8da4e73b754762",
      "url": "http://res.cloudinary.com/djy2jlthj/image/upload/v1718386282/Dummy%20Images/isiqhf0nttc2gf9i0gux.png",
      // "title": "Backup Image 2"
    },
    {
      "asset_id": "a10a91243db751068b16677867046a61",
      "url": "http://res.cloudinary.com/djy2jlthj/image/upload/v1718386282/Dummy%20Images/jgcpdyuft7jenov8vggr.png",
      // "title": "Backup Image 3"
    },
    {
      "asset_id": "deaac797f999da749fafbd23efa6903c",
      "url": "http://res.cloudinary.com/djy2jlthj/image/upload/v1718386282/Dummy%20Images/jrjkhvufy8rksf9nzra7.png",
      "title": "Backup Image 4"
    }
  ];

  useEffect(() => {
    const loadImages = async () => {
      try {
        const fetchedImages = await fetchEventMedia('Dummy Images');
        setImages(fetchedImages.length > 0 ? fetchedImages : backupimages);
      } catch (error) {
        console.error("Failed to fetch images, using backup images.", error);
        setImages(backupimages);
      }
    };

    loadImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    fade: true,
    arrows: false,
  };

  return (
    <Box sx={{ width: 'calc(100% - 50px)', margin: 'auto', position: 'relative' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} sx={{ position: 'relative' }}>
            <img src={image.url} alt={image.title} style={{ width: '100%', height: '50%' }} />
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
