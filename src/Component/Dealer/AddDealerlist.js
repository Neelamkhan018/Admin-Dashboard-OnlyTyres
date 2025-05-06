




import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Siderbar/Sidebar";

import url from "../../env.js"

const AddDealerList = () => {
  const { state } = useLocation();
  const [dealerList, setDealerList] = useState([]);
  const [prices, setPrices] = useState({});
  const [alignments, setAlignments] = useState({});
  const [tyreBrands, setTyreBrands] = useState({});

  const navigate = useNavigate();


      useEffect(() => {
        // Check if the user navigated directly to this page
        if (document.referrer === '') {
            // If the referrer is empty, redirect to home or another page
            navigate('/');
        }
    }, [navigate]);
    

  useEffect(() => {
    const loggedInDealerId = localStorage.getItem("clientId");
  
    // Retrieve dealer list
    const storedDealerLists = JSON.parse(localStorage.getItem("dealerLists")) || {};
    setDealerList(storedDealerLists[loggedInDealerId] || []);
  
    // Retrieve dealer-specific prices
    const dealerPrices = JSON.parse(localStorage.getItem(`dealerPrices_${loggedInDealerId}`)) || {};
    setPrices(dealerPrices);
  
    // Fetch tyre brand names from API
    fetch(`${url.nodeapipath}/get-tyre-brands`)
      .then((response) => response.json())
      .then((data) => {
        const brandMapping = {};
        data.forEach((brand) => {
          brandMapping[brand._id] = brand.name; // Map ID to name
        });
        setTyreBrands(brandMapping);
      })
      .catch((error) => console.error("Error fetching tyre brands:", error));
  
    // Load fitting alignments for this dealer only
    const savedAlignments = JSON.parse(localStorage.getItem(`fittingAlignments_${loggedInDealerId}`)) || {};
    setAlignments(savedAlignments);
  }, []);
  
  

  const handlePriceChange = async (id, value) => {
    const loggedInDealerId = localStorage.getItem("clientId");
    const newPrice = value.replace(/\D/g, ""); // Remove non-numeric characters
  
    // Update state locally
    const newPrices = { ...prices, [id]: newPrice };
    setPrices(newPrices);
  
    // Store in localStorage for persistence
    localStorage.setItem(`dealerPrices_${loggedInDealerId}`, JSON.stringify(newPrices));
  
    // Send the updated price to the backend API
    try {
      const response = await fetch(`${url.nodeapipath}/add-dealer-price`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientId: loggedInDealerId,
          tyreId: id,
          price: newPrice,
        }),
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log("Dealer price updated:", data);
      } else {
        console.error("Error updating dealer price:", data.message);
      }
    } catch (error) {
      console.error("Failed to update dealer price:", error);
    }
  };
  

 
  const handleAlignmentChange = (id) => {
    const loggedInDealerId = localStorage.getItem("clientId");
  
    // Get the dealer's stored alignments
    const storedAlignments = JSON.parse(localStorage.getItem(`fittingAlignments_${loggedInDealerId}`)) || {};
  
    // Update the specific dealer's alignments
    const newAlignments = { ...storedAlignments, [id]: !storedAlignments[id] };
    setAlignments(newAlignments);
  
    // Save updated alignments for this dealer only
    localStorage.setItem(`fittingAlignments_${loggedInDealerId}`, JSON.stringify(newAlignments));
  };
  


  return (
    <div className="ec-header-fixed ec-sidebar-fixed ec-sidebar-dark ec-header-light" id="body">
      <div className="wrapper">
        <Sidebar />
        <div className="ec-page-wrapper">
          <Navbar />
          <div className="ec-content-wrapper">
            <div className="content">
              <div className="breadcrumb-wrapper d-flex align-items-center justify-content-between">
                <div>
                  <h1>Dealer List</h1>
                  <p className="breadcrumbs">
                    <span>
                      <Link to="/">Home</Link>
                    </span>
                    <span>
                      <i className="mdi mdi-chevron-right"></i>
                    </span>{" "}
                    Dealer List
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="card card-default">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table id="responsive-data-table" className="table" style={{ width: "100%" }}>
                          <thead>
                            <tr>
                              <th>Image</th>
                              <th>Title</th>
                              <th>Vehicle Type</th>
                              <th>Tyre Brand</th>
                              <th>Price</th>
                              <th>Sales Price</th>
                              <th>Your Price</th>
                              <th>Fitting Alignment</th>
                            </tr>
                          </thead>
                          <tbody>
                            {dealerList.length > 0 ? (
                              dealerList.map((tyre) => (
                                <tr key={tyre._id}>
                                  <td>
                                    {tyre.avatarImages && (
                                      <img
                                        // src={`${url.nodeapipath}/uploads/${tyre.avatarImages}`}
                src={`https://tyres.blr1.digitaloceanspaces.com/${tyre.avatarImages}`}

                                        alt="Tyre"
                                        className="tbl-thumb"
                                        style={{ width: "80px", height: "auto" }}
                                      />
                                    )}
                                  </td>
                                  <td>{tyre.title}</td>
                                  <td>{tyre.tyreType}</td>
                                  <td>{tyreBrands[tyre.tyreBrand] || "Unknown Brand"}</td>
                                  <td>₹{tyre.price?.toLocaleString()}</td>
                                  <td>₹{tyre.Salesprice?.toLocaleString()}</td>
                                  <td>
                                    <input
                                      type="text"
                                      placeholder="Enter price"
                                      className="form-control"
                                      value={prices[tyre._id] || ""}
                                      onChange={(e) => handlePriceChange(tyre._id, e.target.value)}
                                      style={{ width: "120px" }}
                                    />
                                  </td>
                                  {/* <td>
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        checked={alignments[tyre._id] || false}
                                        onChange={() => handleAlignmentChange(tyre._id)}
                                      />
                                    </div>
                                  </td> */}

<td>
  <div className="form-check">
    <input
      type="checkbox"
      className="form-check-input"
      checked={alignments[tyre._id] || false}
      onChange={() => handleAlignmentChange(tyre._id)}
    />
  </div>
</td>

                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="8" className="text-center py-4">
                                  No items in dealer list. Go back to select tyres.
                                </td>
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
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AddDealerList;











