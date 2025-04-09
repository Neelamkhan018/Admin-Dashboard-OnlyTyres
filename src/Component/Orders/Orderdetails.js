


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../Siderbar/Sidebar";
import Navbar from "../Navbar/Navbar";



import url from "../../env.js"


export default function Orderdetail() {

  const { orderId } = useParams(); // Get orderId from URL
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
 
  useEffect(() => {
    fetch(`${url.nodeapipath}/orders/${orderId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Order Data:", data); // Debugging step
        setOrder(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [orderId]);
  



  useEffect(() => {
    // Fetch order details from API
    fetch(`${url.nodeapipath}/customer/${orderId}`) // Adjust API endpoint here
      .then((response) => {
        if (!response.ok) {
          throw new Error("Order not found");
        }
        return response.json();
      })
      .then((data) => {
        setOrder(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [orderId]);


  const getStatusBadge = (status) => {
    switch (status) {
      case 'processing':
        return 'bg-primary text-white'; // Grey for processing
      case 'completed':
        return 'bg-success text-white'; // Green for completed
      case 'cancelled':
        return 'bg-danger text-white'; // Red for cancelled
      case 'rejected':
        return 'bg-warning text-white'; // Yellow for rejected
      default:
        return 'bg-primary text-white'; // Default light background
    }
  };
  
  

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
  
    // Update UI immediately for a better UX
    setOrder(prev => ({
      ...prev,
      status: newStatus,
      completedDate: newStatus === 'completed' ? new Date().toISOString() : prev.completedDate
    }));
  
    // Send update request to backend
    fetch(`${url.nodeapipath}/status/${orderId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        status: newStatus,
        completedDate: newStatus === 'completed' ? new Date().toISOString() : null
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log("Updated Order Status:", data);
    })
    .catch(error => {
      console.error("Error updating status:", error);
      alert("Failed to update order status");
    });
  };
  

  


  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-danger">{error}</p>;

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
                  <h1>Order Detail</h1>
                  <p className="breadcrumbs">
                    <span><a href="#">Home</a></span>
                    <span><i className="mdi mdi-chevron-right"></i></span> Orders
                  </p>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="ec-odr-dtl card card-default">
                      <div className="card-header card-header-border-bottom d-flex justify-content-between">
                        <h2 className="ec-odr">Order Detail<br />
                          <span className="small">Order ID: #{order.orderId}</span>
                        </h2>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-3 col-lg-6">

<address className="info-grid">
  <div className="info-title"><strong>Customer:</strong></div><br />
  <div className="info-content">
    {order?.customer?.name || "N/A"} {order?.customer?.lastname || "N/A"}<br />
    {order?.customer?.address || "N/A"}<br />
    {order?.customer?.state || "N/A"}<br />
    {order?.customer?.pincode || "N/A"}<br />
    <abbr title="Phone">Phone:</abbr> {order?.customer?.mobilenumber || "N/A"}
  </div>
</address>


                          </div>
                          <div className="col-xl-3 col-lg-6">
  <address className="info-grid">
    <div className="info-title"><strong>Delivery Method and Time:</strong></div><br />
    <div className="info-content">Delivery Method : {order.items[0]?.deliveryType || "Not Provided"}<br />
  Estimated Time: {order.items[0]?.leastTime || "Not Available"}
</div>
  </address>
</div>


                          <div className="col-xl-3 col-lg-6">
                            <address className="info-grid">
                              <div className="info-title"><strong>Payment Method:</strong></div><br />
                              <div className="info-content">
                              {order.payment?.method || "N/A"}<br />
                                {order?.customer?.email || "N/A"}
                              </div>
                            </address>
                          </div>

<div className="col-xl-3 col-lg-6">
  <address className="info-grid">
    <div className="info-title"><strong>Order Date:</strong></div><br />
    <div className="info-content">
      {new Date(order.date).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }).replace(" ", "")},<br/>
      {new Date(order.date).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      })}
    </div>
  </address>
</div>


                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <h3 className="tbl-title">PRODUCT SUMMARY</h3>
                            <div className="table-responsive">
                              <table className="table table-striped o-tbl">
                                <thead>
                                  <tr className="line">
                                    <td><strong>#</strong></td>
                                    <td className="text-center"><strong>IMAGE</strong></td>
                                    <td className="text-center"><strong>PRODUCT</strong></td>
                                    <td className="text-center"><strong>PRICE/UNIT</strong></td>
                                    <td className="text-right"><strong>QUANTITY</strong></td>
                                    <td className="text-right"><strong>SUBTOTAL</strong></td>
                                  </tr>
                                </thead>
                                <tbody>
                                  {order.items?.map((item, index) => (
                                    <tr key={item.productId}>
                                      <td>{index + 1}</td>
                                      <td><img className="product-img" src={item.image || "assets/img/products/default.jpg"} alt="" /></td>
                                      <td><strong>{item.title || "Product Not Found"}</strong><br /></td>
                                      <td className="text-center">₹{item.price.toFixed(2)}</td>
                                      <td className="text-center">{item.quantity}</td>
                                      <td className="text-right">₹{(item.price * item.quantity).toFixed(2)}</td>
                                    </tr>
                                  ))}
                                  <tr>
                                    <td colSpan="4"></td>
                                    <td className="text-right"><strong>Total</strong></td>
                                    <td className="text-right"><strong>₹{order.totalAmount.toFixed(2)}</strong></td>
                                  </tr>
                                  <tr>
                                    <td colSpan="4"></td>
                                      <td className="text-right"><strong>Payment Status</strong></td>
                                      <td className="text-right"><strong>Paid</strong></td>  
                                  </tr>
<tr>
  <td colSpan="4"></td>
  <td className="text-right"><strong>Order Status</strong></td>
  <td className="text-right">
    {/* Wrap the dropdown in a properly sized badge */}
    <span 
      className={`badge ${getStatusBadge(order.status)} px-2 py-2`} 
      style={{ fontSize: '15px', lineHeight: '1.5', display: 'inline-flex', alignItems: 'center' }} // Ensures vertical centering
    >
      <select 
        className="border-0"
        value={order.status}
        onChange={handleStatusChange}
        style={{
          padding: '8px 12px', // Adjusted padding for proper spacing
          backgroundColor: 'transparent', // Transparent to match the badge
          color: 'inherit', 
          border: 'none',
          appearance: 'none', // Removes default dropdown arrow styling
          fontSize: '14px', // Bigger font for dropdown text
          lineHeight: '1.5', // Ensures text is vertically aligned
        }}
      >
        <option value="processing" className="text-primary">Processing</option> {/* Grey */}
        <option value="completed" className="text-success">Completed</option> {/* Green */}
        <option value="cancelled" className="text-danger">Cancelled</option> {/* Red */}
        <option value="rejected" className="text-warning">Rejected</option> {/* Yellow */}
      </select>
    </span>

    {order.status === 'completed' && order.completedDate && (
      <div className="text-muted small mt-1">
        Completed on: {new Date(order.completedDate).toLocaleDateString()}
      </div>
    )}
  </td>
</tr>




                               </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                     </div>
                    </div>
                    <footer className="footer mt-auto">
                      <div className="copyright bg-white">
                        <p>© {new Date().getFullYear()} Ekka Admin Dashboard. All Rights Reserved.</p>
                      </div>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}