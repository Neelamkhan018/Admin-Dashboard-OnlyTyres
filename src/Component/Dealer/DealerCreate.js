


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';




import url from "../../env.js"




const DealerCreate = () => {




  const [formData, setFormData] = useState({
    username: '',
    mobileNumber: '',
    email: '',
    password: '',
    rePassword: '',
    mobileOtp: '',
    emailOtp: '',
  });
  const [otpSent, setOtpSent] = useState({ mobile: false, email: false });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize navigation


  useEffect(() => {
    // Check if the user navigated directly to this page
    if (document.referrer === '') {
        // If the referrer is empty, redirect to home or another page
        navigate('/');
    }
}, [navigate]);







  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Send OTP for mobile or email
  const handleOtpSubmit = async (type) => {
    try {
      const data = type === 'mobile' 
        ? { mobileNumber: formData.mobileNumber, type } 
        : { email: formData.email, type };

      const response = await axios.post(`${url.nodeapipath}/dealer-otp`, data);
      
      // Display the OTP in a pop-up alert
      alert(`OTP sent to ${type === 'mobile' ? formData.mobileNumber : formData.email}: ${response.data.otp}`);
      setOtpSent({ ...otpSent, [type]: true });
      setErrorMessage('');
    } catch (error) {
      console.error(error);
      setErrorMessage(`Error sending ${type} OTP`);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.rePassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
  
    try {
      const response = await axios.post(`${url.nodeapipath}/dealer-create-acc`, formData);
  
      // Store clientId in localStorage
      localStorage.setItem('clientId', response.data.clientId);
  
      alert('Account created successfully!');
      setErrorMessage('');
      navigate('/gst-details'); // Navigate to GST details page
    } catch (error) {
      console.error('Error Response:', error.response);
      if (error.response) {
        setErrorMessage(error.response.data.message || 'Error creating account');
      } else {
        setErrorMessage('Error connecting to the server');
      }
    }
  };
  



  return (
    <div className="sign-inup">
    <div className="container d-flex align-items-center justify-content-center form-height-login pt-4">
      <div className="row justify-content-center w-100">
        <div className="col-lg-6 col-md-8">
          <div className="card">
            <div className="card-header btn btn-primary">
              <a href="#" title="Ekka" style={{ color: "white", fontWeight: "bold", fontSize: "35px" }}>
                Dealer Signup
              </a>
            </div>
            <div className="card-body p-6">
              <h4 className="text-dark mb-3 text-center">Create Account</h4>
              <form className="dealer-login-form" onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-4 d-flex">
                  <input
                    type="tel"
                    className="form-control me-2"
                    placeholder="Mobile Number"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                  />
                  {!otpSent.mobile ? (
                    <button type="button" className="btn btn-primary" onClick={() => handleOtpSubmit("mobile")}>
                      Verify
                    </button>
                  ) : (
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Mobile OTP"
                      name="mobileOtp"
                      value={formData.mobileOtp}
                      onChange={handleChange}
                      required
                    />
                  )}
                </div>
                <div className="form-group mb-4 d-flex">
                  <input
                    type="email"
                    className="form-control me-2"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {!otpSent.email ? (
                    <button type="button" className="btn btn-primary" onClick={() => handleOtpSubmit("email")}>
                      Verify
                    </button>
                  ) : (
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Email OTP"
                      name="emailOtp"
                      value={formData.emailOtp}
                      onChange={handleChange}
                      required
                    />
                  )}
                </div>
                <div className="form-group mb-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Re-enter Password"
                    name="rePassword"
                    value={formData.rePassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary w-50">Create Account</button>
                </div>
              </form>
              <p className="mt-4 text-center">
                <Link to="/create-login">
                  Already have an account? <span className="text-primary">Log in</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default DealerCreate;
