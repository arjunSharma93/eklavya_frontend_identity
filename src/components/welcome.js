import React from 'react';
import './App.css';

const WelcomePage = ({ username, onLogout }) => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome, {username}!</h1>
      <p className="welcome-message">Thank you for logging in. You have successfully accessed the application.</p>
      <button className="logout-button" onClick={onLogout}>Logout</button>
    </div>
  );
};

export default WelcomePage;

