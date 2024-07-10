
const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });
    if (!admin) {
      console.log('Admin not found');
      return res.status(404).json({ success: false, message: 'Admin not found' });
    }

    console.log('Admin found:', admin);
    console.log('Input password:', password);
    console.log('Stored password hash:', admin.password);

    const isMatch = await bcrypt.compare(password, admin.password);
    console.log('Password match:', isMatch);

    if (!isMatch) {
      console.log('Invalid credentials');
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    console.log('Login successful');
    res.json({ success: true, token, admin: { id: admin._id, username: admin.username } });
  } catch (error) {
    console.error('Server error', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = {
    loginAdmin,
  };
