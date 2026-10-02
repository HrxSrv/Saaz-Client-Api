import LightGallery from 'lightgallery/react';
import { useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Event.scss'
import IconBreadcrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import { fetchEventMedia } from '../../Cloudinary/Cloudinary';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function Event() {
  const location = useLocation();
  const { id } = useParams(); // from route "/event/:id"

  // Try to use data passed via navigation state first
  const [images, setImages] = useState(location.state?.images || null);
  const [eventName, setEventName] = useState(location.state?.eventName || id);
  const [loading, setLoading] = useState(!location.state?.images);

  useEffect(() => {
    if (!location.state?.images) {
      const loadImages = async () => {
        const possiblePaths = [
          `Saaz Events 23-24/Saaz Events 23-24/${id}`,
          `Saaz Events/${id}`,
        ];

        let fetchedImages = [];
        for (const path of possiblePaths) {
          fetchedImages = await fetchEventMedia(path);
          if (fetchedImages.length > 0) break;
        }

        setImages(fetchedImages);
        setEventName(id);
        setLoading(false);
      };
      loadImages();
    }
  }, [id, location.state]);

  const getTransformedImageUrl = (url) => {
    return url.replace("/upload/", "/upload/w_600,q_50/");
  };

  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  // Still loading
  if (loading) {
    return <div className="Event-page">Loading...</div>;
  }

  // No images found for this event
  if (!images || images.length === 0) {
    return (
      <div className="Event-page">
        <div className="breadCrumbs">
          <IconBreadcrumbs eventName={eventName} isEvent={true} style={{ color: 'white' }} />
        </div>
        <div style={{ color: 'white', textAlign: 'center', padding: '40px' }}>
          No photos available yet. Check back soon!
        </div>
      </div>
    );
  }

  const imageUrls = images.map(x => ({
    original: x.secure_url,
    thumbnail: getTransformedImageUrl(x.secure_url),
  }));

  return (
    <div className="Event-page">
      <div className="breadCrumbs">
        <IconBreadcrumbs eventName={eventName} isEvent={true} style={{ color: 'white' }} />
      </div>
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        {imageUrls.map((x, index) => (
          <a key={index} href={x.original}>
            <div className="image-grid-item">
              <img src={x.thumbnail} alt="" />
            </div>
          </a>
        ))}
      </LightGallery>
    </div>
  );
}

export default Event;