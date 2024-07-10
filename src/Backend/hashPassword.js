const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Admin = require('./models/Admin'); // Adjust path as necessary
const dotenv = require('dotenv');
dotenv.config({ path: './src/Backend/.env' });

const saltRounds = 10; // Number of salt rounds to use

// Function to hash a password
async function hashPassword(password) {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error('Password hashing failed', error);
  }
}

// Function to create an admin user
async function createAdmin(username, password) {
  try {
    const hashedPassword = await hashPassword(password);
    const admin = new Admin({ username, password: hashedPassword });
    await admin.save();
    console.log('Admin created:', admin);
  } catch (error) {
    console.error('Error creating admin:', error);
  }
}

// Connect to MongoDB and create admin user
async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');
    
    // Check if the admin user already exists
    const username = 'thihansa_1472002';
    const existingAdmin = await Admin.findOne({ username });

    if (!existingAdmin) {
      await createAdmin(username, 'Hev-wOOd@2024');
    } else {
      console.log('Admin already exists:', existingAdmin);
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
}

main();
