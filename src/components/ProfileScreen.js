import React from 'react';
import './ProfileScreen.css';

function ProfileScreen({ userData, onBack }) {
  const { name, email } = userData;
  const initial = name ? name.charAt(0).toUpperCase() : '?';

  return (
    <div className="profile-screen">
      <div className="profile-header">
        <div className="profile-avatar">{initial}</div>
        <div className="profile-name">{name}</div>
        <div className="profile-email">{email}</div>
      </div>

      <div className="profile-body">
        <p className="profile-bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <button className="btn-back-home" onClick={onBack}>
          &#8592; Back to Home
        </button>
      </div>
    </div>
  );
}

export default ProfileScreen;
