// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';

const AuthPage = (props) => {
  const [error, setError] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post('http://localhost:3001/authenticate', { username: value })
      // eslint-disable-next-line react/prop-types
      .then(() => props.onAuth({ username: value, secret: value }))
      .catch((e) => {
        console.log('Auth Error', e);
        setError('Authentication failed. Please try again.');
      });
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>
        <div className="form-subtitle">Set a username to get started</div>
        {error && <div className="error-message">{error}</div>}
        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;