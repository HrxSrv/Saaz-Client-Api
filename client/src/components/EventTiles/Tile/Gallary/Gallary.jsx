import React from 'react';
import {fetchEventMedia} from "../../../Cloudinary/Cloudinary.js"
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  { useState, useEffect } from 'react';
const ImageSlider = ({images,toggleButton}) => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const loadImages = async () => {
//       const fetchedImages = await fetchEventMedia('Dummy Images');
//       setImages(fetchedImages);
//     };

//     loadImages();
//   }, []);
//   console.log(images)
//    const images = [
//     {
//         "asset_id": "52e51265677c5beab300697283cee487",
//         "public_id": "Dummy Images/hh9xki6uoxl4udvxswex",
//         "format": "png",
//         "version": 1718386282,
//         "resource_type": "image",
//         "type": "upload",
//         "created_at": "2024-06-14T17:31:22Z",
//         "bytes": 499323,
//         "width": 939,
//         "height": 368,
//         "asset_folder": "Dummy Images",
//         "display_name": "hh9xki6uoxl4udvxswex",
//         "url": "http://res.cloudinary.com/djy2jlthj/image/upload/v1718386282/Dummy%20Images/hh9xki6uoxl4udvxswex.png",
//         "secure_url": "https://res.cloudinary.com/djy2jlthj/image/upload/v1718386282/Dummy%20Images/hh9xki6uoxl4udvxswex.png"
//     },
//     {
//         "asset_id": "8ee4203ab1b78fd24b8da4e73b754762",
//         "public_id": "Dummy Images/isiqhf0nttc2gf9i0gux",
//         "format": "png",
//         "version": 1718386282,
//         "resource_type": "image",
//         "type": "upload",
//         "created_at": "2024-06-14T17:31:22Z",
//         "bytes": 563269,
//         "width": 939,
//         "height": 368,
//         "asset_folder": "Dummy Images",
//         "display_name": "isiqhf0nttc2gf9i0gux",
//         "url": "http://res.cloudinary.com/djy2jlthj/image/upload/v1718386282/Dummy%20Images/isiqhf0nttc2gf9i0gux.png",
//         "secure_url": "https://res.cloudinary.com/djy2jlthj/image/upload/v1718386282/Dummy%20Images/isiqhf0nttc2gf9i0gux.png"
//     },
//     {
//         "asset_id": "a10a91243db751068b16677867046a61",
//         "public_id": "Dummy Images/jgcpdyuft7jenov8vggr",
//         "format": "png",
//         "version": 1718386282,
//         "resource_type": "image",
//         "type": "upload",
//         "created_at": "2024-06-14T17:31:22Z",
//         "bytes": 376856,
//         "width": 939,
//         "height": 368,
//         "asset_folder": "Dummy Images",
//         "display_name": "jgcpdyuft7jenov8vggr",
//         "url": "http://res.cloudinary.com/djy2jlthj/image/upload/v1718386282/Dummy%20Images/jgcpdyuft7jenov8vggr.png",
//         "secure_url": "https://res.cloudinary.com/djy2jlthj/image/upload/v1718386282/Dummy%20Images/jgcpdyuft7jenov8vggr.png"
//     },
//     {
//         "asset_id": "deaac797f999da749fafbd23efa6903c",
//         "public_id": "Dummy Images/jrjkhvufy8rksf9nzra7",
//         "format": "png",
//         "version": 1718386282,
//         "resource_type": "image",
//         "type": "upload",
//         "created_at": "2024-06-14T17:31:22Z",
//         "bytes": 486477,
//         "width": 939,
//         "height": 368,
//         "asset_folder": "Dummy Images",
//         "display_name": "jrjkhvufy8rksf9nzra7",
//         "url": "http://res.cloudinary.com/djy2jlthj/image/upload/v1718386282/Dummy%20Images/jrjkhvufy8rksf9nzra7.png",
//         "secure_url": "https://res.cloudinary.com/djy2jlthj/image/upload/v1718386282/Dummy%20Images/jrjkhvufy8rksf9nzra7.png"
//     }
// ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out', // Easing function for transition
    fade: true // Enable fade effect
  };

  return (
    <Box sx={{ width: 'calc(100% - 50px)', margin: 'auto',position:'relative' }}>
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
