import React, { useState } from 'react';
import axios from 'axios';
import './AdminForm.css';

const AdminLogin = ({ onLogin, handleClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', { username, password });
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        onLogin();
        setError('');
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      console.error('Failed to login', error);
      setError('Failed to login. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <button className="close-details" onClick={handleClose}>X</button>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="form-button">Login</button>
        <button type="button" className="form-button" onClick={handleClose}>Cancel</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default AdminLogin;
