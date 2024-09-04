import React, { useState } from 'react';
import './Loginpage.css'; // Ensure this path matches your project structure

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); 
};

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [otpEntered, setOtpEntered] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [isOtpView, setIsOtpView] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === '') {
      setError('Please enter a username.');
      return;
    }

    // Simulate OTP generation and sending
    const newOtp = generateOTP();
    setGeneratedOtp(newOtp);
    setIsOtpView(true); // Show OTP view

    setError('');
    setOtpEntered('');
    setUsername('');

    alert('OTP has been sent to your email!');
  };

  const handleOtpVerification = (e) => {
    e.preventDefault();

    if (otpEntered === '') {
      setError('Please enter the OTP.');
      return;
    }

    if (otpEntered === generatedOtp) {
      setLoggedIn(true);
      setOtpEntered('');
      setIsOtpView(false); // Return to login page view
      alert('Login successful!');
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  const handleResendOtp = () => {
    const newOtp = generateOTP();
    setGeneratedOtp(newOtp);
    alert('New OTP has been sent to your email!');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setIsOtpView(false); // Return to login page view
    setUsername('');
    setOtpEntered('');
    setError('');
    alert('You have been logged out.');
  };

  const handleBackToLogin = () => {
    setIsOtpView(false); // Return to login page view
  };

  return (
    <div className="login-container">
      <h2 className="login-header">
        {loggedIn ? 'Welcome' : isOtpView ? 'Enter OTP' : 'Admin Login'}
      </h2>
      {error && <p className="error">{error}</p>}
      {loggedIn ? (
        <button
          onClick={handleLogout}
          className="button logout"
        >
          Logout
        </button>
      ) : isOtpView ? (
        <div>
          <form onSubmit={handleOtpVerification}>
            <div className="form-group">
              <label htmlFor="otp">Enter OTP</label>
              <input
                type="text"
                id="otp"
                value={otpEntered}
                onChange={(e) => setOtpEntered(e.target.value)}
              />
            </div>
            <div className="button-group">
              <div className="button-row">
                <button
                  type="submit"
                  className="button verify"
                >
                  Verify OTP
                </button>
                <button
                  type="button"
                  onClick={handleBackToLogin}
                  className="button back"
                >
                  Back
                </button>
              </div>
              <button
                type="button"
                onClick={handleResendOtp}
                className="button resend"
              >
                Resend OTP
              </button>
            </div>
          </form>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="button login"
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
