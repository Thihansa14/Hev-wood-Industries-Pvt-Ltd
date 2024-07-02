const adminAuth = require('../middleware/adminAuth');

router.post('/', adminAuth, addGalleryImage);
