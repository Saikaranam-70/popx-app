import React, { useState, useRef } from 'react';
import './ProfileScreen.css';

function ProfileScreen({ userData }) {
  const { name, email } = userData;
  const initial = name ? name.charAt(0).toUpperCase() : '?';
  const [photo, setPhoto] = useState(null);
  const fileRef = useRef(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhoto(url);
    }
  };

  return (
    <div className="profile-screen">

      {/* Top bar */}
      <div className="profile-topbar">
        <h2>Account Settings</h2>
      </div>

      {/* Profile info row */}
      <div className="profile-info-row">
        <div className="avatar-wrapper">
          {photo ? (
            <img src={photo} alt="Profile" className="profile-avatar-img" />
          ) : (
            <div className="avatar-placeholder">{initial}</div>
          )}
          <div className="camera-icon" onClick={() => fileRef.current.click()}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zm0 1.8a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm6.5-9.75h-1.64l-1.06-2h-7.6l-1.06 2H5.5A1.5 1.5 0 0 0 4 8.75v9A1.5 1.5 0 0 0 5.5 19.25h13a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5z"/>
            </svg>
          </div>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="camera-input"
            onChange={handlePhotoChange}
          />
        </div>

        <div className="profile-text-info">
          <div className="profile-name">{name}</div>
          <div className="profile-email">{email}</div>
        </div>
      </div>

      {/* Bio */}
      <div className="profile-bio-section">
        <p className="profile-bio">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>
      </div>

      {/* Empty body area with dashed border at bottom */}
      <div className="profile-body" />

    </div>
  );
}

export default ProfileScreen;
