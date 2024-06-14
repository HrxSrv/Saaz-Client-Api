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
export const  fetchMediaFromFolder = async (folderPath) => {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: folderPath,
      resource_type: 'image', 
    });
    return result.resources;
  } catch (error) {
    throw new Error('Error fetching media from folder: ' + error.message);
  }
};