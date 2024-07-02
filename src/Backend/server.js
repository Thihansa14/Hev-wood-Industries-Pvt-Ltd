const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const galleryRoutes = require('./routes/galleryRoutes');

dotenv.config({ path: './src/Backend/.env' });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});

// Routes
app.use('/api/products', productRoutes);
app.use('/api/gallery', galleryRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
