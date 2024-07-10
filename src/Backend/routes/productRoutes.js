// const express = require('express');
// const router = express.Router();
// const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

// router.get('/', getProducts);
// router.post('/', createProduct);
// router.put('/:id', updateProduct);
// router.delete('/:id', deleteProduct);

// module.exports = router;



const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

router.get('/', getProducts);
router.post('/', protect, createProduct);
router.put('/:id', protect, updateProduct);
router.delete('/:id', protect, deleteProduct);

module.exports = router;


