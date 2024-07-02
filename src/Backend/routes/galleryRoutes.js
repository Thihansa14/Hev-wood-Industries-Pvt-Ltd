const express = require('express');
const router = express.Router();
const { getGalleryImages, addGalleryImage } = require('../controllers/galleryController');

router.get('/', getGalleryImages);
router.post('/', addGalleryImage);

module.exports = router;
