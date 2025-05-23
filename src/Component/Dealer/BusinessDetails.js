
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


import url from "../../env.js"


const BusinessDetails = () => {



const navigate = useNavigate();

      useEffect(() => {
        // Check if the user navigated directly to this page
        if (document.referrer === '') {
            // If the referrer is empty, redirect to home or another page
            navigate('/');
        }
    }, [navigate]);
    



    const [formData, setFormData] = useState({
        storename: '',
        productCategory: '',
        address: '',
        method: [],
        leastTime: '',
        pincode: '', // Add pincode field
    });

    const [successMessage, setSuccessMessage] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData((prev) => ({
                ...prev,
                method: checked 
                    ? [...prev.method, value] 
                    : prev.method.filter((m) => m !== value)
            }));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    
    //     const clientId = localStorage.getItem("clientId"); // Get clientId from localStorage
    //     if (!clientId) {
    //         alert("Client ID is missing. Please log in again.");
    //         return;
    //     }
    
    //     try {
    //         const response = await axios.post(`${url.nodeapipath}/add-business-details`, {
    //             ...formData,
    //             clientId, // Add clientId to request
    //         });
    
    //         console.log(response.data);
    //         setSuccessMessage(true);
    //         setFormData({
    //             storename: '',
    //             productCategory: '',
    //             address: '',
    //             method: [],
    //             leastTime: '',
    //             pincode: '',
    //         });
    //     } catch (error) {
    //         console.error('Error adding business:', error);
    //         alert('Failed to add business details.');
    //     }
    // };
    




const handleSubmit = async (e) => {
    e.preventDefault();

    const clientId = localStorage.getItem("clientId");
    if (!clientId) {
        alert("Client ID is missing. Please log in again.");
        return;
    }

    // Split comma-separated pincodes into array and trim spaces
    const pincodeArray = formData.pincode
        .split(',')
        .map((code) => code.trim())
        .filter((code) => code !== '');

    try {
        const response = await axios.post(`${url.nodeapipath}/add-business-details`, {
            ...formData,
            pincode: pincodeArray,
            clientId,
        });

        console.log(response.data);
        setSuccessMessage(true);
        setFormData({
            storename: '',
            productCategory: '',
            address: '',
            method: [],
            leastTime: '',
            pincode: '',
        });
    } catch (error) {
        console.error('Error adding business:', error);
        alert('Failed to add business details.');
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
                                    Business Details Form
                                </a>
                            </div>
                        </div>
                        <div className="card-body p-6">
                            <h4 className="text-dark mb-4 text-center">Enter Business Details</h4>
                            {successMessage ? (
                                <div>
                                    <p className="text-success text-center">Business details saved successfully!</p>
                                    <div className="d-grid">
                                        <Link to="/dealer-category">
                                            <button className="btn btn-primary">Go to Next</button>
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <form className="dealer-login-form" onSubmit={handleSubmit}>
                                    <div className="form-group mb-4">
                                        <input
                                            type="text"
                                            name="storename"
                                            placeholder="Store Name"
                                            value={formData.storename}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-4">
                                        <input
                                            type="text"
                                            name="productCategory"
                                            placeholder="Product Category"
                                            value={formData.productCategory}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-4">
                                        <input
                                            type="text"
                                            name="address"
                                            placeholder="Address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    {/* <div className="form-group mb-4">
                                        <input
                                            type="text"
                                            name="pincode"
                                            placeholder="Pincode"
                                            value={formData.pincode}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div> */}

                                    <div className="form-group mb-4">
    <input
        type="text"
        name="pincode"
        placeholder="Enter multiple pincodes separated by commas"
        value={formData.pincode}
        onChange={handleChange}
        className="form-control"
        required
    />
</div>

                                    <div className="form-group mb-1 d-flex gap-6">
                                        <label className="text-dark">Shipping Method:</label>
                                        <div>
                                            <input
                                                type="checkbox"
                                                name="method"
                                                value="shipping"
                                                onChange={handleChange}
                                            /> Shipping
                                        </div>
                                        <div>
                                            <input
                                                type="checkbox"
                                                name="method"
                                                value="fitting"
                                                onChange={handleChange}
                                            /> Fitting
                                        </div>
                                    </div>
                                


<div className="form-group mb-4">
    <select
        name="leastTime"
        value={formData.leastTime}
        onChange={handleChange}
        className="form-control"
        required
    >
        <option value="">Select Least Time</option>
        <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
        <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM</option>
        <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
        <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
        <option value="06:00 PM - 08:00 PM">06:00 PM - 08:00 PM</option>
    </select>
</div>

                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary">Save</button>
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

export default BusinessDetails;
