import cloudinary from "../cloudinary.js";
export const searchByTag = async (req, res) => {
  const  eventId  = decodeURIComponent(req.params[0]);
  try {
    
    const result = await cloudinary.search
      .expression(`tags=${eventId}`)
      .execute();

    res.json(result.resources);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch event media' });
  }
}
export const searchForAllFolders =  async (req, res) => {
  try {
    const result = await cloudinary.api.sub_folders("Saaz Events 23-24/Saaz Events 23-24");
    res.json(result.folders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch folders' });
  }
}
 const  fetchMediaFromFolder = async (folderPath) => {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: folderPath,
      resource_type: 'image', 
      transformation: [
        { width: 800, height: 600, crop: 'limit' }, // Example transformation
        { fetch_format: 'auto', quality: '50' } // Auto format and quality
      ]
    });
    return result.resources;
  } catch (error) {
    throw new Error('Error fetching media from folder: ' + error.message);
  }
};
export const searchMediaByFolder = async (req, res) => {
  const folderPath = decodeURIComponent(req.params[0]); // Decoding the folder path
  try {
    const media = await fetchMediaFromFolder(folderPath);
    res.set('Cache-Control', 'public, max-age=86400');
    res.json(media);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}