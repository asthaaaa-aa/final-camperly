// Require the cloudinary library
const cloudinary = require('cloudinary').v2;
const {CloudinaryStorage} = require('multer-storage-cloudinary');

// Return "https" URLs by setting secure: true
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure:true
});

const storage = new CloudinaryStorage({
  cloudinary,
  params:{
    folder: 'yelpcamp',
    allowedformats: ['jpeg', 'png', 'jpg']
  }
  
})

module.exports = {
  cloudinary,
  storage
}