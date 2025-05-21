

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Siderbar/Sidebar';
import axios from 'axios';


import url from "../../env.js"


const DealerList = () => {
  const [tyres, setTyres] = useState([]);
  const [tyreBrands, setTyreBrands] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { selectedBrands, tyreTypes } = location.state || { selectedBrands: {}, tyreTypes: {} };
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [dealerList, setDealerList] = useState(() => {
    const savedList = localStorage.getItem('dealerList');
    return savedList ? JSON.parse(savedList) : [];
  });


      useEffect(() => {
        // Check if the user navigated directly to this page
        if (document.referrer === '') {
            // If the referrer is empty, redirect to home or another page
            navigate('/');
        }
    }, [navigate]);
    



  useEffect(() => {
    const fetchTyreBrands = async () => {
      try {
        const response = await fetch(`${url.nodeapipath}/get-tyre-brands`);
        if (!response.ok) throw new Error('Failed to fetch tyre brands');
        const data = await response.json();
        const brandMap = data.reduce((acc, brand) => {
          acc[brand._id] = brand.name;
          return acc;
        }, {});
        setTyreBrands(brandMap);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchFilteredTyres = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          selectedBrands: JSON.stringify(selectedBrands),
          tyreTypes: JSON.stringify(tyreTypes),
        }).toString();
        const response = await fetch(`${url.nodeapipath}/get-checkbox?${params}`);
        if (!response.ok) throw new Error('Failed to fetch tyres');
        const data = await response.json();
        setTyres(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTyreBrands();
    fetchFilteredTyres();
  }, [selectedBrands, tyreTypes]);

  useEffect(() => {
    localStorage.setItem('dealerList', JSON.stringify(dealerList));
  }, [dealerList]);

  
  const handleCheckboxChange = async (tyre) => {
    const loggedInDealerId = localStorage.getItem("clientId");
    if (!loggedInDealerId) {
      setMessage("Dealer not logged in!");
      return;
    }
  
    // Fetch stored dealer lists
    const storedDealerLists = JSON.parse(localStorage.getItem("dealerLists")) || {};
    
    // Get the current dealer's list
    let updatedDealerList = storedDealerLists[loggedInDealerId] || [];
  
    // Add or remove the tyre from the dealer's list
    if (updatedDealerList.some((item) => item._id === tyre._id)) {
      updatedDealerList = updatedDealerList.filter((item) => item._id !== tyre._id);
    } else {
      updatedDealerList.push(tyre);
    }
  
    // Update the dealer's list in localStorage
    storedDealerLists[loggedInDealerId] = updatedDealerList;
    localStorage.setItem("dealerLists", JSON.stringify(storedDealerLists));
  
    // Update state
    setDealerList(updatedDealerList);
  
    // Send the updated count to the server
    try {
      await axios.post(`${url.nodeapipath}/update-dealer-list`, {
        clientId: loggedInDealerId,
        tyres: updatedDealerList.map(item => item._id), // Send only the tyre IDs
      });
    } catch (error) {
      console.error("Error updating dealer list:", error);
    }
  };
  
  // Fetch dealer-specific list on mount
  useEffect(() => {
    const loggedInDealerId = localStorage.getItem("clientId");
    if (loggedInDealerId) {
      const storedDealerLists = JSON.parse(localStorage.getItem("dealerLists")) || {};
      setDealerList(storedDealerLists[loggedInDealerId] || []);
    }
  }, []);
  

  const handleAddProduct = () => {
    const loggedInDealerId = localStorage.getItem("clientId"); // Assuming dealer ID is stored in localStorage
    navigate("/add-dealer", { state: { dealerList, tyreBrands, clientId: loggedInDealerId } });
  };
  

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

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
                    <span><a href="#">Home</a></span>
                    <span><i className="mdi mdi-chevron-right"></i></span>Dealer
                  </p>
                </div>
                <button onClick={handleAddProduct} className="btn btn-primary">Show Product</button>
              </div>

              {message && <div className="alert alert-success">{message}</div>}

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
                              <th>Add To DealerPage</th>
                            </tr>
                          </thead>
                          <tbody>
                            {tyres.map((tyre) => (
                              <tr key={tyre._id}>
                                <td className="table-cell">
                                  {tyre.avatarImages && (
                                    <img
                                      // src={`${url.nodeapipath}/uploads/${tyre.avatarImages}`}
                src={`https://tyres.blr1.digitaloceanspaces.com/${tyre.avatarImages}`}
                                      
                                      alt="Avatar"
                                      className="tbl-thumb"
                                    />
                                  )}
                                </td>
                                <td>{tyre.title}</td>
                                <td>{tyre.tyreType}</td>
                                <td>{tyreBrands?.[tyre.tyreBrand] || 'Unknown Brand'}</td>
                                <td>₹{tyre.price}</td>
                                <td>₹{tyre.Salesprice}</td>
                                <td>
                                  <input
                                    type="checkbox"
                                    checked={dealerList.some((item) => item._id === tyre._id)}
                                    onChange={() => handleCheckboxChange(tyre)}
                                  />
                                  {dealerList.some((item) => item._id === tyre._id) && (
                                    <span className="text-success ms-2">Added</span>
                                  )}
                                </td>
                              </tr>
                            ))}
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

export default DealerList;




// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Footer from '../Footer/Footer';
// import Navbar from '../Navbar/Navbar';
// import Sidebar from '../Siderbar/Sidebar';
// import axios from 'axios';
// import url from "../../env.js";

// const DealerList = () => {
//   const [tyres, setTyres] = useState([]);
//   const [tyreBrands, setTyreBrands] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const location = useLocation();
//   const { selectedBrands, tyreTypes } = location.state || { selectedBrands: {}, tyreTypes: {} };
//   const navigate = useNavigate();
//   const [message, setMessage] = useState('');
//   const [dealerList, setDealerList] = useState(() => {
//     const savedList = localStorage.getItem('dealerList');
//     return savedList ? JSON.parse(savedList) : [];
//   });

//   useEffect(() => {
//     // Check if the user navigated directly to this page
//     if (document.referrer === '') {
//       navigate('/');
//     }
//   }, [navigate]);

//   useEffect(() => {
//     const fetchTyreBrands = async () => {
//       try {
//         const response = await fetch(`${url.nodeapipath}/get-tyre-brands`);
//         if (!response.ok) throw new Error('Failed to fetch tyre brands');
//         const data = await response.json();
//         const brandMap = data.reduce((acc, brand) => {
//           acc[brand._id] = brand.name;
//           return acc;
//         }, {});
//         setTyreBrands(brandMap);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     const fetchFilteredTyres = async () => {
//       setLoading(true);
//       try {
//         const params = new URLSearchParams({
//           selectedBrands: JSON.stringify(selectedBrands),
//           tyreTypes: JSON.stringify(tyreTypes),
//         }).toString();
//         const response = await fetch(`${url.nodeapipath}/get-checkbox?${params}`);
//         if (!response.ok) throw new Error('Failed to fetch tyres');
//         const data = await response.json();
//         setTyres(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTyreBrands();
//     fetchFilteredTyres();
//   }, [selectedBrands, tyreTypes]);

//   useEffect(() => {
//     localStorage.setItem('dealerList', JSON.stringify(dealerList));
//   }, [dealerList]);

//   const handleCheckboxChange = async (tyre) => {
//     const loggedInDealerId = localStorage.getItem("clientId");
//     if (!loggedInDealerId) {
//       setMessage("Dealer not logged in!");
//       return;
//     }

//     // Fetch stored dealer lists
//     const storedDealerLists = JSON.parse(localStorage.getItem("dealerLists")) || {};
    
//     // Get the current dealer's list
//     let updatedDealerList = storedDealerLists[loggedInDealerId] || [];

//     // Add or remove the tyre from the dealer's list
//     if (updatedDealerList.some((item) => item._id === tyre._id)) {
//       updatedDealerList = updatedDealerList.filter((item) => item._id !== tyre._id);
//     } else {
//       updatedDealerList.push(tyre);
//     }

//     // Update the dealer's list in localStorage
//     storedDealerLists[loggedInDealerId] = updatedDealerList;
//     localStorage.setItem("dealerLists", JSON.stringify(storedDealerLists));

//     // Update state
//     setDealerList(updatedDealerList);

//     // Send the updated count to the server
//     try {
//       await axios.post(`${url.nodeapipath}/update-dealer-list`, {
//         clientId: loggedInDealerId,
//         tyres: updatedDealerList.map(item => item._id), // Send only the tyre IDs
//       });
//     } catch (error) {
//       console.error("Error updating dealer list:", error);
//     }
//   };

//   // Fetch dealer-specific list on mount
//   useEffect(() => {
//     const loggedInDealerId = localStorage.getItem("clientId");
//     if (loggedInDealerId) {
//       const storedDealerLists = JSON.parse(localStorage.getItem("dealerLists")) || {};
//       setDealerList(storedDealerLists[loggedInDealerId] || []);
//     }
//   }, []);

//   const handleAddProduct = () => {
//     const loggedInDealerId = localStorage.getItem("clientId"); // Assuming dealer ID is stored in localStorage
//     navigate("/add-dealer", { state: { dealerList, tyreBrands, clientId: loggedInDealerId } });
//   };

//   if (loading) return <div className="loading">Loading...</div>;
//   if (error) return <div className="error">Error: {error}</div>;

//   return (
//     <div className="ec-header-fixed ec-sidebar-fixed ec-sidebar-dark ec-header-light" id="body">
//       <div className="wrapper">
//         <Sidebar />
//         <div className="ec-page-wrapper">
//           <Navbar />
//           <div className="ec-content-wrapper">
//             <div className="content">
//               <div className="breadcrumb-wrapper d-flex align-items-center justify-content-between">
//                 <div>
//                   <h1>Dealer List</h1>
//                   <p className="breadcrumbs">
//                     <span><a href="#">Home</a></span>
//                     <span><i className="mdi mdi-chevron-right"></i></span>Dealer
//                   </p>
//                 </div>
//                 <button onClick={handleAddProduct} className="btn btn-primary">Show Product</button>
//               </div>

//               {message && <div className="alert alert-success">{message}</div>}

//               <div className="row">
//                 <div className="col-12">
//                   <div className="card card-default">
//                     <div className="card-body">
//                       <div className="table-responsive">
//                         <table id="responsive-data-table" className="table" style={{ width: "100%" }}>
//                           <thead>
//                             <tr>
//                               <th>Image</th>
//                               <th>Title</th>
//                               <th>Vehicle Type</th>
//                               <th>Tyre Brand</th>
//                               <th>Price</th>
//                               <th>Sales Price</th>
//                               <th>Add To DealerPage</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {tyres.map((tyre) => (
//                               <tr key={tyre._id}>
//                                 <td className="table-cell">
//                                   {tyre.avatarImages && (
//                                     <img
//                                       src={`https://tyres.blr1.digitaloceanspaces.com/${tyre.avatarImages}`}
//                                       alt="Avatar"
//                                       className="tbl-thumb"
//                                     />
//                                   )}
//                                 </td>
//                                 <td>{tyre.title}</td>
//                                 <td>{tyre.tyreType}</td>
//                                 <td>{tyreBrands?.[tyre.tyreBrand] || 'Unknown Brand'}</td>
//                                 <td>₹{tyre.price}</td>
//                                 <td>₹{tyre.Salesprice}</td>
//                                 <td>
//                                   <input
//                                     type="checkbox"
//                                     checked={dealerList.some((item) => item._id === tyre._id)}
//                                     onChange={() => handleCheckboxChange(tyre)}
//                                   />
//                                   {dealerList.some((item) => item._id === tyre._id) && (
//                                     <span className="text-success ms-2">Added</span>
//                                   )}
//                                 </td>
//                               </tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DealerList;
