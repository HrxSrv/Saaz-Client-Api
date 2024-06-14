const express = require('express');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// Function to list all resources in a folder
const listResourcesInFolder = async (folderName) => {
    try {
      const result = await cloudinary.search
        .expression(`folder=Dummy Images/Test1`)
        .execute();
        console.log(result)
        return result.resources;
    } catch (error) {
      console.error('Error searching resources:', error);
      return [];
    }
  };

// Function to rename a resource to include folder structure in public ID
const renameResource = async (oldPublicId, newPublicId) => {
  try {
    const result = await cloudinary.uploader.rename(oldPublicId, newPublicId);
    console.log(`Renamed ${oldPublicId} to ${newPublicId}`);
    return result;
  } catch (error) {
    console.error(`Error renaming resource ${oldPublicId}:`, error);
  }
};

// Main function to update resources
const updateResourcesInFolder = async (folderPath) => {
  const resources = await listResourcesInFolder(folderPath);
  for (const resource of resources) {
    const oldPublicId = resource.public_id;
    // Ensure the new public ID includes the folder structure
    const newPublicId = `${folderPath}/${oldPublicId.split('/').pop()}`;
    await renameResource(oldPublicId, newPublicId);
  }
};

// Example usage: Update resources in 'my_folder'
// updateResourcesInFolder('my_folder');
// listResourcesInFolder('Saanjh 22/BestOnes')
const fetchMediaFromFolder = async (folderPath) => {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: folderPath,
      resource_type: 'image', 
    });
    console.log(result.resources)
    return result.resources;
  } catch (error) {
    throw new Error('Error fetching media from folder: ' + error.message);
  }
};
fetchMediaFromFolder('Dummy Images/Test1')
