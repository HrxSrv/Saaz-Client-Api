const express = require('express');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(bodyParser.json());

// Route to fetch all events
app.get('/api/events', async (req, res) => {
  try {
    const result = await cloudinary.search
      .expression('tags= EventsPage Slideshow')
      .with_field('tags')
      .execute();
    res.json(result.resources);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

// Route to search events by tags
app.get('/api/events/search', async (req, res) => {
  const { tag } = req.query;
  try {
    const result = await cloudinary.search
      .expression(`tags=${tag}`)
      .execute();
    res.json(result.resources);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search events' });
  }
});

// Route to fetch media for a specific event
app.get('/api/events/:eventId/media', async (req, res) => {
  const { eventId } = req.params;
  try {
    const result = await cloudinary.search
      .expression(`folder=${eventId}`)
      .execute();
    res.json(result.resources);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch event media' });
  }
});

app.get('/api/folders', async (req, res) => {
    try {
      const result = await cloudinary.api.root_folders();
      res.json(result.folders);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch folders' });
    }
  });
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});