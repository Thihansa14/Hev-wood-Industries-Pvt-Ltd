const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    imageUrl: { 
        type: String, 
        required: true 
    },
    // sizes: { 
    //     type: [String], 
    //     required: true 
    // },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
