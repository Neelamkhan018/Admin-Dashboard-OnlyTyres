




import React, { useEffect, useState } from 'react';
import Sidebar from '../Siderbar/Sidebar';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


import url from "../../env.js"


export default function Orderhistory() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state


const navigate = useNavigate()

 useEffect(() => {
    // Check if the user navigated directly to this page
    if (document.referrer === '') {
        // If the referrer is empty, redirect to home or another page
        navigate('/');
    }
}, [navigate]);




  const fetchOrders = async () => {
    try {
      const clientId = localStorage.getItem("clientId"); // Get client ID from localStorage
  
      // Debugging: Check if clientId is retrieved correctly
      console.log("Retrieved Client ID:", clientId);
  
      if (!clientId) {
        console.error("Client ID is missing! Ensure clientId is stored in localStorage.");
        return;
      }
  
      const response = await axios.get(`${url.nodeapipath}/orders-history?clientId=${clientId}`);
      console.log("Fetched Orders:", response.data);
  
      // Sort orders by date (newest first)
      const sortedOrders = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
  
      setOrders(sortedOrders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  
  useEffect(() => {
    fetchOrders();
  }, []);
  

  
  useEffect(() => {
    fetchOrders();
  }, []);
  



 
 
  

  return (
    <div className="ec-header-fixed ec-sidebar-fixed ec-sidebar-dark ec-header-light" id="body">
      <div className="wrapper">
        {/* Sidebar Component */}
        <Sidebar />

        <div className="ec-page-wrapper">
          {/* Navbar Component */}
          <Navbar />

          <div className="ec-content-wrapper">
            <div className="content">
              {/* Breadcrumb Navigation */}
              <div className="breadcrumb-wrapper breadcrumb-wrapper-2">
                <h1>Orders History</h1>
                <p className="breadcrumbs">
                  <span><a href="#">Home</a></span>
                  <span><i className="mdi mdi-chevron-right"></i></span>History
                </p>
              </div>

              {/* Orders Table */}
              <div className="row">
                <div className="col-12">
                  <div className="card card-default">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table id="responsive-data-table" className="table" style={{ width: "100%" }}>
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Customer Name</th>
                              <th>Email</th>
                              <th>Items</th>
                              <th>Price</th>
                              <th>Payment</th>
                              <th>Status</th>
                              <th>Date</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {orders.length > 0 ? (
                              orders.map((order) => (
                                <tr key={order._id}>
                                  <td>{order.orderId || "N/A"}</td>
                                  <td>
                                    {Array.isArray(order.items) && order.items.map((item) => (
                                      <div key={item._id}>{item.title || "Product Not Found"}</div>
                                    ))}
                                  </td>
                                  <td>
                                    {order.customer ? (
                                      <>
                                        <strong>{order.customer.name || "No Name"}</strong>
                                        <br />
                                        <span>{order.customer.email || "No Email"}</span>
                                      </>
                                    ) : (
                                      "Customer details not found"
                                    )}
                                  </td>
                                  <td>{order.items?.length || 0}</td>
                                  <td>₹{order.totalAmount?.toFixed(2)}</td>
                                  <td>{order.payment?.method || "N/A"}</td>
                                  <td>
                                    <span
                                      className={`mb-2 mr-2 badge ${order.status === "Cancelled"
                                        ? 'badge-danger'
                                        : order.status === "Returned"
                                          ? 'badge-warning'
                                          : order.status === "Delivered"
                                            ? 'badge-success'
                                            : 'badge-secondary'}`}
                                    >
                                      {order.status}
                                    </span>
                                  </td>
                                  <td>{order.date ? new Date(order.date).toLocaleDateString() : "N/A"}</td>
                                   <td>
                                      <div className="btn-group mb-1">
                                        <button 
                                          className="btn btn-outline-success"
                                          onClick={() => navigate(`/order-detail/${order._id}`)} 
                                        >
                                          Info
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                          data-bs-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                          data-display="static"
                                        >
                                          <span className="sr-only">Info</span>
                                        </button>
                                        <div className="dropdown-menu">
                                          <a className="dropdown-item"  onClick={() => navigate(`/order-detail/${order._id}`)}  >Detail</a>
                                          <a className="dropdown-item" onClick={() => navigate(`/invoice/${order._id}`)}  >Invoice</a>
                                          <button className="dropdown-item text-warning" onClick={() => handleRejectOrder(order._id)}>Reject</button>
                                          <button
                                            className="dropdown-item text-danger"
                                            onClick={() => handleCancelOrder(order._id)}
                                          >
                                            Cancel
                                          </button>
                                        </div>
                                      </div>
                                    </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="9" className="text-center">No orders found</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="footer mt-auto">
              <div className="copyright bg-white">
                <p>
                  Copyright &copy; <span id="ec-year">{new Date().getFullYear()}</span>
                  <a className="text-primary" href="https://themeforest.net/user/ashishmaraviya" target="_blank" rel="noopener noreferrer">
                    Ekka Admin Dashboard
                  </a>
                  . All Rights Reserved.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
