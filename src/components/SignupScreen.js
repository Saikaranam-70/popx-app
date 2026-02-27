import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupScreen.css';

function SignupScreen({ onSignup }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: 'yes',
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!form.name.trim() || !form.email.trim()) {
      alert('Please fill in all required fields.');
      return;
    }
    onSignup({ name: form.name.trim(), email: form.email.trim() });
    navigate('/profile');
  };

  return (
    <div className="signup-screen">
      <h1 className="page-title">
        Create your<br />PopX account
      </h1>

      <div className="field-group">
        <label>Full Name*</label>
        <input
          type="text"
          placeholder="Marry Doe"
          value={form.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
      </div>

      <div className="field-group">
        <label>Phone number*</label>
        <input
          type="tel"
          placeholder="+91 9000000000"
          value={form.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
        />
      </div>

      <div className="field-group">
        <label>Email address*</label>
        <input
          type="email"
          placeholder="marry@example.com"
          value={form.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
      </div>

      <div className="field-group">
        <label>Password *</label>
        <input
          type="password"
          placeholder="Enter password"
          value={form.password}
          onChange={(e) => handleChange('password', e.target.value)}
        />
      </div>

      <div className="field-group">
        <label>Company name</label>
        <input
          type="text"
          placeholder="Your company"
          value={form.company}
          onChange={(e) => handleChange('company', e.target.value)}
        />
      </div>

      <div className="radio-group">
        <p className="radio-label">Are you an Agency?*</p>
        <div className="radio-options">
          <label>
            <input
              type="radio"
              name="agency"
              value="yes"
              checked={form.agency === 'yes'}
              onChange={() => handleChange('agency', 'yes')}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="agency"
              value="no"
              checked={form.agency === 'no'}
              onChange={() => handleChange('agency', 'no')}
            />
            No
          </label>
        </div>
      </div>

      <button className="btn-create" onClick={handleSubmit}>
        Create Account
      </button>
    </div>
  );
}

export default SignupScreen;
