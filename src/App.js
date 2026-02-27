import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingScreen from './components/LandingScreen';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import ProfileScreen from './components/ProfileScreen';
import './App.css';

function App() {
  const [userData, setUserData] = useState({ name: '', email: '' });

  const handleLogin = (email) => {
    setUserData({ name: email.split('@')[0], email });
  };

  const handleSignup = (data) => {
    setUserData({ name: data.name, email: data.email });
  };

  return (
    <div className="phone-frame">
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/login" element={<LoginScreen onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignupScreen onSignup={handleSignup} />} />
        <Route path="/profile" element={
          userData.email
            ? <ProfileScreen userData={userData} />
            : <Navigate to="/" replace />
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
