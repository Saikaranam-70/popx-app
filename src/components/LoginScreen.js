import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginScreen.css';

function LoginScreen({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isReady = email.trim() !== '' && password.trim() !== '';

  const handleSubmit = () => {
    if (!isReady) return;
    onLogin(email.trim());
    navigate('/profile');
  };

  return (
    <div className="login-screen">
      <h1 className="page-title">
        Signin to your<br />PopX account
      </h1>
      <p className="page-subtitle">
        Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.
      </p>

      <div className="field-group">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="field-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="spacer" />

      <button
        className={isReady ? 'submit-btn active' : 'submit-btn disabled'}
        onClick={handleSubmit}
      >
        Login
      </button>
    </div>
  );
}

export default LoginScreen;
