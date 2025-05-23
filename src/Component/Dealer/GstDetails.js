
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


import url from "../../env.js"


const GstDetails = () => {


const navigate = useNavigate();

      useEffect(() => {
        // Check if the user navigated directly to this page
        if (document.referrer === '') {
            // If the referrer is empty, redirect to home or another page
            navigate('/');
        }
    }, [navigate]);
    



    const [formData, setFormData] = useState({
        email: "",
        mobileNumber: "",
        gstNumber: "",
        panDetails: "",
        bankAccount: "",
        clientId: ""  // Add clientId field
    });

    const [submissionError, setSubmissionError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    // Load clientId from localStorage when the component mounts
    useEffect(() => {
        const storedClientId = localStorage.getItem("clientId");
        if (storedClientId) {
            setFormData((prevData) => ({ ...prevData, clientId: storedClientId }));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const clientId = localStorage.getItem('clientId'); // Get clientId from localStorage
        if (!clientId) {
            setSubmissionError('Client ID not found. Please register first.');
            return;
        }
    
        const data = { ...formData, clientId }; // Add clientId to form data
    
        try {
            await axios.post(`${url.nodeapipath}/add-gst-details`, data);
            setSuccessMessage('GST details saved successfully');
            setFormData({ email: '', mobileNumber: '', gstNumber: '', panDetails: '' });
            setSubmissionError('');
        } catch (error) {
            setSubmissionError('Error saving GST details');
            setSuccessMessage('');
        }
    };
    


    return (
        <div className="sign-inup">
        <div className="container d-flex align-items-center justify-content-center form-height-login pt-4">
            <div className="row justify-content-center w-100">
                <div className="col-lg-6 col-md-8">
                    <div className="card">
                        <div className="card-header btn btn-primary">
                            <div className="ec-brand">
                                <a href="#" title="Ekka" style={{ color: 'white', fontWeight: 'bold', fontSize: '35px' }}>
                                    Tax Details Form
                                </a>
                            </div>
                        </div>
                        <div className="card-body p-6">
                            <h4 className="text-dark mb-4 text-center">Enter Tax Details</h4>
                            {successMessage ? (
                                <div>
                                    <p className="text-success text-center">{successMessage}</p>
                                    <div className="d-grid">
                                        <Link to="/bank-details">
                                            <button className="btn btn-primary">Go to Next</button>
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="dealer-login-form">
                                    <div className="form-group mb-4">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-4">
                                        <input
                                            type="text"
                                            name="mobileNumber"
                                            placeholder="Mobile Number"
                                            value={formData.mobileNumber}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-4">
                                        <input
                                            type="text"
                                            name="gstNumber"
                                            placeholder="GST Number"
                                            value={formData.gstNumber}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-4">
                                        <input
                                            type="text"
                                            name="panDetails"
                                            placeholder="PAN Details"
                                            value={formData.panDetails}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-4">
                                        <input
                                            type="text"
                                            name="bankAccount"
                                            placeholder="Bank Account Number"
                                            value={formData.bankAccount}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    {submissionError && <p className="text-danger text-center">{submissionError}</p>}
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default GstDetails;
