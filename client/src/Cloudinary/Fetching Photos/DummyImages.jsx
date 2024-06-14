import axios from 'axios';

const DummyImages = async () => {
  try {
    const response = await axios.get('/api/events/Dummy Images/media');
    return response.data;
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return [];
  }
};

export default DummyImages;
