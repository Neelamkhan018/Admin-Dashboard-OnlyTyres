


// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Footer from '../Footer/Footer';
// import Navbar from '../Navbar/Navbar';
// import Sidebar from '../Siderbar/Sidebar';


// import url from "../../env.js"



// const ProductList = () => {
//   const [tyres, setTyres] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);


//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if the user navigated directly to this page
//     if (document.referrer === '') {
//         // If the referrer is empty, redirect to home or another page
//         navigate('/');
//     }
// }, [navigate]);

//   useEffect(() => {
//     const fetchTyres = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(`${url.nodeapipath}/get-tyres`);
//         const data = await response.json();
//         setTyres(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTyres();
//   }, []);

//   const handleToggleActive = async (id, newStatus) => {
//     try {
//       const response = await fetch(`${url.nodeapipath}/active-tyre/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ active: newStatus }),
//       });

//       if (response.ok) {
//         setTyres((prevTyres) =>
//           prevTyres.map((tyre) =>
//             tyre._id === id ? { ...tyre, active: newStatus } : tyre
//           )
//         );
//       } else {
//         const errorText = await response.text();
//         setError(`Failed to update tyre status: ${errorText}`);
//       }
//     } catch (error) {
//       setError(`Error updating tyre status: ${error.message}`);
//     }
//   };

//   const handleDelete = async (tyre) => {
//     const id = tyre._id;
//     const type = tyre.tyreType;

//     if (!type) {
//       console.error("Tyre type is not defined");
//       return;
//     }

//     try {
//       await fetch(`${url.nodeapipath}/api/tyres/${type}/${id}`, {
//         method: 'DELETE',
//       });
//       setTyres(tyres.filter((t) => t._id !== id));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

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
//                   <h1>Product</h1>
//                   <p className="breadcrumbs">
//                     <span><a href="#">Home</a></span>
//                     <span><i className="mdi mdi-chevron-right"></i></span>Product
//                   </p>
//                 </div>
//                 <div>
//                   <a href="addproduct" className="btn btn-primary">Add Product</a>
//                 </div>
//               </div>

//               <div className="row">
//                 <div className="col-12">
//                   <div className="card card-default">
//                     <div className="card-body">
//                       <div className="table-responsive">
//                         <table className="table" style={{ width: "100%" }}>
//                           <thead>
//                             <tr>
//                               <th>Image</th>
//                               <th>Title</th>
//                               <th>Vehicle Type</th>
//                               <th>Brand</th>
//                               <th>Model</th>
//                               <th>Tyre Brand</th>
//                               <th>Price</th>
//                               <th>Sales Price</th>
//                               <th>Manufacturing Year</th>
//                               <th>Active</th>
//                               <th>Action</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {tyres.map((tyre) => (
//                               <tr key={tyre._id}>
//                                 <td>
//                                   {tyre.avatarImages && (
//                                     <img
//                                       src={`${url.nodeapipath}/uploads/${tyre.avatarImages}`}
//                                       alt="Avatar"
//                                       className="tbl-thumb"
//                                       style={{ width: '60px', height: '60px', objectFit: 'contain' }}
//                                     />
//                                   )}
//                                 </td>
//                                 <td>{tyre.title}</td>
//                                 <td>{tyre.tyreType}</td>
//                                 <td>
//                                   {tyre.tyreType === 'car' && tyre.carbrand}
//                                   {tyre.tyreType === 'bike' && tyre.bikeBrand}
//                                   {tyre.tyreType === 'truck' && tyre.truckBrand}
//                                   {tyre.tyreType === 'tractor' && tyre.tractorBrand}
                                  
//                                 </td>
//                                 <td>
//                                   {tyre.tyreType === 'car' && tyre.carModel}
//                                   {tyre.tyreType === 'bike' && tyre.bikeModel}
//                                   {tyre.tyreType === 'truck' && tyre.truckModel}
//                                   {tyre.tyreType === 'tractor' && tyre.tractorModel}
//                                 </td>
//                                 <td>{tyre.tyreBrand}</td>
//                                 <td>₹{tyre.price}</td>
//                                 <td>₹{tyre.Salesprice}</td>
//                                 <td>{tyre.manufactureYear}</td>
//                                 <td>
//                                   <input
//                                     type="checkbox"
//                                     checked={tyre.active}
//                                     onChange={() => handleToggleActive(tyre._id, !tyre.active)}
//                                   />
//                                 </td>
//                                 <td>
//                                   <div className="btn-group">
//                                     <Link
//                                       to={`/addproductedit/${tyre._id}/${tyre.tyreType}`}
//                                       className="btn btn-outline-success"
//                                     >
//                                       Edit
//                                     </Link>
//                                     <button
//                                       type="button"
//                                       onClick={() => handleDelete(tyre)}
//                                       className="btn btn-outline-danger"
//                                     >
//                                       Delete
//                                     </button>
//                                   </div>
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

// export default ProductList;










// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Footer from '../Footer/Footer';
// import Navbar from '../Navbar/Navbar';
// import Sidebar from '../Siderbar/Sidebar';


// import url from "../../env.js"



// const ProductList = () => {
//   const [tyres, setTyres] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);


//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if the user navigated directly to this page
//     if (document.referrer === '') {
//         // If the referrer is empty, redirect to home or another page
//         navigate('/');
//     }
// }, [navigate]);

//   useEffect(() => {
//     const fetchTyres = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(`${url.nodeapipath}/get-tyres`);
//         const data = await response.json();
//         console.log(data); 
//         setTyres(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTyres();
//   }, []);

//   const handleToggleActive = async (id, newStatus) => {
//     try {
//       const response = await fetch(`${url.nodeapipath}/active-tyre/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ active: newStatus }),
//       });

//       if (response.ok) {
//         setTyres((prevTyres) =>
//           prevTyres.map((tyre) =>
//             tyre._id === id ? { ...tyre, active: newStatus } : tyre
//           )
//         );
//       } else {
//         const errorText = await response.text();
//         setError(`Failed to update tyre status: ${errorText}`);
//       }
//     } catch (error) {
//       setError(`Error updating tyre status: ${error.message}`);
//     }
//   };

//   const handleDelete = async (tyre) => {
//     const id = tyre._id;
//     const type = tyre.tyreType;

//     if (!type) {
//       console.error("Tyre type is not defined");
//       return;
//     }

//     try {
//       await fetch(`${url.nodeapipath}/api/tyres/${type}/${id}`, {
//         method: 'DELETE',
//       });
//       setTyres(tyres.filter((t) => t._id !== id));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

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
//                   <h1>Product</h1>
//                   <p className="breadcrumbs">
//                     <span><a href="#">Home</a></span>
//                     <span><i className="mdi mdi-chevron-right"></i></span>Product
//                   </p>
//                 </div>
//                 <div>
//                   <a href="addproduct" className="btn btn-primary">Add Product</a>
//                 </div>
//               </div>

//               <div className="row">
//                 <div className="col-12">
//                   <div className="card card-default">
//                     <div className="card-body">
//                       <div className="table-responsive">
//                         <table className="table" style={{ width: "100%" }}>
//                           <thead>
//                             <tr>
//                               <th>Image</th>
//                               <th>Title</th>
//                               <th>Vehicle Type</th>
//                               <th>Brand</th>
//                               <th>Model</th>
//                               <th>Tyre Brand</th>
//                               <th>Price</th>
//                               <th>Sales Price</th>
//                               <th>Manufacturing Year</th>
//                               <th>Active</th>
//                               <th>Action</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                           {tyres.map((tyre) => (
//   <tr key={tyre._id}>
//     <td>
//       {tyre.avatarImages && (
//         <img
//           src={`${url.nodeapipath}/uploads/${tyre.avatarImages}`}
//           alt="Avatar"
//           className="tbl-thumb"
//           style={{ width: '60px', height: '60px', objectFit: 'contain' }}
//         />
//       )}
//     </td>
//     <td>{tyre.title}</td>
//     <td>{tyre.tyreType}</td>
//     <td>
//       {tyre.tyreType === 'car' && tyre.carbrand}
//       {tyre.tyreType === 'bike' && tyre.bikeBrand}
//       {tyre.tyreType === 'truck' && tyre.truckBrand}
//       {tyre.tyreType === 'tractor' && tyre.tractorBrand}
//       {tyre.tyreType === 'battery' && tyre.BatteryBrand}
//     </td>
//     <td>
//       {tyre.tyreType === 'car' && tyre.carModel}
//       {tyre.tyreType === 'bike' && tyre.bikeModel}
//       {tyre.tyreType === 'truck' && tyre.truckModel}
//       {tyre.tyreType === 'tractor' && tyre.tractorModel}
//       {tyre.tyreType === 'battery' && tyre.BatteryModel}
//     </td>
//     {/* <td>{tyre.tyreType === 'battery' ? tyre.BatteryBrand : tyre.tyreBrand}</td> */}
//     <td>{tyre.tyreBrand}</td>
//     <td>₹{tyre.price}</td>
//     <td>₹{tyre.Salesprice}</td>
//     <td>{tyre.manufactureYear || 'N/A'}</td>
//     <td>
//       <input
//         type="checkbox"
//         checked={tyre.active}
//         onChange={() => handleToggleActive(tyre._id, !tyre.active)}
//       />
//     </td>
//     <td>
//       <div className="btn-group">
//         <Link
//           to={`/addproductedit/${tyre._id}/${tyre.tyreType}`}
//           className="btn btn-outline-success"
//         >
//           Edit
//         </Link>
//         <button
//           type="button"
//           onClick={() => handleDelete(tyre)}
//           className="btn btn-outline-danger"
//         >
//           Delete
//         </button>
//       </div>
//     </td>
//   </tr>
// ))}

// </tbody>

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

// export default ProductList;





// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Footer from '../Footer/Footer';
// import Navbar from '../Navbar/Navbar';
// import Sidebar from '../Siderbar/Sidebar';
// import url from "../../env.js";

// const ProductList = () => {
//   const [tyres, setTyres] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if the user navigated directly to this page
//     if (document.referrer === '') {
//       navigate('/');
//     }
//   }, [navigate]);

//   useEffect(() => {
//     const fetchTyres = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(`${url.nodeapipath}/get-tyres`);
//         const data = await response.json();
//         console.log(data); 
//         setTyres(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTyres();
//   }, []);

//   const handleToggleActive = async (id, newStatus) => {
//     try {
//       const response = await fetch(`${url.nodeapipath}/active-tyre/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ active: newStatus }),
//       });

//       if (response.ok) {
//         setTyres((prevTyres) =>
//           prevTyres.map((tyre) =>
//             tyre._id === id ? { ...tyre, active: newStatus } : tyre
//           )
//         );
//       } else {
//         const errorText = await response.text();
//         setError(`Failed to update tyre status: ${errorText}`);
//       }
//     } catch (error) {
//       setError(`Error updating tyre status: ${error.message}`);
//     }
//   };

//   const handleDelete = async (tyre) => {
//     const id = tyre._id;
//     const type = tyre.tyreType;

//     if (!type) {
//       console.error("Tyre type is not defined");
//       return;
//     }

//     try {
//       await fetch(`${url.nodeapipath}/api/tyres/${type}/${id}`, {
//         method: 'DELETE',
//       });
//       setTyres(tyres.filter((t) => t._id !== id));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

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
//                   <h1>Product</h1>
//                   <p className="breadcrumbs">
//                     <span><a href="#">Home</a></span>
//                     <span><i className="mdi mdi-chevron-right"></i></span>Product
//                   </p>
//                 </div>
//                 <div>
//                   <a href="addproduct" className="btn btn-primary">Add Product</a>
//                 </div>
//               </div>

//               <div className="row">
//                 <div className="col-12">
//                   <div className="card card-default">
//                     <div className="card-body">
//                       <div className="table-responsive">
//                         <table className="table" style={{ width: "100%" }}>
//                           <thead>
//                             <tr>
//                               <th>Image</th>
//                               <th>Title</th>
//                               <th>Vehicle Type</th>
//                               <th>Brand</th>
//                               <th>Model</th>
//                               {/* <th>Battery Type</th> */}
//                               <th>Battery / AlloyWheel Brand & Model</th>             
//                               <th>Tyre Brand</th>
//                               <th>Price</th>
//                               <th>Sales Price</th>
//                               <th>Manufacturing Year</th>
//                               <th>Active</th>
//                               <th>Action</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {tyres.map((tyre) => (
//                               <tr key={tyre._id}>
//                                 <td>
//                                   {tyre.avatarImages && (
//                                     <img
//                                       src={`${url.nodeapipath}/uploads/${tyre.avatarImages}`}
//                                       alt="Avatar"
//                                       className="tbl-thumb"
//                                       style={{ width: '60px', height: '60px', objectFit: 'contain' }}
//                                     />
//                                   )}
//                                 </td>
//                                 <td>{tyre.title}</td>
//                                 <td>{tyre.tyreType}</td>
//                                 <td>
//                                   {tyre.tyreType === 'car' && tyre.carbrand}
//                                   {tyre.tyreType === 'bike' && tyre.bikeBrand}
//                                   {tyre.tyreType === 'truck' && tyre.truckBrand}
//                                   {tyre.tyreType === 'tractor' && tyre.tractorBrand}
//                                   {tyre.tyreType === 'battery' && tyre.BatteryBrand}
//                                   {tyre.tyreType === 'alloywheel' && tyre.alloywheelBrand}

//                                 </td>
//                                 <td>
//                                   {tyre.tyreType === 'car' && tyre.carModel}
//                                   {tyre.tyreType === 'bike' && tyre.bikeModel}
//                                   {tyre.tyreType === 'truck' && tyre.truckModel}
//                                   {tyre.tyreType === 'tractor' && tyre.tractorModel}
//                                   {tyre.tyreType === 'battery' && tyre.BatteryModel}
//                                   {tyre.tyreType === 'alloywheel' && tyre.alloywheelModel}

//                                 </td>
//                                 <td>
//   {tyre.tyreType === 'battery' || tyre.tyreType === 'alloywheel' ? (
//     <>
//       {tyre.tyreType === 'battery' && (
//         <>
//           <div>Battery Type: - {tyre.batteryType || 'N/A'}</div>
//           {tyre.batteryType === 'car' && (
//             <>
//               <div>Car Brand: - {Array.isArray(tyre.carbrand) ? [...new Set(tyre.carbrand)].join(', ') : tyre.carbrand || 'N/A'}</div>
//               <div>Car Model: - {Array.isArray(tyre.carModel) ? [...new Set(tyre.carModel)].join(', ') : tyre.carModel || 'N/A'}</div>
//             </>
//           )}
//           {tyre.batteryType === 'bike' && (
//             <>
//               <div>Bike Brand: - {Array.isArray(tyre.bikeBrand) ? [...new Set(tyre.bikeBrand)].join(', ') : tyre.bikeBrand || 'N/A'}</div>
//               <div>Bike Model: - {Array.isArray(tyre.bikeModel) ? [...new Set(tyre.bikeModel)].join(', ') : tyre.bikeModel || 'N/A'}</div>
//             </>
//           )}
//         </>
//       )}

//       {tyre.tyreType === 'alloywheel' && (
//         <>
//           <div>Alloywheel Type: - {tyre.alloywheelType || 'N/A'}</div>
//           {tyre.alloywheelType === 'car' && (
//             <>
//               <div>Car Brand: - {Array.isArray(tyre.carbrand) ? [...new Set(tyre.carbrand)].join(', ') : tyre.carbrand || 'N/A'}</div>
//               <div>Car Model: - {Array.isArray(tyre.carModel) ? [...new Set(tyre.carModel)].join(', ') : tyre.carModel || 'N/A'}</div>
//             </>
//           )}
//           {tyre.alloywheelType === 'bike' && (
//             <>
//               <div>Bike Brand: - {Array.isArray(tyre.bikeBrand) ? [...new Set(tyre.bikeBrand)].join(', ') : tyre.bikeBrand || 'N/A'}</div>
//               <div>Bike Model: - {Array.isArray(tyre.bikeModel) ? [...new Set(tyre.bikeModel)].join(', ') : tyre.bikeModel || 'N/A'}</div>
//             </>
//           )}
//         </>
//       )}
//     </>
//   ) : 'N/A'}
// </td>




//                                 <td>{tyre.tyreBrand}</td>
//                                 <td>₹{tyre.price}</td>
//                                 <td>₹{tyre.Salesprice}</td>
//                                 <td>{tyre.manufactureYear || 'N/A'}</td>
//                                 <td>
//                                   <input
//                                     type="checkbox"
//                                     checked={tyre.active}
//                                     onChange={() => handleToggleActive(tyre._id, !tyre.active)}
//                                   />
//                                 </td>
//                                 <td>
//                                   <div className="btn-group">
//                                     <Link
//                                       to={`/addproductedit/${tyre._id}/${tyre.tyreType}`}
//                                       className="btn btn-outline-success"
//                                     >
//                                       Edit
//                                     </Link>
//                                     <button
//                                       type="button"
//                                       onClick={() => handleDelete(tyre)}
//                                       className="btn btn-outline-danger"
//                                     >
//                                       Delete
//                                     </button>
//                                   </div>
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

// export default ProductList;





import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Siderbar/Sidebar';
import url from "../../env.js";

const ProductList = () => {
  const [tyres, setTyres] = useState([]);
  const [filteredTyres, setFilteredTyres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('car');
  const navigate = useNavigate();

  useEffect(() => {
    if (document.referrer === '') {
      navigate('/');
    }
  }, [navigate]);

  useEffect(() => {
    const fetchTyres = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${url.nodeapipath}/get-tyres`);
        const data = await response.json();
        console.log(data);
        setTyres(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTyres();
  }, []);

  useEffect(() => {
    // Filter products based on selected tab
    const filtered = tyres.filter((tyre) => tyre.tyreType === activeTab);
    setFilteredTyres(filtered);
  }, [tyres, activeTab]);

  const handleToggleActive = async (id, newStatus) => {
    try {
      const response = await fetch(`${url.nodeapipath}/active-tyre/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ active: newStatus }),
      });

      if (response.ok) {
        setTyres((prevTyres) =>
          prevTyres.map((tyre) =>
            tyre._id === id ? { ...tyre, active: newStatus } : tyre
          )
        );
      } else {
        const errorText = await response.text();
        setError(`Failed to update tyre status: ${errorText}`);
      }
    } catch (error) {
      setError(`Error updating tyre status: ${error.message}`);
    }
  };

  const handleDelete = async (tyre) => {
    const id = tyre._id;
    const type = tyre.tyreType;

    if (!type) {
      console.error("Tyre type is not defined");
      return;
    }

    try {
      await fetch(`${url.nodeapipath}/api/tyres/${type}/${id}`, {
        method: 'DELETE',
      });
      setTyres(tyres.filter((t) => t._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  const tabs = [
    { label: "Car", value: "car" },
    { label: "Bike", value: "bike" },
    { label: "Truck", value: "truck" },
    { label: "Tractor", value: "tractor" },
    { label: "Battery", value: "battery" },
    { label: "Alloy Wheel", value: "alloywheel" },
    { label: "Accessories", value: "accessories" }, 
  ];

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
                  <h1>Product</h1>
                  <p className="breadcrumbs">
                    <span><a href="#">Home</a></span>
                    <span><i className="mdi mdi-chevron-right"></i></span>Product
                  </p>
                </div>
                <div>
                  <a href="/addproduct" className="btn btn-primary">Add Product</a>
                </div>
              </div>

              {/* Tabs */}
              <div className="tabs mb-4 d-flex gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.value}
                    className={`btn ${activeTab === tab.value ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setActiveTab(tab.value)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="card card-default">
                    <div className="card-body">
<div className="table-responsive">
  <table className="table" style={{ width: "100%" }}>
    <thead>
      <tr>
        <th>Image</th>
        <th>Title</th>
        <th>Vehicle Type</th>
        <th>Brand</th>
        <th>Model</th>
{activeTab === 'battery' || activeTab === 'alloywheel' || activeTab === 'accessories' ? (
  <>
    <th>
      {activeTab === 'battery' 
        ? 'Battery Type' 
        : activeTab === 'alloywheel' 
        ? 'Alloy Wheel Type' 
        : 'Accessories Type'}
    </th>
    <th>TyreBrand</th>
  </>
) : (
  <>
    <th>Tyre Brand</th>
  </>
)}

        <th>Price</th>
        <th>Sales Price</th>
        <th>Manufacturing Year</th>
        <th>Active</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {filteredTyres.map((tyre) => (
        <tr key={tyre._id}>
          <td>
            {tyre.avatarImages && (
              <img
                // src={`${url.nodeapipath}/uploads/${tyre.avatarImages}`}
                src={`https://tyres.blr1.digitaloceanspaces.com/${tyre.avatarImages}`}
                alt="Avatar"
                className="tbl-thumb"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              />
            )}
          </td>
          <td>{tyre.title}</td>
          <td>{tyre.tyreType}</td>
          <td>
            {tyre.tyreType === 'car' && tyre.carbrand}
            {tyre.tyreType === 'bike' && tyre.bikeBrand}
            {tyre.tyreType === 'truck' && tyre.truckBrand}
            {tyre.tyreType === 'tractor' && tyre.tractorBrand}
            {tyre.tyreType === 'battery' && tyre.BatteryBrand}
            {tyre.tyreType === 'alloywheel' && tyre.alloywheelBrand}
            {tyre.tyreType === 'accessories' && tyre.accessoryBrand}

          </td>
          <td>
            {tyre.tyreType === 'car' && tyre.carModel}
            {tyre.tyreType === 'bike' && tyre.bikeModel}
            {tyre.tyreType === 'truck' && tyre.truckModel}
            {tyre.tyreType === 'tractor' && tyre.tractorModel}
            {tyre.tyreType === 'battery' && tyre.BatteryModel}
            {tyre.tyreType === 'alloywheel' && tyre.alloywheelModel}
            {tyre.tyreType === 'accessories' && tyre.accessoryModel}
          </td>
          {activeTab === 'battery' || activeTab === 'alloywheel' || activeTab === 'accessories' ? (
                           <>
                             <td>
                                {tyre.tyreType === 'battery' || tyre.tyreType === 'alloywheel' || tyre.tyreType === 'accessories' ? (
                                    <>
                                      {tyre.tyreType === 'battery' && (
                                        <>
                                          <div>Battery Type: - {tyre.batteryType || 'N/A'}</div>
                                          {tyre.batteryType === 'car' && (
                                            <>
                                              <div>Car Brand: - {Array.isArray(tyre.carbrand) ? [...new Set(tyre.carbrand)].join(', ') : tyre.carbrand || 'N/A'}</div>
                                              <div>Car Model: - {Array.isArray(tyre.carModel) ? [...new Set(tyre.carModel)].join(', ') : tyre.carModel || 'N/A'}</div>
                                            </>
                                          )}
                                          {tyre.batteryType === 'bike' && (
                                            <>
                                              <div>Bike Brand: - {Array.isArray(tyre.bikeBrand) ? [...new Set(tyre.bikeBrand)].join(', ') : tyre.bikeBrand || 'N/A'}</div>
                                              <div>Bike Model: - {Array.isArray(tyre.bikeModel) ? [...new Set(tyre.bikeModel)].join(', ') : tyre.bikeModel || 'N/A'}</div>
                                            </>
                                          )}
                                        </>
                                      )}
                                      {tyre.tyreType === 'alloywheel' && (
                                        <>
                                          <div>Alloywheel Type: - {tyre.alloywheelType || 'N/A'}</div>
                                          {tyre.alloywheelType === 'car' && (
                                            <>
                                              <div>Car Brand: - {Array.isArray(tyre.carbrand) ? [...new Set(tyre.carbrand)].join(', ') : tyre.carbrand || 'N/A'}</div>
                                              <div>Car Model: - {Array.isArray(tyre.carModel) ? [...new Set(tyre.carModel)].join(', ') : tyre.carModel || 'N/A'}</div>
                                            </>
                                          )}
                                          {tyre.alloywheelType === 'bike' && (
                                            <>
                                              <div>Bike Brand: - {Array.isArray(tyre.bikeBrand) ? [...new Set(tyre.bikeBrand)].join(', ') : tyre.bikeBrand || 'N/A'}</div>
                                              <div>Bike Model: - {Array.isArray(tyre.bikeModel) ? [...new Set(tyre.bikeModel)].join(', ') : tyre.bikeModel || 'N/A'}</div>
                                            </>
                                          )}
                                        </>
                                      )}
                                        {tyre.tyreType === 'accessories' && (
                                        <div>Accessory Type: - {tyre.accessoryType || 'N/A'}</div>
                                      )}
          
                                    </>
                                  ) : 'N/A'}
                                </td>                               
                <td>{tyre.tyreBrand || 'N/A'}</td>                        
            </>
          ) : (
            <td>{tyre.tyreBrand}</td>
          )}
          <td>₹{tyre.price}</td>
          <td>₹{tyre.Salesprice}</td>
          <td>{tyre.manufactureYear || 'N/A'}</td>
          <td>
            <input
              type="checkbox"
              checked={tyre.active}
              onChange={() => handleToggleActive(tyre._id, !tyre.active)}
            />
          </td>
          <td>
            <div className="btn-group">
              <Link
                to={`/addproductedit/${tyre._id}/${tyre.tyreType}`}
                className="btn btn-outline-success"
              >
                Edit
              </Link>
              <button
                type="button"
                onClick={() => handleDelete(tyre)}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      ))}
      {filteredTyres.length === 0 && (
        <tr>
          <td colSpan="12" className="text-center">No products found</td>
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

export default ProductList;
