import React, { useState } from 'react';
import LandingScreen from './components/LandingScreen';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import ProfileScreen from './components/ProfileScreen';
import './App.css';

function App() {
  const [screen, setScreen] = useState('landing');
  const [userData, setUserData] = useState({ name: '', email: '' });

  const navigate = (to) => setScreen(to);

  const handleLogin = (email) => {
    setUserData({ name: email.split('@')[0], email });
    navigate('profile');
  };

  const handleSignup = (data) => {
    setUserData({ name: data.name, email: data.email });
    navigate('profile');
  };

  return (
    <div className="phone-frame">
      {screen === 'landing' && (
        <LandingScreen
          onCreateAccount={() => navigate('signup')}
          onLogin={() => navigate('login')}
        />
      )}
      {screen === 'login' && (
        <LoginScreen
          onBack={() => navigate('landing')}
          onLogin={handleLogin}
        />
      )}
      {screen === 'signup' && (
        <SignupScreen
          onBack={() => navigate('landing')}
          onSignup={handleSignup}
        />
      )}
      {screen === 'profile' && (
        <ProfileScreen userData={userData} />
      )}
    </div>
  );
}

export default App;
