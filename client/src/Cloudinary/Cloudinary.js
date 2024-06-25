import { makeRequest } from '../axios';
export const fetchEvents = async () => {
  try {
    const response = await makeRequest.get('/api/folders');
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
};

export const searchEvents = async (tag) => {
  try {
    const response = await makeRequest.get(`api/events/search?tag=${tag}`);
    return response.data;
  } catch (error) {
    console.error('Error searching events:', error);
    return [];
  }
};

export const fetchEventMedia = async (eventId) => {
  try {
    const response = await makeRequest.get(`api/folder/${eventId}/media`);
   
    return response.data;
  } catch (error) {
    console.error('Error fetching event media:', error);
    return [];
  }
};
