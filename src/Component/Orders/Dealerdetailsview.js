import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from "../Siderbar/Sidebar";
import Navbar from '../Navbar/Navbar';

import url from "../../env.js"



export default function DealerDetailsView() {
  const { id } = useParams(); // Dealer ID (clientId)
  const [dealer, setDealer] = useState(null);
  const [business, setBusiness] = useState(null);
  const [bankDetails, setBankDetails] = useState(null); // State for bank details
  const [gstDetails, setGstDetails] = useState(null); // State for GST details
  const [salesData, setSalesData] = useState(null); // New state for total sales

  const fetchDealerDetails = async () => {
    try {
      const response = await axios.get(`${url.nodeapipath}/dealer/${id}`);
      if (response.data.success) {
        setDealer(response.data.dealer);
      } else {
        console.error("Dealer not found");
      }
    } catch (error) {
      console.error("Error fetching dealer details:", error);
    }
  };

  const fetchBusinessDetails = async () => {
    try {
      const response = await axios.get(`${url.nodeapipath}/business/${id}`);
      if (response.data.success) {
        setBusiness(response.data.business);
      } else {
        console.error("Business details not found");
      }
    } catch (error) {
      console.error("Error fetching business details:", error);
    }
  };



  const fetchBankDetails = async () => {
    try {
      const response = await axios.get(`${url.nodeapipath}/get-bank-details/${id}`);
      if (response.data.success) {
        setBankDetails(response.data.bank);
      } else {
        console.error("Bank details not found");
      }
    } catch (error) {
      console.error("Error fetching bank details:", error);
    }
  };


  const fetchGstDetails = async () => {
    try {
      const response = await axios.get(`${url.nodeapipath}/get-gst-details/${id}`);
      if (response.data.success) {
        setGstDetails(response.data.gst);
      } else {
        console.error("GST details not found");
      }
    } catch (error) {
      console.error("Error fetching GST details:", error);
    }
  };

 
   // Fetch total sales amount and orders
   const fetchTotalSales = async () => {
    try {
      const response = await axios.get(`${url.nodeapipath}/get-total-amount-by-client/${id}`);
      if (response.data.success) setSalesData(response.data.totalAmounts);
    } catch (error) {
      console.error("Error fetching total sales data:", error);
    }
  };
  
  useEffect(() => {
    if (id) {
      fetchDealerDetails();
      fetchBusinessDetails();
      fetchBankDetails(); 
      fetchGstDetails();
      fetchTotalSales();
      
    }
  }, [id]);
  



  if (!dealer) {
    return <p>Loading dealer details...</p>;
  }

  return (
    <div className="ec-header-fixed ec-sidebar-fixed ec-sidebar-dark ec-header-light" id="body">
      <div className="wrapper">
        <Sidebar />
        <div className="ec-page-wrapper">
          <Navbar />
          <div className="ec-content-wrapper">
            <div className="content">
              <div className="breadcrumb-wrapper breadcrumb-wrapper-2">
                <h1>Dealer Details</h1>
                <p className="breadcrumbs">
                  <span><a href="#">Home</a></span>
                  <span><i className="mdi mdi-chevron-right"></i></span> Dealer Details
                </p>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="ec-odr-dtl card card-default">
                    <div className="card-header card-header-border-bottom d-flex justify-content-between">
                      <h2 className="ec-odr">Dealer Information</h2>
                    </div>
                    <div className="card-body">
                      <div className="row">
                  


<div className="col-xl-3 col-lg-6">
  <div className="card shadow-sm h-100 d-flex flex-column">
    <div className="card-header text-white text-center" style={{ backgroundColor: '#9D68E2' }}>
    <i className="mdi mdi-account-outline text-white fs-3 mr-1"></i>
      <h5 className="mb-0">Dealer Details</h5>
    </div>
    <div className="card-body d-flex flex-column justify-content-between">
      <table className="table table-bordered mb-0">
        <tbody>
          <tr>
            <td><strong>Name:</strong></td>
            <td>{dealer?.username || "N/A"}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td>{dealer?.email || "N/A"}</td>
          </tr>
          <tr>
            <td><strong>Phone:</strong></td>
            <td>{dealer?.mobileNumber || "N/A"}</td>
          </tr>
          <tr>
            <td><strong>Join Date:</strong></td>
            <td>
              {dealer?.joinDate
                ? new Date(dealer.joinDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "N/A"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<div className="col-xl-3 col-lg-6">
  <div className="card shadow-sm h-100 d-flex flex-column">
    <div className="card-header text-white text-center" style={{ backgroundColor: '#9D68E2' }}>
    <i className="bi bi-bank fs-4 mr-1"></i>
      <h5 className="mb-0">Bank Details</h5>
    </div>
    <div className="card-body d-flex flex-column justify-content-between">
      <table className="table table-bordered mb-0">
        <tbody>
          <tr>
            <td><strong>Account Holder Name:</strong></td>
            <td>{bankDetails?.accountholdername || "N/A"}</td>
          </tr>
          <tr>
            <td><strong>Account No:</strong></td>
            <td>{bankDetails?.bankAccount || "N/A"}</td>
          </tr>
          <tr>
            <td><strong>IFSC Code:</strong></td>
            <td>{bankDetails?.ifsc || "N/A"}</td>
          </tr>
          <tr>
            <td><strong>Account Type:</strong></td>
            <td>{bankDetails?.accounttype || "N/A"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>



<div className="col-xl-3 col-lg-6">
  <div className="card shadow-sm">
    <div className="card-header text-white text-center" style={{ backgroundColor: '#9D68E2' }}>
    <i className="bi bi-building fs-4 mr-1"></i>
      <h5 className="mb-0">Business Details</h5>
    </div>
    <div className="card-body">
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td><strong>Store Name:</strong></td>
            <td>{business?.storename || "N/A"}</td>
          </tr>
          <tr>
            <td><strong>Address:</strong></td>
            <td>{business?.address || "N/A"}</td>
          </tr>
          <tr>
            <td><strong>Pincode:</strong></td>
            <td>{business?.pincode || "N/A"}</td>
          </tr>
          <tr>
            <td><strong>Product Category:</strong></td>
            <td>{business?.productCategory || "N/A"}</td>
          </tr>
          <tr>
            <td><strong>Method:</strong></td>
            <td>{Array.isArray(business?.method) ? business.method.join(", ") : business?.method || "N/A"}</td>
          </tr>
          <tr>
            <td><strong>Least Time:</strong></td>
            <td>{business?.leastTime || "N/A"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>


  <div className="col-xl-3 col-lg-6">
                  <div className="card shadow-sm h-100 d-flex flex-column">
    <div className="card-header text-white text-center" style={{ backgroundColor: '#9D68E2' }}>
    <i className="bi bi-receipt fs-4 mr-1"></i>
                      <h5 className="mb-0">TAX Details</h5>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                      <table className="table table-bordered mb-0">
                        <tbody>
                          <tr>
                            <td><strong>GST Number:</strong></td>
                            <td>{gstDetails?.gstNumber || "N/A"}</td>
                          </tr>
                          <tr>
                            <td><strong>Account No.:</strong></td>
                            <td>{gstDetails?.bankAccount || "N/A"}</td>
                          </tr>
                          <tr>
                            <td><strong>PAN Number:</strong></td>
                            <td>{gstDetails?.panDetails || "N/A"}</td>
                          </tr>

                          <tr>
                            <td><strong>Mobile No.:</strong></td>
                            <td>{gstDetails?.mobileNumber || "N/A"}</td>
                          </tr>

                          <tr>
                            <td><strong>Email:</strong></td>
                            <td>{gstDetails?.email || "N/A"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>



                <div className="col-xl-6 col-lg-6 mt-5">
                          <div className="card shadow-sm h-100 d-flex flex-column">                  
                           <div className="card-header bg-warning text-white text-center d-flex align-items-center justify-content-center" style={{ backgroundColor: '#17a2b8' }}>
                             <i class="mdi mdi-cart-outline text-white fs-3 mr-1"></i>  
                               <h5 className="mb-0">Total Items Sold</h5>
                            </div>
                            <div className="card-body d-flex align-items-center justify-content-center">
  <h2 className="text-center w-100 d-flex justify-content-center">{salesData?.totalOrders || "0"}</h2>
</div>
                          </div>
                        </div>


<div className="col-xl-6 col-lg-6 mt-5">
  <div className="card shadow-sm h-100 d-flex flex-column">
    <div 
      className="card-header bg-success text-white text-center d-flex align-items-center justify-content-center" 
      style={{ backgroundColor: '#17a2b8' }}
    >
      <i className="mdi mdi-diamond-stone text-white fs-3 mr-2"></i>
      <h5 className="mb-0">Total Revenue</h5>
    </div>
<div className="card-body d-flex align-items-center justify-content-center" style={{ height: "100px" }}>
  <h2 className="mb-0 text-center w-100 d-flex justify-content-center">₹{salesData?.totalAmount?.toLocaleString() || "0"}</h2>
</div>

  </div>
</div>
                      </div>
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
  );
}
