
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Sidebar from "../Siderbar/Sidebar";
import Navbar from "../Navbar/Navbar";
import axios from "axios";


import url from "../../env.js"



export default function Dealerview() {
    const [dealers, setDealers] = useState([]);
    const [totalSales, setTotalSales] = useState({});
    const [storeNames, setStoreNames] = useState({});
    const [dealerLists, setDealerLists] = useState({}); 

    const navigate = useNavigate(); 
    
          useEffect(() => {
            // Check if the user navigated directly to this page
            if (document.referrer === '') {
                // If the referrer is empty, redirect to home or another page
                navigate('/');
            }
        }, [navigate]);
        

    useEffect(() => {
        fetchDealers();
        fetchTotalSales();
        fetchDealerLists(); 
    }, []);

    const fetchDealers = async () => {
        try {
            const response = await axios.get(`${url.nodeapipath}/get-dealers`);
            setDealers(response.data.dealers || []);
            fetchStoreNames(response.data.dealers || []);
        } catch (error) {
            console.error("Error fetching dealers:", error);
        }
    };

    const fetchStoreNames = async (dealers) => {
        const names = {};
        await Promise.all(
            dealers.map(async (dealer) => {
                try {
                    const response = await axios.get(`${url.nodeapipath}/get-store/${dealer._id}`);
                    names[dealer._id] = response.data.storename || "N/A";
                } catch (error) {
                    console.error(`Error fetching store name for ${dealer._id}:`, error);
                    names[dealer._id] = "N/A";
                }
            })
        );
        setStoreNames(names);
    };

    const fetchTotalSales = async () => {
        try {
            const response = await axios.get(`${url.nodeapipath}/total-amount-per-dealer`);
            const salesData = response.data.totalAmounts.reduce((acc, item) => {
                acc[item._id] = {
                    totalAmount: item.totalAmount,
                    totalOrders: item.totalOrders
                };
                return acc;
            }, {});
            setTotalSales(salesData);
        } catch (error) {
            console.error("Error fetching total sales:", error);
        }
    };

    const fetchDealerLists = async () => {
        try {
            const response = await axios.get(`${url.nodeapipath}/get-dealer-lists`);
            const dealerLists = response.data.dealerLists.reduce((acc, dealer) => {
                acc[dealer.clientId] = dealer.tyres; 
                return acc;
            }, {});
            setDealerLists(dealerLists);
        } catch (error) {
            console.error("Error fetching dealer lists:", error);
        }
    };



    const formatDate = (dateString) => {
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return "Invalid Date";
        return date.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
    };

    return (
        <>
            <div className="ec-header-fixed ec-sidebar-fixed ec-sidebar-dark ec-header-light" id="body">
                <div className="wrapper">
                    <Sidebar />
                    <div className="ec-page-wrapper">
                        <Navbar />
                        <div className="ec-content-wrapper">
                            <div className="content">
                                <div className="breadcrumb-wrapper breadcrumb-contacts">
                                    <div>
                                        <h1>Dealer List</h1>
                                        <p className="breadcrumbs">
                                            <span><a href="#">Home</a></span>
                                            <span><i className="mdi mdi-chevron-right"></i></span>Vendor
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="ec-vendor-list card card-default">
                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table id="responsive-data-table" className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>StoreName</th>
                                                                <th>Name</th>                                           
                                                                <th>Total Products Added</th>
                                                                <th>Total Items Sold</th>
                                                                <th>Total Revenue</th>
                                                                <th>Status</th>
                                                                <th>Join On</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {dealers.map((dealer, index) => {
                                                                const salesInfo = totalSales[dealer._id] || { totalAmount: 0, totalOrders: 0 };
                                                                const tyresChecked = dealerLists[dealer._id] || 0; 
                                                                return (
                                                                    <tr key={index}>
                                                                        <td>{storeNames[dealer._id] || "Loading..."}</td>
                                                                        <td>{dealer.username}</td>                                                       
                                                                        <td>{tyresChecked}</td> {/* Display the count of tyres added by the dealer */}
                                                                        <td>{salesInfo.totalOrders}</td>
                                                                        <td>₹{salesInfo.totalAmount}</td>
                                                                        <td>
                                                                            <span className={`badge ${tyresChecked > 0 ? 'bg-success' : 'bg-danger'}`}>
                                                                                {tyresChecked > 0 ? 'Active' : 'Inactive'}
                                                                            </span>
                                                                        </td>
                                                                        <td>{formatDate(dealer.joinDate)}</td>
                                                                        <td>
                                                                            <div className="btn-group">
                                                                                <button
                                                                                    type="button"
                                                                                    className="btn btn-outline-success"
                                                                                    onClick={() => navigate(`/dealerdetailsview/${dealer._id}`)} // Navigate on click
                                                                                >
                                                                                    Info
                                                                                </button>
                                                                                <button
                                                                                    type="button"
                                                                                    className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-haspopup="true"
                                                                                    aria-expanded="false"
                                                                                >
                                                                                    <span className="sr-only">Info</span>
                                                                                </button>
                                                                                <div className="dropdown-menu">
                                                                                    <a className="dropdown-item" href="#">Edit</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            })}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer className="footer mt-auto">
                            <div className="copyright bg-white">
                                <p>
                                    Copyright &copy; <span id="ec-year"></span>
                                    <a className="text-primary" href="https://themeforest.net/user/ashishmaraviya" target="_blank" rel="noopener noreferrer"> Ekka Admin Dashboard</a>. All Rights Reserved.
                                </p>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}