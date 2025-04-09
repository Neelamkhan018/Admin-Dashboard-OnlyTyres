
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


import url from "../../env.js"


const DealerCreateLogin = () => {
    const [identifier, setIdentifier] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [otpModalVisible, setOtpModalVisible] = useState(false);
    const [otpModalContent, setOtpModalContent] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();


      useEffect(() => {
        // Check if the user navigated directly to this page
        if (document.referrer === '') {
            // If the referrer is empty, redirect to home or another page
            navigate('/');
        }
    }, [navigate]);
    
    

    const handleIdentifierChange = (e) => setIdentifier(e.target.value);
    const handleOtpChange = (e) => setOtp(e.target.value);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`${url.nodeapipath}/dealer-login`, { emailOrMobile: identifier });

            setSuccessMessage(response.data.message);
            setOtpSent(true);
            setErrorMessage('');

            if (response.data.otp) {
                setOtpModalContent(`Your OTP is: ${response.data.otp}`);
                setOtpModalVisible(true);
            }
        } catch (error) {
            setErrorMessage(error.response?.data?.message || 'Error sending OTP. Please try again.');
            setSuccessMessage('');
        }
        setLoading(false);
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`${url.nodeapipath}/dealer-login`, { emailOrMobile: identifier, otp });

            setSuccessMessage(response.data.message);
            setErrorMessage('');

            localStorage.setItem("clientId", response.data.clientId);

            navigate('/dealer-category');
        } catch (error) {
            setErrorMessage(error.response?.data?.message || 'Invalid OTP. Please try again.');
        }
        setLoading(false);
    };

    return (
        <div className="sign-inup">
            <div className="container d-flex align-items-center justify-content-center form-height-login pt-4">
                <div className="row justify-content-center w-100">
                    <div className="col-lg-6 col-md-8">
                        <div className="card">
                        <div className="card-header btn btn-primary">
                             <div className="ec-brand">
                                {/* <a href="#" title="Ekka">
                                   {/* <img className="ec-brand-icon" src="https://amuze.in/projects//tyreking-admin-ui/assets/img/logo/logo-login.png" alt="Logo" /> 
                                </a> */}

                                <a href="#" title="Ekka" style={{ color: 'white', fontWeight: 'bold', fontSize: '35px' }}>
        Dealer Login
    </a>
                            </div>
                        </div>
                            <div className="card-body p-8">
                                <h4 className="text-dark mb-4 text-center">Login</h4>
                                <form className="dealer-login-form" onSubmit={otpSent ? handleOtpSubmit : handleLoginSubmit}>
                                    <div className="form-group mb-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Email or Mobile Number"
                                            value={identifier}
                                            onChange={handleIdentifierChange}
                                            required
                                            disabled={loading}
                                        />
                                    </div>
                                    {otpSent && (
                                        <div className="form-group mb-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter OTP"
                                                value={otp}
                                                onChange={handleOtpChange}
                                                required
                                                disabled={loading}
                                            />
                                        </div>
                                    )}
                                    {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
                                    {successMessage && <p className="text-success text-center">{successMessage}</p>}
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary" disabled={loading}>
                                            {loading ? 'Processing...' : otpSent ? 'Continue' : 'Send OTP'}
                                        </button>
                                    </div>
                                </form>
                                <p className="mt-5 text-center">
                                    <Link to="/create-dealer">Don't have an account? <span className="text-primary">Sign up</span></Link>
                                </p>

                                {otpModalVisible && (
                                    <div className="otp-modal">
                                        <div className="otp-modal-content">
                                            <span className="close" onClick={() => setOtpModalVisible(false)}>&times;</span>
                                            <p>{otpModalContent}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealerCreateLogin;
