


import React, { useEffect, useState } from "react";
import Sidebar from "../Siderbar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";


import url from "../../env.js"


export default function Neworders() {

  const navigate = useNavigate();
  
  
    useEffect(() => {
      // Check if the user navigated directly to this page
      if (document.referrer === '') {
          // If the referrer is empty, redirect to home or another page
          navigate('/');
      }
  }, [navigate]);
  
  
  

  const [orders, setOrders] = useState([]);
  const [successMessage, setSuccessMessage] = useState(""); // State for success message


useEffect(() => {
  const clientId = localStorage.getItem("clientId"); // Get clientId from localStorage

  if (!clientId) {
    console.error("No clientId found in localStorage");
    return;
  }

  fetch(`${url.nodeapipath}/orders?clientId=${clientId}`)
    .then((response) => response.json())
    .then((data) => {
      const sortedOrders = data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setOrders(sortedOrders);
    })
    .catch((error) => console.error("Error fetching orders:", error));
}, []);





  const handleCancelOrder = (orderId) => {
    const clientId = localStorage.getItem("clientId"); // ✅ Get clientId from localStorage
  
    fetch(`${url.nodeapipath}/orders/cancel/${orderId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ clientId }), // ✅ Send clientId in request body
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // ✅ Update the order status to "Cancelled" in the frontend
          setOrders((prevOrders) =>
            prevOrders.map((order) =>
              order._id === orderId
                ? { ...order, status: "Cancelled" }
                : order
            )
          );
  
          // ✅ Show success message
          setSuccessMessage("Order cancelled successfully!");
  
          // ✅ Hide the success message after 2 seconds
          setTimeout(() => {
            setSuccessMessage("");
          }, 2000);
        } else {
          alert(data.message); // Display the server message (e.g., Unauthorized)
        }
      })
      .catch((error) => console.error("Error canceling order:", error));
  };
  
  


  
  

  const handleRejectOrder = (orderId) => {
    fetch(`${url.nodeapipath}/reject/${orderId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Update order status to "Rejected" in the frontend
          setOrders((prevOrders) =>
            prevOrders.map((order) =>
              order._id === orderId ? { ...order, status: "Rejected" } : order
            )
          );
  
          // Show success message
          setSuccessMessage("Order rejected successfully!");
  
          // Hide the success message after 2 seconds
          setTimeout(() => setSuccessMessage(""), 2000);
        } else {
          alert("Failed to reject the order.");
        }
      })
      .catch((error) => console.error("Error rejecting order:", error));
  };
  



  return (
    <>
      <body className="ec-header-fixed ec-sidebar-fixed ec-sidebar-dark ec-header-light" id="body">
        <div className="wrapper">
          <Sidebar />
          <div className="ec-page-wrapper">
            <Navbar />
            <div className="ec-content-wrapper">
              <div className="content">
                <div className="breadcrumb-wrapper breadcrumb-wrapper-2">
                  <h1>New Orders</h1>
                  <p className="breadcrumbs">
                    <span><a href="#">Home</a></span>
                    <span><i className="mdi mdi-chevron-right"></i></span>
                    Orders
                  </p>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="card card-default">
                      <div className="card-body">
                        {successMessage && (
                          <div className="alert alert-success text-center">{successMessage}</div>
                        )}
                        <div className="table-responsive">
                          <table id="responsive-data-table" className="table" style={{ width: "100%" }}>
                            <thead>
                              <tr>
                                <th>Order ID</th>
                                <th>Item</th>
                                <th>Name</th>
                                <th>Customer Email</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Payment</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {Array.isArray(orders) && orders.length > 0 ? (
                                orders.map((order) => (
                                  <tr key={order._id}>
                                    <td>{order.orderId}</td>
                                    <td>
                                      {Array.isArray(order.items) &&
                                        order.items.map((item) => (
                                          <img
                                            key={item.productId}
                                            className="product-img tbl-img"
                                            src={item.image || "assets/img/products/default.jpg"}
                                            alt="product"
                                            style={{ width: "50px", height: "50px" }}
                                          />
                                        ))}
                                    </td>
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
                                      ) : "Customer details not found"}
                                    </td>
                                    <td>
                                      {Array.isArray(order.items) &&
                                        order.items.map((item) => (
                                          <div key={item.productId}>{item.quantity}</div>
                                        ))}
                                    </td>
                                    <td>{order.totalAmount.toFixed(2)}</td>
                                    <td>
                                      {order.payment?.method === "Online" ? (
                                        <span>Paid</span>
                                      ) : (
                                        <span>COD</span>
                                      )}
                                    </td>
<td>
  <span
    className={`mb-2 mr-2 badge ${
      order.status.trim().toLowerCase() === "cancelled" ? 'badge-danger' : // Red
      order.status.trim().toLowerCase() === "rejected" ? 'badge-warning' : // Yellow
      order.status.trim().toLowerCase() === "completed" ? 'badge-success' : // Green
      order.status.trim().toLowerCase() === "processing" ? "badge-primary" : // Blue
      order.status.trim().toLowerCase() === "pending" ? "badge-secondary" : // Light Blue
      'badge-secondary' // Default Gray
    }`}
  >
    {order.status}
  </span>
</td>




                                    <td>{new Date(order.date).toLocaleDateString()}</td>
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
                                  <td colSpan="10">No orders found</td>
                                </tr>
                              )}
                            </tbody>
                            {/* Add total row */}
{/* <tfoot>
  <tr>
    <td colSpan="4"><strong>Total Orders:</strong></td>
    <td colSpan="2"><strong>{orders.length}</strong></td>
    <td colSpan="2"><strong>Total Amount:</strong></td>
    <td colSpan="2"><strong>₹ {orders.reduce((sum, order) => sum + order.totalAmount, 0).toFixed(2)}</strong></td>
  </tr>
</tfoot> */}


<tfoot>
  <tr>
    <td colSpan="4"><strong>Total Orders:</strong></td>
    <td colSpan="2">
      <strong>
        {orders.filter(order => order.status.trim().toLowerCase() !== "cancelled" && order.status.trim().toLowerCase() !== "rejected").length}
      </strong>
    </td>
    <td colSpan="2"><strong>Total Amount:</strong></td>
    <td colSpan="2">
      <strong>
        ₹ {orders
          .filter(order => order.status.trim().toLowerCase() !== "cancelled" && order.status.trim().toLowerCase() !== "rejected")
          .reduce((sum, order) => sum + order.totalAmount, 0)
          .toFixed(2)}
      </strong>
    </td>
  </tr>
</tfoot>

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
                  <a className="text-primary" href="https://themeforest.net/user/ashishmaraviya" target="_blank">
                    Ekka Admin Dashboard
                  </a>
                  . All Rights Reserved.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </>
  );
}







