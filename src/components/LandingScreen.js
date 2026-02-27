import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingScreen.css';

function LandingScreen() {
  const navigate = useNavigate();

  return (
    <div className="landing-screen">
      <div className="landing-top" />
      <div className="landing-bottom">
        <h1 className="landing-title">Welcome to PopX</h1>
        <p className="landing-subtitle">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit.
        </p>
        <button className="btn-primary-purple" onClick={() => navigate('/signup')}>
          Create Account
        </button>
        <button className="btn-secondary-purple" onClick={() => navigate('/login')}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default LandingScreen;
