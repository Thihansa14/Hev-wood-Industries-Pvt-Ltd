const express = require('express');
const router = express.Router();
const { getGalleryImages, addGalleryImage } = require('../controllers/galleryController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', getGalleryImages);
router.post('/', authMiddleware, addGalleryImage);

module.exports = router;
