import express from 'express';
import pkg from 'body-parser';
const { json, urlencoded } = pkg;
import cors from 'cors';
import { searchByTag, searchForAllFolders, searchMediaByFolder } from './Handlers/fetchMedia.js';

const app = express();
const port = process.env.PORT || 5000;
const currentIp='192.168.1.3'
// const allowedOrigins = [
//   `http://${currentIp}:3000`,
//   `http://localhost:3000`,
//   // Add more origins as needed
// ];

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
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

// Route to get all the folders
app.get('/api/folders', searchForAllFolders);

// Route to get all the media of a subfolder
app.get('/api/folder/*/media', searchMediaByFolder);
