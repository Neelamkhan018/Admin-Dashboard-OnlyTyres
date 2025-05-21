





// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function DealerCategories() {
//   const [tyres, setTyres] = useState([]);
//   const [selectedCarTyreBrands, setSelectedCarTyreBrands] = useState([]);
//   const [selectedBikeTyreBrands, setSelectedBikeTyreBrands] = useState([]);
//   const [tyreTypes, setTyreTypes] = useState({ car: false, bike: false });
//   const navigate = useNavigate();
//   const clientId = localStorage.getItem("clientId");

 

//   useEffect(() => {
//     if (!clientId) {
//       console.error("Client ID is missing!");
//       return;
//     }
  
//     const fetchTyres = async () => {
//       try {
//         const response = await fetch(`http://localhost:8000/get-tyre-brands`);
//         const data = await response.json();
//         setTyres(data);
  
//         // Load previously selected brands for this dealer
//         const savedSelections = localStorage.getItem(`selectedBrands_${clientId}`);
//         if (savedSelections) {
//           const { car, bike } = JSON.parse(savedSelections);
//           setSelectedCarTyreBrands(car || []);
//           setSelectedBikeTyreBrands(bike || []);
//         }
//       } catch (error) {
//         console.error("Error fetching tyre brands:", error);
//       }
//     };
  
//     fetchTyres();
//   }, []);


//   const handleSubmit = () => {
//     localStorage.setItem(
//       `selectedBrands_${clientId}`,
//       JSON.stringify({ car: selectedCarTyreBrands, bike: selectedBikeTyreBrands })
//     );
  
//     navigate('/dealer-list', {
//       replace: true,  // Prevents history stack issues
//       state: {
//         selectedBrands: { car: selectedCarTyreBrands, bike: selectedBikeTyreBrands },
//         tyreTypes,
//       },
//     });
//   };
  

//   const handleCheckboxChange = (brandId, type) => {
//     if (type === 'car') {
//       setSelectedCarTyreBrands((prev) =>
//         prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
//       );
//     } else if (type === 'bike') {
//       setSelectedBikeTyreBrands((prev) =>
//         prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
//       );
//     }
//   };


//   return (
//  <div className="sign-inup">
//   <div className="container d-flex align-items-center justify-content-center form-height pt-4">
//     <div className="row justify-content-center w-100">
//       <div className="col-lg-8 col-md-10"> 
//         <div className="card form-card p-4" style={{ minWidth: '600px' }}> 
//           <div className="card-header form-card-header btn btn-primary">
//             <div className="ec-brand">
//               <a href="#" title="Ekka" style={{ color: 'white', fontWeight: 'bold', fontSize: '35px' }}>
//                 Select Tyres Category
//               </a>
//             </div>
//           </div>
//           <div className="card-body p-5">
    
//             <div className="tyre-category-section">
  
//               <div className="form-group d-flex flex-wrap gap-3"> 
//                 <div className="form-check tyre-category-checkbox">
//                   <input 
//                     type="checkbox" 
//                     id="dealsInCar" 
//                     className="form-check-input"
//                     checked={tyreTypes.car} 
//                     onChange={() => setTyreTypes(prev => ({ ...prev, car: !prev.car }))} 
//                   />
//                   <label htmlFor="dealsInCar">Deals in Car</label>
//                 </div>
//                 <div className="form-check tyre-category-checkbox">
//                   <input 
//                     type="checkbox" 
//                     id="dealsInBike" 
//                     className="form-check-input"
//                     checked={tyreTypes.bike} 
//                     onChange={() => setTyreTypes(prev => ({ ...prev, bike: !prev.bike }))} 
//                   />
//                   <label htmlFor="dealsInBike">Deals in Bike</label>
//                 </div>
//               </div>
              
//               <div className="d-flex gap-9 mt-3"> 
//                 {tyreTypes.car && (
//                   <div className="tyre-brand-section">
//                     <h5 className="tyre-brand-heading mb-5">Car Tyre Brands</h5>
//                     {tyres.map((brand) => (
//                       <div key={brand._id} className="form-check tyre-brand-checkbox">
//                         <input
//                           type="checkbox"
//                           id={`car-${brand._id}`}
//                           className="form-check-input"
//                           checked={selectedCarTyreBrands.includes(brand._id)}
//                           onChange={() => handleCheckboxChange(brand._id, 'car')}
//                         />
//                         <label htmlFor={`car-${brand._id}`}>{brand.name}</label>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//                 {tyreTypes.bike && (
//                   <div className="tyre-brand-section">
//                     <h5 className="tyre-brand-heading mb-5">Bike Tyre Brands</h5>
//                     {tyres.map((brand) => (
//                       <div key={brand._id} className="form-check tyre-brand-checkbox">
//                         <input
//                           type="checkbox"
//                           id={`bike-${brand._id}`}
//                           className="form-check-input"
//                           checked={selectedBikeTyreBrands.includes(brand._id)}
//                           onChange={() => handleCheckboxChange(brand._id, 'bike')}
//                         />
//                         <label htmlFor={`bike-${brand._id}`}>{brand.name}</label>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
              
//               <button className="btn btn-primary submit-btn mt-3" onClick={handleSubmit}>
//                 View Selected Brands
//               </button>
              
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div> 


  
//   );
// }






// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';


// import url from "../../env.js"


// export default function DealerCategories() {
//   const [tyres, setTyres] = useState([]);
//   const [selectedCarTyreBrands, setSelectedCarTyreBrands] = useState([]);
//   const [selectedBikeTyreBrands, setSelectedBikeTyreBrands] = useState([]);
//   const [selectedTruckTyreBrands, setSelectedTruckTyreBrands] = useState([]); // New state for truck tyres
//   const [selectedTractorTyreBrands, setSelectedTractorTyreBrands] = useState([]); // New state for tractor tyres
//   const [tyreTypes, setTyreTypes] = useState({ car: false, bike: false, truck: false, tractor: false }); // Updated tyreTypes
//   const navigate = useNavigate();
//   const clientId = localStorage.getItem("clientId");



//       useEffect(() => {
//         // Check if the user navigated directly to this page
//         if (document.referrer === '') {
//             // If the referrer is empty, redirect to home or another page
//             navigate('/');
//         }
//     }, [navigate]);
    


//   useEffect(() => {
//     if (!clientId) {
//       console.error("Client ID is missing!");
//       return;
//     }
  
    
//     const fetchTyres = async () => {
//       try {
//         const response = await fetch(`${url.nodeapipath}/get-tyre-brands`);
//         const data = await response.json();
//         setTyres(data);
  
//         // Load previously selected brands for this dealer
//         const savedSelections = localStorage.getItem(`selectedBrands_${clientId}`);
//         if (savedSelections) {
//           const { car, bike, truck, tractor } = JSON.parse(savedSelections);
//           setSelectedCarTyreBrands(car || []);
//           setSelectedBikeTyreBrands(bike || []);
//           setSelectedTruckTyreBrands(truck || []); // Load truck selections
//           setSelectedTractorTyreBrands(tractor || []); // Load tractor selections
//         }
//       } catch (error) {
//         console.error("Error fetching tyre brands:", error);
//       }
//     };
  
//     fetchTyres();
//   }, []);

//   const handleSubmit = () => {
//     localStorage.setItem(
//       `selectedBrands_${clientId}`,
//       JSON.stringify({ 
//         car: selectedCarTyreBrands, 
//         bike: selectedBikeTyreBrands, 
//         truck: selectedTruckTyreBrands, 
//         tractor: selectedTractorTyreBrands // Save tractor selections
//       })
//     );
  
//     navigate('/dealer-list', {
//       replace: true,
//       state: {
//         selectedBrands: { 
//           car: selectedCarTyreBrands, 
//           bike: selectedBikeTyreBrands, 
//           truck: selectedTruckTyreBrands, 
//           tractor: selectedTractorTyreBrands // Pass tractor selections
//         }, 
//         tyreTypes,
//       },
//     });
//   };

//   const handleCheckboxChange = (brandId, type) => {
//     if (type === 'car') {
//       setSelectedCarTyreBrands((prev) =>
//         prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
//       );
//     } else if (type === 'bike') {
//       setSelectedBikeTyreBrands((prev) =>
//         prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
//       );
//     } else if (type === 'truck') { // Handle truck tyre selection
//       setSelectedTruckTyreBrands((prev) =>
//         prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
//       );
//     } else if (type === 'tractor') { // Handle tractor tyre selection
//       setSelectedTractorTyreBrands((prev) =>
//         prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
//       );
//     }
//   };

//   return (
//     <div className="sign-inup">
//       <div className="container d-flex align-items-center justify-content-center form-height pt-4">
//         <div className="row justify-content-center w-100">
//           <div className="col-lg-8 col-md-10"> 
//             <div className="card form-card p-4" style={{ minWidth: '600px' }}> 
//               <div className="card-header form-card-header btn btn-primary">
//                 <div className="ec-brand">
//                   <a href="#" title="Ekka" style={{ color: 'white', fontWeight: 'bold', fontSize: '35px' }}>
//                     Select Tyres Category
//                   </a>
//                 </div>
//               </div>
//               <div className="card-body p-5">
//                 <div className="tyre-category-section">
//                   <div className="form-group d-flex flex-wrap gap-3"> 
//                     <div className="form-check tyre-category-checkbox">
//                       <input 
//                         type="checkbox" 
//                         id="dealsInCar" 
//                         className="form-check-input"
//                         checked={tyreTypes.car} 
//                         onChange={() => setTyreTypes(prev => ({ ...prev, car: !prev.car }))} 
//                       />
//                       <label htmlFor="dealsInCar">Deals in Car</label>
//                     </div>
//                     <div className="form-check tyre-category-checkbox">
//                       <input 
//                         type="checkbox" 
//                         id="dealsInBike" 
//                         className="form-check-input"
//                         checked={tyreTypes.bike} 
//                         onChange={() => setTyreTypes(prev => ({ ...prev, bike: !prev.bike }))} 
//                       />
//                       <label htmlFor="dealsInBike">Deals in Bike</label>
//                     </div>
//                     <div className="form-check tyre-category-checkbox"> {/* New checkbox for trucks */}
//                       <input 
//                         type="checkbox" 
//                         id="dealsInTruck" 
//                         className="form-check-input"
//                         checked={tyreTypes.truck} 
//                         onChange={() => setTyreTypes(prev => ({ ...prev, truck: !prev.truck }))} 
//                       />
//                       <label htmlFor="dealsInTruck">Deals in Truck</label>
//                     </div>
//                     <div className="form-check tyre-category-checkbox"> {/* New checkbox for tractors */}
//                       <input 
//                         type="checkbox" 
//                         id="dealsInTractor" 
//                         className="form-check-input"
//                         checked={tyreTypes.tractor} 
//                         onChange={() => setTyreTypes(prev => ({ ...prev, tractor: !prev.tractor }))} 
//                       />
//                       <label htmlFor="dealsInTractor">Deals in Tractor</label>
//                     </div>
//                   </div>
                  
//                   <div className="d-flex gap-9 mt-3"> 
//                     {tyreTypes.car && (
//                       <div className="tyre-brand-section">
//                         <h5 className="tyre-brand-heading mb-5">Car Tyre Brands</h5>
//                         {tyres.map((brand) => (
//                           <div key={brand._id} className="form-check tyre-brand-checkbox">
//                             <input
//                               type="checkbox"
//                               id={`car-${brand._id}`}
//                               className="form-check-input"
//                               checked={selectedCarTyreBrands.includes(brand._id)}
//                               onChange={() => handleCheckboxChange(brand._id, 'car')}
//                             />
//                             <label htmlFor={`car-${brand._id}`}>{brand.name}</label>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                     {tyreTypes.bike && (
//                       <div className="tyre-brand-section">
//                         <h5 className="tyre-brand-heading mb-5">Bike Tyre Brands</h5>
//                         {tyres.map((brand) => (
//                           <div key={brand._id} className="form-check tyre-brand-checkbox">
//                             <input
//                               type="checkbox"
//                               id={`bike-${brand._id}`}
//                               className="form-check-input"
//                               checked={selectedBikeTyreBrands.includes(brand._id)}
//                               onChange={() => handleCheckboxChange(brand._id, 'bike')}
//                             />
//                             <label htmlFor={`bike-${brand._id}`}>{brand.name}</label>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                     {tyreTypes.truck && ( // New section for truck tyre brands
//                       <div className="tyre-brand-section">
//                         <h5 className="tyre-brand-heading mb-5">Truck Tyre Brands</h5>
//                         {tyres.map((brand) => (
//                           <div key={brand._id} className="form-check tyre-brand-checkbox">
//                             <input
//                               type="checkbox"
//                               id={`truck-${brand._id}`}
//                               className="form-check-input"
//                               checked={selectedTruckTyreBrands.includes(brand._id)}
//                               onChange={() => handleCheckboxChange(brand._id, 'truck')}
//                             />
//                             <label htmlFor={`truck-${brand._id}`}>{brand.name}</label>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                     {tyreTypes.tractor && ( // New section for tractor tyre brands
//                       <div className="tyre-brand-section">
//                         <h5 className="tyre-brand-heading mb-5">Tractor Tyre Brands</h5>
//                         {tyres.map((brand) => (
//                           <div key={brand._id} className="form-check tyre-brand-checkbox">
//                             <input
//                               type="checkbox"
//                               id={`tractor-${brand._id}`}
//                               className="form-check-input"
//                               checked={selectedTractorTyreBrands.includes(brand._id)}
//                               onChange={() => handleCheckboxChange(brand._id, 'tractor')}
//                             />
//                             <label htmlFor={`tractor-${brand._id}`}>{brand.name}</label>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
                  
//                   <button className="btn btn-primary submit-btn mt-3" onClick={handleSubmit}>
//                     View Selected Brands
//                   </button>
                  
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div> 
//   );
// }






// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import url from "../../env.js";

// export default function DealerCategories() {
//   const [tyres, setTyres] = useState([]);
//   const [alloyWheels, setAlloyWheels] = useState([]); // State for alloy wheel brands
//   const [batteries, setBatteries] = useState([]); // State for battery brands
//   const [selectedCarTyreBrands, setSelectedCarTyreBrands] = useState([]);
//   const [selectedBikeTyreBrands, setSelectedBikeTyreBrands] = useState([]);
//   const [selectedTruckTyreBrands, setSelectedTruckTyreBrands] = useState([]);
//   const [selectedTractorTyreBrands, setSelectedTractorTyreBrands] = useState([]);
//   const [selectedBatteryBrands, setSelectedBatteryBrands] = useState([]);
//   const [selectedAlloyWheelBrands, setSelectedAlloyWheelBrands] = useState([]);
//   const [tyreTypes, setTyreTypes] = useState({ car: false, bike: false, truck: false, tractor: false, battery: false, alloywheel: false });
//   const navigate = useNavigate();
//   const clientId = localStorage.getItem("clientId");

//   useEffect(() => {
//     if (document.referrer === '') {
//       navigate('/');
//     }
//   }, [navigate]);

//   useEffect(() => {
//     if (!clientId) {
//       console.error("Client ID is missing!");
//       return;
//     }

//     const fetchTyres = async () => {
//       try {
//         const response = await fetch(`${url.nodeapipath}/get-tyre-brands`);
//         const data = await response.json();
//         setTyres(data);

//         // Fetch alloy wheel brands
//         const alloyResponse = await fetch(`${url.nodeapipath}/get-alloybrand`);
//         const alloyData = await alloyResponse.json();
//         setAlloyWheels(alloyData);

//         // Fetch battery brands
//         const batteryResponse = await fetch(`${url.nodeapipath}/get-Batterybrand`);
//         const batteryData = await batteryResponse.json();
//         setBatteries(batteryData);

//         // Load previously selected brands for this dealer
//         const savedSelections = localStorage.getItem(`selectedBrands_${clientId}`);
//         if (savedSelections) {
//           const { car, bike, truck, tractor, battery, alloywheel } = JSON.parse(savedSelections);
//           setSelectedCarTyreBrands(car || []);
//           setSelectedBikeTyreBrands(bike || []);
//           setSelectedTruckTyreBrands(truck || []);
//           setSelectedTractorTyreBrands(tractor || []);
//           setSelectedBatteryBrands(battery || []);
//           setSelectedAlloyWheelBrands(alloywheel || []);
//         }
//       } catch (error) {
//         console.error("Error fetching tyre brands:", error);
//       }
//     };

//     fetchTyres();
//   }, [clientId, navigate]);

//   const handleSubmit = () => {
//     localStorage.setItem(
//       `selectedBrands_${clientId}`,
//       JSON.stringify({ 
//         car: selectedCarTyreBrands, 
//         bike: selectedBikeTyreBrands, 
//         truck: selectedTruckTyreBrands, 
//         tractor: selectedTractorTyreBrands,
//         battery: selectedBatteryBrands,
//         alloywheel: selectedAlloyWheelBrands
//       })
//     );

//     navigate('/dealer-list', {
//       replace: true,
//       state: {
//         selectedBrands: { 
//           car: selectedCarTyreBrands, 
//           bike: selectedBikeTyreBrands, 
//           truck: selectedTruckTyreBrands, 
//           tractor: selectedTractorTyreBrands,
//           battery: selectedBatteryBrands,
//           alloywheel: selectedAlloyWheelBrands
//         }, 
//         tyreTypes,
//       },
//     });
//   };

//   const handleCheckboxChange = (brandId, type) => {
//     if (type === 'car') {
//       setSelectedCarTyreBrands((prev) =>
//         prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
//       );
//     } else if (type === 'bike') {
//       setSelectedBikeTyreBrands((prev) =>
//         prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
//       );
//     }  else if (type === 'truck') {
//       setSelectedTruckTyreBrands((prev) =>
//         prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
//       );
//     } else if (type === 'tractor') {
//       setSelectedTractorTyreBrands((prev) =>
//         prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
//       );
//     } else if (type === 'battery') {
//       setSelectedBatteryBrands((prev) =>
//         prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
//       );
//     } else if (type === 'alloywheel') {
//       setSelectedAlloyWheelBrands((prev) =>
//         prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
//       );
//     }
//   };

//   return (
//     <div className="sign-inup">
//       <div className="container d-flex align-items-center justify-content-center form-height pt-4">
//         <div className="row justify-content-center w-100">
//           <div className="col-lg-8 col-md-10"> 
//             <div className="card form-card p-4" style={{ minWidth: '1200px' , right : '180px'}}> 
//               <div className="card-header form-card-header btn btn-primary">
//                 <div className="ec-brand">
//                   <a href="#" title="Ekka" style={{ color: 'white', fontWeight: 'bold', fontSize: '35px' }}>
//                     Select Tyres Category
//                   </a>
//                 </div>
//               </div>
//               <div className="card-body p-5">
//                 <div className="tyre-category-section">
//                   <div className="form-group d-flex flex-wrap gap-3"> 
//                     <div className="form-check tyre-category-checkbox">
//                       <input 
//                         type="checkbox" 
//                         id="dealsInCar" 
//                         className="form-check-input"
//                         checked={tyreTypes.car} 
//                         onChange={() => setTyreTypes(prev => ({ ...prev, car: !prev.car }))} 
//                       />
//                       <label htmlFor="dealsInCar">Deals in Car</label>
//                     </div>
//                     <div className="form-check tyre-category-checkbox">
//                       <input 
//                         type="checkbox" 
//                         id="dealsInBike" 
//                         className="form-check-input"
//                         checked={tyreTypes.bike} 
//                         onChange={() => setTyreTypes(prev => ({ ...prev, bike: !prev.bike }))} 
//                       />
//                       <label htmlFor="dealsInBike">Deals in Bike</label>
//                     </div>
//                     <div className="form-check tyre-category-checkbox">
//                       <input 
//                         type="checkbox" 
//                         id="dealsInTruck" 
//                         className="form-check-input"
//                         checked={tyreTypes.truck} 
//                         onChange={() => setTyreTypes(prev => ({ ...prev, truck: !prev.truck }))} 
//                       />
//                       <label htmlFor="dealsInTruck">Deals in Truck</label>
//                     </div>
//                     <div className="form-check tyre-category-checkbox">
//                       <input 
//                         type="checkbox" 
//                         id="dealsInTractor" 
//                         className="form-check-input"
//                         checked={tyreTypes.tractor} 
//                         onChange={() => setTyreTypes(prev => ({ ...prev, tractor: !prev.tractor }))} 
//                       />
//                       <label htmlFor="dealsInTractor">Deals in Tractor</label>
//                     </div>
//                     <div className="form-check tyre-category-checkbox">
//                       <input 
//                         type="checkbox" 
//                         id="dealsInBattery" 
//                         className="form-check-input"
//                         checked={tyreTypes.battery} 
//                         onChange={() => setTyreTypes(prev => ({ ...prev, battery: !prev.battery }))} 
//                       />
//                       <label htmlFor="dealsInBattery">Deals in Battery</label>
//                     </div>
//                     <div className="form-check tyre-category-checkbox">
//                       <input 
//                         type="checkbox" 
//                         id="dealsInAlloyWheel" 
//                         className="form-check-input"
//                         checked={tyreTypes.alloywheel} 
//                         onChange={() => setTyreTypes(prev => ({ ...prev, alloywheel: !prev.alloywheel }))} 
//                       />
//                       <label htmlFor="dealsInAlloyWheel">Deals in Alloy Wheel</label>
//                       </div>
//                   </div>
                  
//                   <div className="d-flex gap-9 mt-3"> 
//                     {tyreTypes.car && (
//                       <div className="tyre-brand-section">
//                         <h5 className="tyre-brand-heading mb-5">Car Tyre Brands</h5>
//                         {tyres.map((brand) => (
//                           <div key={brand._id} className="form-check tyre-brand-checkbox">
//                             <input
//                               type="checkbox"
//                               id={`car-${brand._id}`}
//                               className="form-check-input"
//                               checked={selectedCarTyreBrands.includes(brand._id)}
//                               onChange={() => handleCheckboxChange(brand._id, 'car')}
//                             />
//                             <label htmlFor={`car-${brand._id}`}>{brand.name}</label>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                     {tyreTypes.bike && (
//                       <div className="tyre-brand-section">
//                         <h5 className="tyre-brand-heading mb-5">Bike Tyre Brands</h5>
//                         {tyres.map((brand) => (
//                           <div key={brand._id} className="form-check tyre-brand-checkbox">
//                             <input
//                               type="checkbox"
//                               id={`bike-${brand._id}`}
//                               className="form-check-input"
//                               checked={selectedBikeTyreBrands.includes(brand._id)}
//                               onChange={() => handleCheckboxChange(brand._id, 'bike')}
//                             />
//                             <label htmlFor={`bike-${brand._id}`}>{brand.name}</label>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                     {tyreTypes.truck && (
//                       <div className="tyre-brand-section">
//                         <h5 className="tyre-brand-heading mb-5">Truck Tyre Brands</h5>
//                         {tyres.map((brand) => (
//                           <div key={brand._id} className="form-check tyre-brand-checkbox">
//                             <input
//                               type="checkbox"
//                               id={`truck-${brand._id}`}
//                               className="form-check-input"
//                               checked={selectedTruckTyreBrands.includes(brand._id)}
//                               onChange={() => handleCheckboxChange(brand._id, 'truck')}
//                             />
//                             <label htmlFor={`truck-${brand._id}`}>{brand.name}</label>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                     {tyreTypes.tractor && (
//                       <div className="tyre-brand-section">
//                         <h5 className="tyre-brand-heading mb-5">Tractor Tyre Brands</h5>
//                         {tyres.map((brand) => (
//                           <div key={brand._id} className="form-check tyre-brand-checkbox">
//                             <input
//                               type="checkbox"
//                               id={`tractor-${brand._id}`}
//                               className="form-check-input"
//                               checked={selectedTractorTyreBrands.includes(brand._id)}
//                               onChange={() => handleCheckboxChange(brand._id, 'tractor')}
//                             />
//                             <label htmlFor={`tractor-${brand._id}`}>{brand.name}</label>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                     {tyreTypes.battery && ( // Section for battery brands
//                       <div className="tyre-brand-section">
//                         <h5 className="tyre-brand-heading mb-5">Battery Brands</h5>
//                         {batteries.map((brand) => (
//                           <div key={brand._id} className="form-check tyre-brand-checkbox">
//                             <input
//                               type="checkbox"
//                               id={`battery-${brand._id}`}
//                               className="form-check-input"
//                               checked={selectedBatteryBrands.includes(brand._id)}
//                               onChange={() => handleCheckboxChange(brand._id, 'battery')}
//                             />
//                             <label htmlFor={`battery-${brand._id}`}>{brand.name}</label>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                     {tyreTypes.alloywheel && ( // Section for alloy wheel brands
//                       <div className="tyre-brand-section">
//                         <h5 className="tyre-brand-heading mb-5">Alloy Wheel Brands</h5>
//                         {alloyWheels.map((brand) => (
//                           <div key={brand._id} className="form-check tyre-brand-checkbox">
//                             <input
//                               type="checkbox"
//                               id={`alloywheel-${brand._id}`}
//                               className="form-check-input"
//                               checked={selectedAlloyWheelBrands.includes(brand._id)}
//                               onChange={() => handleCheckboxChange(brand._id, 'alloywheel')}
//                             />
//                              <label htmlFor={`alloywheel-${brand._id}`}>{brand.name}</label>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
                  
//                   <button className="btn btn-primary submit-btn mt-3" onClick={handleSubmit}>
//                     View Selected Brands
//                   </button>
                  
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> 
//     </div>
//   );
// }




// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import url from "../../env.js";

// export default function DealerCategories() {
//   const [tyres, setTyres] = useState([]);
//   const [alloyWheels, setAlloyWheels] = useState([]); // State for alloy wheel brands
//   const [batteries, setBatteries] = useState([]); // State for battery brands
//   const [selectedCarTyreBrands, setSelectedCarTyreBrands] = useState([]);
//   const [selectedBikeTyreBrands, setSelectedBikeTyreBrands] = useState([]);
//   const [selectedTruckTyreBrands, setSelectedTruckTyreBrands] = useState([]);
//   const [selectedTractorTyreBrands, setSelectedTractorTyreBrands] = useState([]);
//   const [selectedBatteryBrands, setSelectedBatteryBrands] = useState([]);
//   const [selectedAlloyWheelBrands, setSelectedAlloyWheelBrands] = useState([]);
//   const [tyreTypes, setTyreTypes] = useState({ car: false, bike: false, truck: false, tractor: false, battery: false, alloywheel: false });
//   const navigate = useNavigate();
//   const clientId = localStorage.getItem("clientId");

//   useEffect(() => {
//     if (document.referrer === '') {
//       navigate('/');
//     }
//   }, [navigate]);

//   useEffect(() => {
//     if (!clientId) {
//       console.error("Client ID is missing!");
//       return;
//     }

//     // const fetchTyres = async () => {
//     //   try {
//     //     const response = await fetch(`${url.nodeapipath}/get-tyre-brands`);
//     //     const data = await response.json();
//     //     setTyres(data);

//     //     // Fetch alloy wheel brands
//     //     const alloyResponse = await fetch(`${url.nodeapipath}/get-alloybrand`);
//     //     const alloyData = await alloyResponse.json();
//     //     setAlloyWheels(alloyData);

//     //     // Fetch battery brands
//     //     const batteryResponse = await fetch(`${url.nodeapipath}/get-Batterybrand`);
//     //     const batteryData = await batteryResponse.json();
//     //     setBatteries(batteryData);

//     //     // Load previously selected brands for this dealer
//     //     const savedSelections = localStorage.getItem(`selectedBrands_${clientId}`);
//     //     if (savedSelections) {
//     //       const { car, bike, truck, tractor, battery, alloywheel } = JSON.parse(savedSelections);
//     //       setSelectedCarTyreBrands(car || []);
//     //       setSelectedBikeTyreBrands(bike || []);
//     //       setSelectedTruckTyreBrands(truck || []);
//     //       setSelectedTractorTyreBrands(tractor || []);
//     //       setSelectedBatteryBrands(battery || []);
//     //       setSelectedAlloyWheelBrands(alloywheel || []);
//     //     }
//     //   } catch (error) {
//     //     console.error("Error fetching tyre brands:", error);
//     //   }
//     // };




// const fetchTyres = async () => {
//   try {
//     const response = await fetch(`${url.nodeapipath}/get-tyre-brands`);
//     const data = await response.json();
//     setTyres(data);

//     // Load previously selected brands for this dealer
//     const savedSelections = localStorage.getItem(`selectedBrands_${clientId}`);
//     if (savedSelections) {
//       const {
//         car = [],
//         bike = [],
//         truck = [],
//         tractor = [],
//         battery = [],
//         alloy = [],
//         accessories = []
//       } = JSON.parse(savedSelections);

//       setSelectedCarTyreBrands(car);
//       setSelectedBikeTyreBrands(bike);
//       setSelectedTruckTyreBrands(truck);
//       setSelectedTractorTyreBrands(tractor);
//       setSelectedBatteryBrands(battery);
//       setSelectedAlloyBrands(alloy);
//       setSelectedAccessoriesBrands(accessories);
//     }
//   } catch (error) {
//     console.error("Error fetching tyre brands:", error);
//   }
// };

// fetchTyres();


//     fetchTyres();
//   }, [clientId, navigate]);

//   const handleSubmit = () => {
//     localStorage.setItem(
//       `selectedBrands_${clientId}`,
//       JSON.stringify({ 
//         car: selectedCarTyreBrands, 
//         bike: selectedBikeTyreBrands, 
//         truck: selectedTruckTyreBrands, 
//         tractor: selectedTractorTyreBrands,
//         battery: selectedBatteryBrands,
//         alloywheel: selectedAlloyWheelBrands
//       })
//     );

//     navigate('/dealer-list', {
//       replace: true,
//       state: {
//         selectedBrands: { 
//           car: selectedCarTyreBrands, 
//           bike: selectedBikeTyreBrands, 
//           truck: selectedTruckTyreBrands, 
//           tractor: selectedTractorTyreBrands,
//           battery: selectedBatteryBrands,
//           alloywheel: selectedAlloyWheelBrands
//         }, 
//         tyreTypes,
//       },
//     });
//   };

//   const handleCheckboxChange = (brandId, type) => {
//     if (type === 'car') {
//       setSelectedCarTyreBrands((prev) =>
//         prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
//       );
//     } else if (type === 'bike') {
//       setSelectedBikeTyreBrands((prev) =>
//         prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
//       );
//     } else if (type === 'truck') {
//       setSelectedTruckTyreBrands((prev) =>
//         prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
//       );
//     } else if (type === 'tractor') {
//       setSelectedTractorTyreBrands((prev) =>
//         prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
//       );
//     } else if (type === 'battery') {
//       setSelectedBatteryBrands((prev) =>
//         prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
//       );
//     } else if (type === 'alloywheel') {
//       setSelectedAlloyWheelBrands((prev) =>
//         prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
//       );
//     }
//   };

//   return (
//     <div className="sign-inup">
//       <div className="container d-flex align-items-center justify-content-center form-height pt-4">
//         <div className="row justify-content-center w-100">
//           <div className="col-lg-8 col-md-10"> 
//             <div className="card form-card p-4" style={{ minWidth: '1200px' , right : '180px'}}> 
//               <div className="card-header form-card-header btn btn-primary">
//                 <div className="ec-brand">
//                   <a href="#" title="Ekka" style={{ color: 'white', fontWeight: 'bold', fontSize: '35px' }}>
//                     Select Tyres Category
//                   </a>
//                 </div>
//               </div>
//               <div className="card-body p-5">
//                 <div className="tyre-category-section">
//                   <div className="form-group d-flex flex-wrap gap-3"> 
//                     <div className="form-check tyre-category-checkbox">
//                       <input 
//                         type="checkbox" 
//                         id="dealsInCar" 
//                         className="form-check-input"
//                         checked={tyreTypes.car} 
//                         onChange={() => setTyreTypes(prev => ({ ...prev, car: !prev.car }))} 
//                       />
//                       <label htmlFor="dealsInCar">Deals in Car</label>
//                     </div>
//                     <div className="form-check tyre-category-checkbox">
//                       <input 
//                         type="checkbox" 
//                         id="dealsInBike" 
//                         className="form-check-input"
//                         checked={tyreTypes.bike} 
//                         onChange={() => setTyreTypes(prev => ({ ...prev, bike: !prev.bike }))} 
//                       />
//                       <label htmlFor="dealsInBike">Deals in Bike</label>
//                     </div>
//                     <div className="form-check tyre-category-checkbox">
//                       <input 
//                         type="checkbox" 
//                         id="dealsInTruck" 
//                         className="form-check-input"
//                         checked={tyreTypes.truck} 
//                         onChange={() => setTyreTypes(prev => ({ ...prev, truck: !prev.truck }))} 
//                       />
//                       <label htmlFor="dealsInTruck">Deals in Truck</label>
//                     </div>
//                     <div className="form-check tyre-category-checkbox">
//                       <input 
//                         type="checkbox" 
//                         id="dealsInTractor" 
//                         className="form-check-input"
//                         checked={tyreTypes.tractor} 
//                         onChange={() => setTyreTypes(prev => ({ ...prev, tractor: !prev.tractor }))} 
//                       />
//                       <label htmlFor="dealsInTractor">Deals in Tractor</label>
//                     </div>
//                     <div className="form-check tyre-category-checkbox">
//                       <input 
//                         type="checkbox" 
//                         id="dealsInBattery" 
//                         className="form-check-input"
//                         checked={tyreTypes.battery} 
//                         onChange={() => setTyreTypes(prev => ({ ...prev, battery: !prev.battery }))} 
//                       />
//                       <label htmlFor="dealsInBattery">Deals in Battery</label>
//                     </div>
//                     <div className="form-check tyre-category-checkbox">
//                       <input 
//                         type="checkbox" 
//                         id="dealsInAlloyWheel" 
//                         className="form-check-input"
//                         checked={tyreTypes.alloywheel} 
//                         onChange={() => setTyreTypes(prev => ({ ...prev, alloywheel: !prev.alloywheel }))} 
//                       />
//                       <label htmlFor="dealsInAlloyWheel">Deals in Alloy Wheel</label>
//                     </div>
//                   </div>
                  
//                   <div className="d-flex gap-9 mt-3"> 
//                     {tyreTypes.car && (
//                       <div className="tyre-brand-section">
//                         <h5 className="tyre-brand-heading mb-5">Car Tyre Brands</h5>
//                         {tyres.filter(brand => brand.category === 'car').map((brand) => (
//                           <div key={brand._id} className="form-check tyre-brand-checkbox">
//                             <input
//                               type="checkbox"
//                               id={`car-${brand._id}`}
//                               className="form-check-input"
//                               checked={selectedCarTyreBrands.includes(brand._id)}
//                               onChange={() => handleCheckboxChange(brand._id, 'car')}
//                             />
//                             <label htmlFor={`car-${brand._id}`}>{brand.name}</label>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                     {tyreTypes.bike && (
//                       <div className="tyre-brand-section">
//                         <h5 className="tyre-brand-heading mb-5">Bike Tyre Brands</h5>
//                         {tyres.filter(brand => brand.category === 'bike').map((brand) => (
//                           <div key={brand._id} className="form-check tyre-brand-checkbox">
//                             <input
//                               type="checkbox"
//                               id={`bike-${brand._id}`}
//                               className="form-check-input"
//                               checked={selectedBikeTyreBrands.includes(brand._id)}
//                               onChange={() => handleCheckboxChange(brand._id, 'bike')}
//                             />
//                             <label htmlFor={`bike-${brand._id}`}>{brand.name}</label>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                     {tyreTypes.truck && (
//                       <div className="tyre-brand-section">
//                         <h5 className="tyre-brand-heading mb-5">Truck Tyre Brands</h5>
//                         {tyres.filter(brand => brand.category === 'truck').map((brand) => (
//                           <div key={brand._id} className="form-check tyre-brand-checkbox">
//                             <input
//                               type="checkbox"
//                               id={`truck-${brand._id}`}
//                               className="form-check-input"
//                               checked={selectedTruckTyreBrands.includes(brand._id)}
//                               onChange={() => handleCheckboxChange(brand._id, 'truck')}
//                             />
//                             <label htmlFor={`truck-${brand._id}`}>{brand.name}</label>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                     {tyreTypes.tractor && (
//                       <div className="tyre-brand-section">
//                         <h5 className="tyre-brand-heading mb-5">Tractor Tyre Brands</h5>
//                         {tyres.filter(brand => brand.category === 'tractor').map((brand) => (
//                           <div key={brand._id} className="form-check tyre-brand-checkbox">
//                             <input
//                               type="checkbox"
//                               id={`tractor-${brand._id}`}
//                               className="form-check-input"
//                               checked={selectedTractorTyreBrands.includes(brand._id)}
//                               onChange={() => handleCheckboxChange(brand._id, 'tractor')}
//                             />
//                             <label htmlFor={`tractor-${brand._id}`}>{brand.name}</label>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                     {tyreTypes.battery && ( // Section for battery brands
//                       <div className="tyre-brand-section">
//                         <h5 className="tyre-brand-heading mb-5">Battery Brands</h5>
//                         {batteries.map((brand) => (
//                           <div key={brand._id} className="form-check tyre-brand-checkbox">
//                             <input
//                               type="checkbox"
//                               id={`battery-${brand._id}`}
//                               className="form-check-input"
//                               checked={selectedBatteryBrands.includes(brand._id)}
//                               onChange={() => handleCheckboxChange(brand._id, 'battery')}
//                             />
//                             <label htmlFor={`battery-${brand._id}`}>{brand.name}</label>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                     {tyreTypes.alloywheel && ( // Section for alloy wheel brands
//                       <div className="tyre-brand-section">
//                         <h5 className="tyre-brand-heading mb-5">Alloy Wheel Brands</h5>
//                         {alloyWheels.map((brand) => (
//                           <div key={brand._id} className="form-check tyre-brand-checkbox">
//                             <input
//                               type="checkbox"
//                               id={`alloywheel-${brand._id}`}
//                               className="form-check-input"
//                               checked={selectedAlloyWheelBrands.includes(brand._id)}
//                               onChange={() => handleCheckboxChange(brand._id, 'alloywheel')}
//                             />
//                             <label htmlFor={`alloywheel-${brand._id}`}>{brand.name}</label>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
                  
//                   <button className="btn btn-primary submit-btn mt-3" onClick={handleSubmit}>
//                     View Selected Brands
//                   </button>
                  
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> 
//     </div>
//   );
// }





import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import url from "../../env.js";

export default function DealerCategories() {
  const [tyres, setTyres] = useState([]);
  const [selectedCarTyreBrands, setSelectedCarTyreBrands] = useState([]);
  const [selectedBikeTyreBrands, setSelectedBikeTyreBrands] = useState([]);
  const [selectedTruckTyreBrands, setSelectedTruckTyreBrands] = useState([]);
  const [selectedTractorTyreBrands, setSelectedTractorTyreBrands] = useState([]);
  const [selectedBatteryBrands, setSelectedBatteryBrands] = useState([]);
  const [selectedAlloyWheelBrands, setSelectedAlloyWheelBrands] = useState([]);
  const [selectedAccessoriesBrands, setSelectedAccessoriesBrands] = useState([]);
  const [tyreTypes, setTyreTypes] = useState({ car: false, bike: false, truck: false, tractor: false, battery: false, alloywheel: false, accessories: false });
  const navigate = useNavigate();
  const clientId = localStorage.getItem("clientId");

  useEffect(() => {
    if (document.referrer === '') {
      navigate('/');
    }
  }, [navigate]);

  useEffect(() => {
    if (!clientId) {
      console.error("Client ID is missing!");
      return;
    }

    const fetchTyres = async () => {
      try {
        const response = await fetch(`${url.nodeapipath}/get-tyre-brands`);
        const data = await response.json();
        setTyres(data);

        // Load previously selected brands for this dealer
        const savedSelections = localStorage.getItem(`selectedBrands_${clientId}`);
        if (savedSelections) {
          const {
            car = [],
            bike = [],
            truck = [],
            tractor = [],
            battery = [],
            alloywheel = [],
            accessories = []
          } = JSON.parse(savedSelections);

          setSelectedCarTyreBrands(car);
          setSelectedBikeTyreBrands(bike);
          setSelectedTruckTyreBrands(truck);
          setSelectedTractorTyreBrands(tractor);
          setSelectedBatteryBrands(battery);
          setSelectedAlloyWheelBrands(alloywheel);
          setSelectedAccessoriesBrands(accessories);
        }
      } catch (error) {
        console.error("Error fetching tyre brands:", error);
      }
    };

    fetchTyres();
  }, [clientId, navigate]);

  const handleSubmit = () => {
    localStorage.setItem(
      `selectedBrands_${clientId}`,
      JSON.stringify({ 
        car: selectedCarTyreBrands, 
        bike: selectedBikeTyreBrands, 
        truck: selectedTruckTyreBrands, 
        tractor: selectedTractorTyreBrands,
        battery: selectedBatteryBrands,
        alloywheel: selectedAlloyWheelBrands,
        accessories: selectedAccessoriesBrands
      })
    );

    navigate('/dealer-list', {
      replace: true,
      state: {
        selectedBrands: { 
          car: selectedCarTyreBrands, 
          bike: selectedBikeTyreBrands, 
          truck: selectedTruckTyreBrands, 
          tractor: selectedTractorTyreBrands,
          battery: selectedBatteryBrands,
          alloywheel: selectedAlloyWheelBrands,
          accessories: selectedAccessoriesBrands
        }, 
        tyreTypes,
      },
    });
  };

  const handleCheckboxChange = (brandId, type) => {
    if (type === 'car') {
      setSelectedCarTyreBrands((prev) =>
        prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
      );
    } else if (type === 'bike') {
      setSelectedBikeTyreBrands((prev) =>
        prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
      );
    } else if (type === 'truck') {
      setSelectedTruckTyreBrands((prev) =>
        prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
      );
    } else if (type === 'tractor') {
      setSelectedTractorTyreBrands((prev) =>
        prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
      );
    } else if (type === 'battery') {
      setSelectedBatteryBrands((prev) =>
        prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
      );
    } else if (type === 'alloywheel') {
      setSelectedAlloyWheelBrands((prev) =>
        prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
      );
    } else if (type === 'accessories') {
      setSelectedAccessoriesBrands((prev) =>
        prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
      );
    }
  };

  return (
    <div className="sign-inup">
      <div className="container d-flex align-items-center justify-content-center form-height pt-4">
        <div className="row justify-content-center w-100">
          <div className="col-lg-8 col-md-10"> 
            <div className="card form-card p-4" style={{ minWidth: '1200px' , right : '180px'}}> 
              <div className="card-header form-card-header btn btn-primary">
                <div className="ec-brand">
                  <a href="#" title="Ekka" style={{ color: 'white', fontWeight: 'bold', fontSize: '35px' }}>
                    Select Tyres Category
                  </a>
                </div>
              </div>
              <div className="card-body p-5">
                <div className="tyre-category-section">
                  <div className="form-group d-flex flex-wrap gap-3"> 
                    <div className="form-check tyre-category-checkbox">
                      <input 
                        type="checkbox" 
                        id="dealsInCar" 
                        className="form-check-input"
                        checked={tyreTypes.car} 
                        onChange={() => setTyreTypes(prev => ({ ...prev, car: !prev.car }))} 
                      />
                      <label htmlFor="dealsInCar">Deals in Car</label>
                    </div>
                    <div className="form-check tyre-category-checkbox">
                      <input 
                        type="checkbox" 
                        id="dealsInBike" 
                        className="form-check-input"
                        checked={tyreTypes.bike} 
                        onChange={() => setTyreTypes(prev => ({ ...prev, bike: !prev.bike }))} 
                      />
                      <label htmlFor="dealsInBike">Deals in Bike</label>
                    </div>
                    <div className="form-check tyre-category-checkbox">
                      <input 
                        type="checkbox" 
                        id="dealsInTruck" 
                        className="form-check-input"
                        checked={tyreTypes.truck} 
                        onChange={() => setTyreTypes(prev => ({ ...prev, truck: !prev.truck }))} 
                      />
                      <label htmlFor="dealsInTruck">Deals in Truck</label>
                    </div>
                    <div className="form-check tyre-category-checkbox">
                      <input 
                        type="checkbox" 
                        id="dealsInTractor" 
                        className="form-check-input"
                        checked={tyreTypes.tractor} 
                        onChange={() => setTyreTypes(prev => ({ ...prev, tractor: !prev.tractor }))} 
                      />
                      <label htmlFor="dealsInTractor">Deals in Tractor</label>
                    </div>
                    <div className="form-check tyre-category-checkbox">
                      <input 
                        type="checkbox" 
                        id="dealsInBattery" 
                        className="form-check-input"
                        checked={tyreTypes.battery} 
                        onChange={() => setTyreTypes(prev => ({ ...prev, battery: !prev.battery }))} 
                      />
                      <label htmlFor="dealsInBattery">Deals in Battery</label>
                    </div>
                    <div className="form-check tyre-category-checkbox">
                      <input 
                        type="checkbox" 
                        id="dealsInAlloyWheel" 
                        className="form-check-input"
                        checked={tyreTypes.alloywheel} 
                        onChange={() => setTyreTypes(prev => ({ ...prev, alloywheel: !prev.alloywheel }))} 
                      />
                      <label htmlFor="dealsInAlloyWheel">Deals in Alloy Wheel</label>
                    </div>
                    <div className="form-check tyre-category-checkbox">
                      <input 
                        type="checkbox" 
                        id="dealsInAccessories" 
                        className="form-check-input"
                        checked={tyreTypes.accessories} 
                        onChange={() => setTyreTypes(prev => ({ ...prev, accessories: !prev.accessories }))} 
                      />
                      <label htmlFor="dealsInAccessories">Deals in Accessories</label>
                    </div>
                  </div>
                  
                  <div className="d-flex gap-9 mt-3"> 
                    {tyreTypes.car && (
                      <div className="tyre-brand-section">
                        <h5 className="tyre-brand-heading mb-5">Car Tyre Brands</h5>
                        {tyres.filter(brand => brand.category === 'car').map((brand) => (
                          <div key={brand._id} className="form-check tyre-brand-checkbox">
                            <input
                              type="checkbox"
                              id={`car-${brand._id}`}
                              className="form-check-input"
                              checked={selectedCarTyreBrands.includes(brand._id)}
                              onChange={() => handleCheckboxChange(brand._id, 'car')}
                            />
                            <label htmlFor={`car-${brand._id}`}>{brand.name}</label>
                          </div>
                        ))}
                      </div>
                    )}
                    {tyreTypes.bike && (
                      <div className="tyre-brand-section">
                        <h5 className="tyre-brand-heading mb-5">Bike Tyre Brands</h5>
                        {tyres.filter(brand => brand.category === 'bike').map((brand) => (
                          <div key={brand._id} className="form-check tyre-brand-checkbox">
                            <input
                              type="checkbox"
                              id={`bike-${brand._id}`}
                              className="form-check-input"
                              checked={selectedBikeTyreBrands.includes(brand._id)}
                              onChange={() => handleCheckboxChange(brand._id, 'bike')}
                            />
                            <label htmlFor={`bike-${brand._id}`}>{brand.name}</label>
                          </div>
                        ))}
                      </div>
                    )}
                    {tyreTypes.truck && (
                      <div className="tyre-brand-section">
                        <h5 className="tyre-brand-heading mb-5">Truck Tyre Brands</h5>
                        {tyres.filter(brand => brand.category === 'truck').map((brand) => (
                          <div key={brand._id} className="form-check tyre-brand-checkbox">
                            <input
                              type="checkbox"
                              id={`truck-${brand._id}`}
                              className="form-check-input"
                              checked={selectedTruckTyreBrands.includes(brand._id)}
                              onChange={() => handleCheckboxChange(brand._id, 'truck')}
                            />
                            <label htmlFor={`truck-${brand._id}`}>{brand.name}</label>
                          </div>
                        ))}
                      </div>
                    )}
                    {tyreTypes.tractor && (
                      <div className="tyre-brand-section">
                        <h5 className="tyre-brand-heading mb-5">Tractor Tyre Brands</h5>
                        {tyres.filter(brand => brand.category === 'tractor').map((brand) => (
                          <div key={brand._id} className="form-check tyre-brand-checkbox">
                            <input
                              type="checkbox"
                              id={`tractor-${brand._id}`}
                              className="form-check-input"
                              checked={selectedTractorTyreBrands.includes(brand._id)}
                              onChange={() => handleCheckboxChange(brand._id, 'tractor')}
                            />
                            <label htmlFor={`tractor-${brand._id}`}>{brand.name}</label>
                          </div>
                        ))}
                      </div>
                    )}
                    {tyreTypes.battery && ( // Section for battery brands
                      <div className="tyre-brand-section">
                        <h5 className="tyre-brand-heading mb-5">Battery Brands</h5>
                        {tyres.filter(brand => brand.category === 'battery').map((brand) => (
                          <div key={brand._id} className="form-check tyre-brand-checkbox">
                            <input
                              type="checkbox"
                              id={`battery-${brand._id}`}
                              className="form-check-input"
                              checked={selectedBatteryBrands.includes(brand._id)}
                              onChange={() => handleCheckboxChange(brand._id, 'battery')}
                            />
                            <label htmlFor={`battery-${brand._id}`}>{brand.name}</label>
                          </div>
                        ))}
                      </div>
                    )}
                    {tyreTypes.alloywheel && ( // Section for alloy wheel brands
                      <div className="tyre-brand-section">
                        <h5 className="tyre-brand-heading mb-5">Alloy Wheel Brands</h5>
                        {tyres.filter(brand => brand.category === 'alloywheel').map((brand) => (
                          <div key={brand._id} className="form-check tyre-brand-checkbox">
                            <input
                              type="checkbox"
                              id={`alloywheel-${brand._id}`}
                              className="form-check-input"
                              checked={selectedAlloyWheelBrands.includes(brand._id)}
                              onChange={() => handleCheckboxChange(brand._id, 'alloywheel')}
                            />
                            <label htmlFor={`alloywheel-${brand._id}`}>{brand.name}</label>
                          </div>
                        ))}
                      </div>
                    )}
                    {tyreTypes.accessories && ( // Section for accessories brands
                      <div className="tyre-brand-section">
                        <h5 className="tyre-brand-heading mb-5">Accessories Brands</h5>
                        {tyres.filter(brand => brand.category === 'accessories').map((brand) => (
                          <div key={brand._id} className="form-check tyre-brand-checkbox">
                            <input
                              type="checkbox"
                              id={`accessories-${brand._id}`}
                              className="form-check-input"
                              checked={selectedAccessoriesBrands.includes(brand._id)}
                              onChange={() => handleCheckboxChange(brand._id, 'accessories')}
                            />
                            <label htmlFor={`accessories-${brand._id}`}>{brand.name}</label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <button className="btn btn-primary submit-btn mt-3" onClick={handleSubmit}>
                    View Selected Brands
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
