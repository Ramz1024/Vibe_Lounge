import React from 'react';
import './login.css';

export default function Login() {
  return (
    <div className="login-container">
      <h2>This is Login Page</h2>
      <input
        type="text"
        placeholder='Enter your email or username'
        className="login-input"
      />
    </div>
  );
}