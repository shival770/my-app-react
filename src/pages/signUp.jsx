// src/components/SignUp.js
import React, { useState } from 'react';
import axios from 'axios'; // Make sure axios is installed via: npm install axios

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    role: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      // Send data to backend
      const res = await axios.post('http://localhost:5000/signup', formData);
      alert(res.data.message);
    } catch (error) {
      console.error(error);
      alert('Signup failed!');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: '100%', maxWidth: '500px' }}>
        <h2 className="text-center text-success mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col">
              <label className="form-label">First Name</label>
              <input type="text" className="form-control" name="firstName" onChange={handleChange} required />
            </div>
            <div className="col">
              <label className="form-label">Last Name</label>
              <input type="text" className="form-control" name="lastName" onChange={handleChange} required />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Role</label>
            <select className="form-select" name="role" onChange={handleChange} required>
              <option value="">Choose role</option>
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name="email" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" name="password" onChange={handleChange} required />
          </div>

          <div className="mb-4">
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-control" name="confirmPassword" onChange={handleChange} required />
          </div>

          <button type="submit" className="btn btn-success w-100">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
