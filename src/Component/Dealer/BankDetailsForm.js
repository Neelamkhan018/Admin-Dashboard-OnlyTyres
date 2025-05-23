
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import url from "../../env.js"

const BankDetailsForm = () => {


    const navigate = useNavigate();

    useEffect(() => {
      // Check if the user navigated directly to this page
      if (document.referrer === '') {
          // If the referrer is empty, redirect to home or another page
          navigate('/');
      }
  }, [navigate]);
  




    const [formData, setFormData] = useState({
        accountholdername: '',
        bankAccount: '',
        ifsc: '',
        accounttype: '',
        reenteraccountnumber: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const clientId = localStorage.getItem('clientId'); // Get clientId from localStorage
        if (!clientId) {
            setError("Client ID not found. Please register first.");
            return;
        }
    
        if (formData.bankAccount !== formData.reenteraccountnumber) {
            setError("Bank account number and re-entered account number must match.");
            return;
        }
    
        const data = { ...formData, clientId }; // Add clientId to form data
    
        try {
            await axios.post(`${url.nodeapipath}/bank-details`, data);
            setSuccess(true);
            setError('');
            setFormData({
                accountholdername: '', bankAccount: '', ifsc: '', accounttype: '', reenteraccountnumber: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setError('Failed to submit bank details');
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
                                    Bank Details Form
                                </a>
                            </div>
                        </div>
                        <div className="card-body p-6">
                            <h4 className="text-dark mb-4 text-center">Enter Bank Details</h4>
                            {success ? (
                                <div>
                                    <p className="text-success text-center">Bank details saved successfully!</p>
                                    <div className="d-grid">
                                        <Link to="/business-details">
                                            <button className="btn btn-primary">Go to Next</button>
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <form className="dealer-login-form" onSubmit={handleSubmit}>
                                    <div className="form-group mb-4">
                                        <input
                                            type="text"
                                            name="accountholdername"
                                            placeholder="Account Holder Name"
                                            value={formData.accountholdername}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-4">
                                        <input
                                            type="number"
                                            name="bankAccount"
                                            placeholder="Bank Account Number"
                                            value={formData.bankAccount}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-4">
                                        <input
                                            type="text"
                                            name="ifsc"
                                            placeholder="IFSC Code"
                                            value={formData.ifsc}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-4">
                                        <select
                                            name="accounttype"
                                            value={formData.accounttype}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        >
                                            <option value="">Select Type</option>
                                            <option value="savings">Savings</option>
                                            <option value="current">Current</option>
                                        </select>
                                    </div>
                                    <div className="form-group mb-4">
                                        <input
                                            type="number"
                                            name="reenteraccountnumber"
                                            placeholder="Re-enter Account Number"
                                            value={formData.reenteraccountnumber}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    {error && <p className="text-danger text-center">{error}</p>}
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

export default BankDetailsForm;
