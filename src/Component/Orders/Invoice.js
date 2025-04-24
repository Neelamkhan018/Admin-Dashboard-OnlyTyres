


// import React, { useState, useEffect, useRef } from 'react';
// import { useParams } from 'react-router-dom';
// import Sidebar from '../Siderbar/Sidebar';
// import Navbar from '../Navbar/Navbar';
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";


// import url from "../../env.js"


// export default function Invoice() {
//   const { orderId } = useParams();
//   const [order, setOrder] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [invoiceId, setInvoiceId] = useState(""); // State for Invoice ID
//   const invoiceRef = useRef(null); // Reference for the invoice section



//   useEffect(() => {
//     fetch(`${url.nodeapipath}/orders/${orderId}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Order not found');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setOrder(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, [orderId]);


//   const generateInvoiceNumber = () => {
// 	return Math.floor(1000000 + Math.random() * 9000000); // Generates a 7-digit number
//   };
//   useEffect(() => {
// 	setInvoiceId(generateInvoiceNumber());
//   }, []);
  

  
// useEffect(() => {
// 	// Fetch order details from API
// 	fetch(`${url.nodeapipath}/customer/${orderId}`) // Adjust API endpoint here
// 	  .then((response) => {
// 		if (!response.ok) {
// 		  throw new Error("Order not found");
// 		}
// 		return response.json();
// 	  })
// 	  .then((data) => {
// 		setOrder(data);
// 		setLoading(false);
// 	  })
// 	  .catch((error) => {
// 		setError(error.message);
// 		setLoading(false);
// 	  });
//   }, [orderId]);



//   // Function to Save Invoice as PDF
//   const handleSaveAsPDF = () => {
//     const invoiceElement = invoiceRef.current;
//     html2canvas(invoiceElement, { scale: 2 }).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("p", "mm", "a4");
//       const imgWidth = 190;
//       const imgHeight = (canvas.height * imgWidth) / canvas.width;
//       pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
//       pdf.save(`Invoice_${invoiceId}.pdf`);
//     });
//   };

//   // Function to Print Invoice
//   const handlePrint = () => {
//     window.print();
//   };


//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <>
//       <body className="ec-header-fixed ec-sidebar-fixed ec-sidebar-dark ec-header-light" id="body">
//         <div className="wrapper">
//           <Sidebar />
//           <div className="ec-page-wrapper">
//             <Navbar />
//             <div className="ec-content-wrapper">
//               <div className="content">
//                 <div className="breadcrumb-wrapper breadcrumb-wrapper-2">
//                   <h1>Invoice</h1>
//                   <p className="breadcrumbs">
//                     <span><a href="#">Home</a></span>
//                     <span><i className="mdi mdi-chevron-right"></i></span>Invoice
//                   </p>
//                 </div>
//                 <div ref={invoiceRef} className="card invoice-wrapper border-radius border bg-white p-4">
//                   <div className="d-flex justify-content-between">
//                     <h3 className="text-dark font-weight-medium">Invoice #{invoiceId}</h3>
//                     <div className="btn-group">
//                       <button className="btn btn-sm btn-primary" onClick={handleSaveAsPDF}>
//                         <i className="mdi mdi-content-save"></i> Save as PDF
//                       </button>
//                       <button className="btn btn-sm btn-primary" onClick={handlePrint}>
//                         <i className="mdi mdi-printer"></i> Print
//                       </button>
//                     </div>
//                   </div>
//                   <div className="row pt-5">
                   
//                     <div className="col-xl-3 col-lg-4 col-sm-6">
//                       <p className="text-dark mb-2">Customer</p>
//                       <address>
//                         <span> {order?.customer?.name || "N/A"} {order?.customer?.lastname || "N/A"}<br /></span>
// 						 {order?.customer?.address || "N/A"} {order?.customer?.state || "N/A"}<br />
//                          {order?.customer?.pincode || "N/A"}
//                         <br /> <span>Email:</span>   {order?.customer?.email || "N/A"}
//                         <br /> <span>Phone:</span> {order?.customer?.mobilenumber || "N/A"}
//                       </address>
//                     </div>
//                     <div className="col-xl-4 disp-none"></div>
//                     <div className="col-xl-2 col-lg-4 col-sm-6">
//                       <p className="text-dark mb-2">Details</p>
//                       <address>
//                         <span>Invoice ID:</span>
//                         <span className="text-dark">#{invoiceId}</span>
//                         <br /><span>Date :</span> {new Date(order?.date).toLocaleDateString()}
//                         <br /> <span>VAT:</span> {order?.vatId}
//                       </address>
//                     </div>
//                   </div>
//                   <div className="table-responsive">
//                     <table className="table mt-3 table-striped inv-tbl" style={{ width: '100%' }}>
//                       <thead>
//                         <tr>
//                           <th>#</th>
//                           <th>Image</th>
//                           <th>Item</th>
//                           {/* <th>Description</th> */}
//                           <th>Quantity</th>
//                           <th>Unit Cost</th>
//                           <th>Total</th>
//                         </tr>
//                       </thead>
// 					  <tbody>
//   {order?.items?.map((item, index) => (
//     <tr key={item.productId || index}>
//       <td>{index + 1}</td>
//       <td>
//         <img className="product-img" src={item.image || "assets/img/products/default.jpg"} alt="Product" />
//       </td>
//       <td>
//         <strong>{item.title || "Product Not Found"}</strong><br />
//         {/* {item.description || "No description available."} */}
//       </td>
// 	  <td className="text-center">{item.quantity}</td>
//       <td className="text-center">₹{(item.price || 0).toFixed(2)}</td>
    
//       <td className="text-right">₹{((item.price || 0) * (item.quantity || 0)).toFixed(2)}</td>
//     </tr>
//   ))}
 
// </tbody>


//                     </table>
//                   </div>

// <div className="row justify-content-end inc-total">
//   <div className="col-lg-3 col-xl-3 ml-sm-auto">
//     <ul className="list-unstyled mt-3">
// 	<li className="mid pb-3 text-dark">
//   Subtotal
//   <span className="d-inline-block float-right text-default">
//     ₹{order?.items?.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 0), 0).toFixed(2)}
//   </span>
// </li>


// <li className="mid pb-3 text-dark">
//   VAT (10%)
//   <span className="d-inline-block float-right text-default">
//     {/* ₹{(order?.items?.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 0), 0) * 0.1).toFixed(2)} */}
//   </span>
// </li>

// <li className="pb-3 text-dark">
//   Total
//   <span className="d-inline-block float-right">
//   ₹{order?.items?.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 0), 0).toFixed(2)}

//   </span>
// </li>
//     </ul>

//   </div>
// </div>

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </body>
//     </>
//   );
// }







import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../Siderbar/Sidebar';
import Navbar from '../Navbar/Navbar';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


import url from "../../env.js"


export default function Invoice() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [invoiceId, setInvoiceId] = useState(""); // State for Invoice ID
  const invoiceRef = useRef(null); // Reference for the invoice section

 


// Calculate subtotal, GST, and total
const subtotal = order?.items?.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 0), 0) || 0;
const gstRate = 0.18; // 18%
const cgst = (subtotal * gstRate) / 2; // 9%
const sgst = (subtotal * gstRate) / 2; // 9%
const total = subtotal + cgst + sgst;


  useEffect(() => {
    fetch(`${url.nodeapipath}/orders/${orderId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Order not found');
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


  const generateInvoiceNumber = () => {
	return Math.floor(1000000 + Math.random() * 9000000); // Generates a 7-digit number
  };
  useEffect(() => {
	setInvoiceId(generateInvoiceNumber());
  }, []);
  

  
// useEffect(() => {
// 	// Fetch order details from API
// 	fetch(`${url.nodeapipath}/customer/${orderId}`) // Adjust API endpoint here
// 	  .then((response) => {
// 		if (!response.ok) {
// 		  throw new Error("Order not found");
// 		}
// 		return response.json();
// 	  })
// 	  .then((data) => {
// 		setOrder(data);
// 		setLoading(false);
// 	  })
// 	  .catch((error) => {
// 		setError(error.message);
// 		setLoading(false);
// 	  });
//   }, [orderId]);

useEffect(() => {
  if (!orderId) return; // Only fetch if orderId is available

  fetch(`${url.nodeapipath}/customer/${orderId}`)
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


  // Function to Save Invoice as PDF
  const handleSaveAsPDF = () => {
    const invoiceElement = invoiceRef.current;
    html2canvas(invoiceElement, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save(`Invoice_${invoiceId}.pdf`);
    });
  };

  // Function to Print Invoice
  const handlePrint = () => {
    window.print();
  };



  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
                  <h1>Invoice</h1>
                  <p className="breadcrumbs">
                    <span><a href="#">Home</a></span>
                    <span><i className="mdi mdi-chevron-right"></i></span>Invoice
                  </p>
                </div>
                <div ref={invoiceRef} className="card invoice-wrapper border-radius border bg-white p-4">
                  <div className="d-flex justify-content-between">
                    <h3 className="text-dark font-weight-medium">Invoice #{invoiceId}</h3>
                    <div className="btn-group">
                      <button className="btn btn-sm btn-primary" onClick={handleSaveAsPDF}>
                        <i className="mdi mdi-content-save"></i> Save as PDF
                      </button>
                      <button className="btn btn-sm btn-primary" onClick={handlePrint}>
                        <i className="mdi mdi-printer"></i> Print
                      </button>
                    </div>
                  </div>
                  <div className="row pt-5">
                   
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <p className="text-dark mb-2">Customer</p>
                      <address>
                        <span> {order?.customer?.name || "N/A"} {order?.customer?.lastname || "N/A"}<br /></span>
						 {order?.customer?.address || "N/A"} {order?.customer?.state || "N/A"}<br />
                         {order?.customer?.pincode || "N/A"}
                        <br /> <span>Email:</span>   {order?.customer?.email || "N/A"}
                        <br /> <span>Phone:</span> {order?.customer?.mobilenumber || "N/A"}
                      </address>
                    </div>
                    <div className="col-xl-4 disp-none"></div>
                    <div className="col-xl-2 col-lg-4 col-sm-6">
                      <p className="text-dark mb-2">Details</p>
                      <address>
                        <span>Invoice ID:</span>
                        <span className="text-dark">#{invoiceId}</span>
                        <br /><span>Date :</span> {new Date(order?.date).toLocaleDateString()}
                        {/* <br /> <span>GST:</span>  */}
                      </address>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table mt-3 table-striped inv-tbl" style={{ width: '100%' }}>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Image</th>
                          <th>Item</th>
                          {/* <th>Description</th> */}
                          <th>Quantity</th>
                          <th>Unit Cost</th>
                          <th>Total</th>
                        </tr>
                      </thead>
					  <tbody>
  {order?.items?.map((item, index) => (
    <tr key={item.productId || index}>
      <td>{index + 1}</td>
      <td>
        <img className="product-img" src={item.image || "assets/img/products/default.jpg"} alt="Product" />
      </td>
      <td>
        <strong>{item.title || "Product Not Found"}</strong><br />
        {/* {item.description || "No description available."} */}
      </td>
	  <td className="text-center">{item.quantity}</td>
      <td className="text-center">₹{(item.price || 0).toFixed(2)}</td>
    
      <td className="text-right">₹{((item.price || 0) * (item.quantity || 0)).toFixed(2)}</td>
    </tr>
  ))}
 
</tbody>


                    </table>
                  </div>


<div className="row justify-content-end inc-total">
  <div className="col-lg-3 col-xl-3 ml-sm-auto">
    <ul className="list-unstyled mt-3">
      <li className="mid pb-3 text-dark">
        Subtotal
        <span className="d-inline-block float-right text-default">
          ₹{subtotal.toFixed(2)}
        </span>
      </li>
      <li className="mid pb-3 text-dark">
        CGST (9%)
        <span className="d-inline-block float-right text-default">
          ₹{cgst.toFixed(2)}
        </span>
      </li>
      <li className="mid pb-3 text-dark">
        SGST (9%)
        <span className="d-inline-block float-right text-default">
          ₹{sgst.toFixed(2)}
        </span>
      </li>
      <li className="pb-3 text-dark">
        Total
        <span className="d-inline-block float-right">
          ₹{total.toFixed(2)}
        </span>
      </li>
    </ul>
  </div>
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