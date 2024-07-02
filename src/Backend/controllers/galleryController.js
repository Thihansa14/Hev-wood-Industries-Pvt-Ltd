const Gallery = require('../models/Gallery');

const getGalleryImages = async (req, res) => {
    try {
        const images = await Gallery.find({});
        res.json(images);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addGalleryImage = async (req, res) => {
    try {
        const image = new Gallery(req.body);
        await image.save();
        res.status(201).json(image);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getGalleryImages, addGalleryImage };
