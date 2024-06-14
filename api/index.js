import express from 'express';
import pkg from 'body-parser';
const { json, urlencoded } = pkg;
import cors from 'cors'
import { searchByTag,searchForAllFolders,searchMediaByFolder } from './Handlers/fetchMedia.js';
const app = express();
const port = process.env.PORT || 5000;
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
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
app.get('/api/folder/*/media', searchMediaByFolder);