import express from 'express';
import pkg from 'body-parser';
const { json, urlencoded } = pkg;
import { searchByTag,searchForAllFolders,fetchMediaFromFolder } from './Handlers/Images.js';
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
// Middlewares
app.use(json());
app.use(urlencoded({ extended: true }));

// Route to search events by tags
app.get('/api/events/*/media', searchByTag);

// Route to get all the fodlers
app.get('/api/folders', searchForAllFolders);

//Route to get all the media of a subfolder
app.get('/api/folder/*/media', async (req, res) => {
  const folderPath = decodeURIComponent(req.params[0]); // Decoding the folder path
  try {
    const media = await fetchMediaFromFolder(folderPath);
    res.json(media);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});