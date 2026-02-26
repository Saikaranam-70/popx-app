import React from 'react';
import './LandingScreen.css';

function LandingScreen({ onCreateAccount, onLogin }) {
  return (
    <div className="landing-screen">
      <div className="landing-top" />
      <div className="landing-bottom">
        <h1 className="landing-title">Welcome to PopX</h1>
        <p className="landing-subtitle">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit.
        </p>
        <button className="btn-primary-purple" onClick={onCreateAccount}>
          Create Account
        </button>
        <button className="btn-secondary-purple" onClick={onLogin}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default LandingScreen;
