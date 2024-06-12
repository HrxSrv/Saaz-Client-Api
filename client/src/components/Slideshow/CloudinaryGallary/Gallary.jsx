import { useEffect, useRef } from "react";

import './Gallary.scss';

function Gallary() {
  const galleryRef = useRef();

  useEffect(() => {
    if (window && galleryRef.current) {
      window.cloudinary
        .galleryWidget({
          container: galleryRef.current,
          cloudName: 'djy2jlthj',
          mediaAssets: [
            { tag: "EventsPage Slideshow",transformation: { crop: "fill" } },
            // { tag: "react-image-gallery-videos", mediaType: "video", transformation: { crop: "fill" }  },
          ],
          aspectRatio: "18:6",
          carouselStyle: "none",
          theme: "dark",
          autoplay: true,
          autoplaySpeed: 200,
          loop: true,      
          navigation: "mouseover", 
          zoom: false,   
          fullscreen: false,
        })
        .render();
    }
  }, []);

  return (
    <main className="main">
      

      <div className="container">
        <div ref={galleryRef} />
      </div>

      
    </main>
  );
}

export default Gallary;