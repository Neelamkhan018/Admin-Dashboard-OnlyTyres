// import React, { useState, useEffect } from 'react';
// import Footer from '../Footer/Footer';
// import Navbar from '../Navbar/Navbar';
// import Sidebar from '../Siderbar/Sidebar';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';


// import url from "../../env.js"



// export default function TractorModelEdit() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: '',
//     slug: '',
//     description: '',
//     image: [],
//   });

//   const [imagePreviews, setImagePreviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTractorModelDetails = async () => {
//       try {
//         const response = await axios.get(`${url.nodeapipath}/get-Tractormodel/${id}`);
//         const model = response.data;

//         setFormData({
//           name: model.name || '',
//           slug: model.slug || '',
//           description: model.description || '',
//           image: [],
//         });

//         setImagePreviews(model.image.map(img => `${url.nodeapipath}/uploads/${img}`));
//       } catch (error) {
//         setError('Error fetching tractor model details. Please try again later.');
//         console.error('Error fetching tractor model details:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTractorModelDetails();
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'image') {
//       const selectedImages = Array.from(files);
//       setFormData(prevFormData => ({
//         ...prevFormData,
//         image: selectedImages
//       }));
//       setImagePreviews(selectedImages.map(file => URL.createObjectURL(file)));
//     } else {
//       setFormData(prevFormData => ({
//         ...prevFormData,
//         [name]: value
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     data.append('name', formData.name);
//     data.append('slug', formData.slug);
//     data.append('description', formData.description);
//     formData.image.forEach(file => data.append('image', file));

//     try {
//       const response = await axios.put(`${url.nodeapipath}/update-Tractormodel/${id}`, data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       console.log('Update successful:', response.data);

//       navigate('/Tractormodel'); // Redirect to the tractor model list
//     } catch (error) {
//       console.error('Error updating tractor model:', error);
//     }
//   };

//   return (
//     <div className="ec-header-fixed ec-sidebar-fixed ec-sidebar-dark ec-header-light" id="body">
//       <div className="wrapper">
//         <Sidebar />
//         <div className="ec-page-wrapper">
//           <Navbar />
//           <div className="ec-content-wrapper">
//             <div className="content">
//               <div className="breadcrumb-wrapper breadcrumb-wrapper-2 breadcrumb-contacts">
//                 <h1>Edit Tractor Model</h1>
//                 <p className="breadcrumbs">
//                   <span><a href="#">Home</a></span>
//                   <span><i className="mdi mdi-chevron-right"></i></span>Edit Tractor Model
//                 </p>
//               </div>
//               <div className="row">
//                 <div className="col-xl-4 col-lg-12">
//                   <div className="ec-cat-list card card-default mb-24px">
//                     <div className="card-body">
//                       <div className="ec-cat-form ec-vendor-uploads">
//                         <h4>Edit Model</h4>
//                         {error && <p className="text-danger">{error}</p>}
//                         {!error && (
//                           <form onSubmit={handleSubmit}>
//                             <div className="form-group row">
//                               <label htmlFor="name" className="col-12 col-form-label">Name</label>
//                               <div className="col-12">
//                                 <input
//                                   id="name"
//                                   name="name"
//                                   className="form-control here slug-title"
//                                   type="text"
//                                   value={formData.name}
//                                   onChange={handleChange}
//                                 />
//                               </div>
//                             </div>

//                             <div className="form-group row">
//                               <label htmlFor="slug" className="col-12 col-form-label">Slug</label>
//                               <div className="col-12">
//                                 <input
//                                   id="slug"
//                                   name="slug"
//                                   className="form-control here set-slug"
//                                   type="text"
//                                   value={formData.slug}
//                                   onChange={handleChange}
//                                 />
//                                 <small>
//                                   The “slug” is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens.
//                                 </small>
//                               </div>
//                             </div>

//                             <div className="form-group row">
//                               <label className="col-12 col-form-label">Description</label>
//                               <div className="col-12">
//                                 <textarea
//                                   id="description"
//                                   name="description"
//                                   cols="40"
//                                   rows="2"
//                                   className="form-control"
//                                   value={formData.description}
//                                   onChange={handleChange}
//                                 />
//                               </div>
//                             </div>

//                             <div className="form-group row">
//                               <label className="col-12 col-form-label">Upload Images</label>
//                               <div className="col-12">
//                                 <input
//                                   type="file"
//                                   name="image"
//                                   className="form-control"
//                                   multiple
//                                   onChange={handleChange}
//                                 />
//                                 <div className="image-previews mt-3">
//                                   {imagePreviews.map((url, idx) => (
//                                     <img key={idx} src={url} alt="preview" className="preview-img img-thumbnail" />
//                                   ))}
//                                 </div>
//                               </div>
//                             </div>

//                             <div className="row">
//                               <div className="col-12">
//                                 <button type="submit" className="btn btn-primary">Update Model</button>
//                               </div>
//                             </div>
//                           </form>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <Footer />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Siderbar/Sidebar';
import axios from 'axios';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import url from "../../env.js";

export default function TractorModelEdit() {
  const { id } = useParams();
  const { state } = useLocation(); // Destructure state from useLocation
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    image: [],
  });

  const [imagePreviews, setImagePreviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTractorModelDetails = async () => {
      try {
        const response = await axios.get(`${url.nodeapipath}/get-Tractormodel/${id}`);
        const model = response.data;

        setFormData({
          name: model.name || '',
          slug: model.slug || '',
          description: model.description || '',
          image: [],
        });

        setImagePreviews(model.image.map(img => `${url.nodeapipath}/uploads/${img}`));
      } catch (error) {
        setError('Error fetching tractor model details. Please try again later.');
        console.error('Error fetching tractor model details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTractorModelDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const selectedImages = Array.from(files);
      setFormData(prevFormData => ({
        ...prevFormData,
        image: selectedImages
      }));
      setImagePreviews(selectedImages.map(file => URL.createObjectURL(file)));
    } else {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if state and brandid are available
    if (!state || !state.brandid) {
      console.error('Brand ID is not available');
      setError('Brand ID is not available. Please navigate back and try again.');
      return; // Exit the function if brandid is not available
    }

    const data = new FormData();
    data.append('name', formData.name);
    data.append('slug', formData.slug);
    data.append('description', formData.description);
    formData.image.forEach(file => data.append('image', file));
    data.append('brandid', state.brandid); // Append brandid to the form data

    try {
      const response = await axios.put(`${url.nodeapipath}/update-Tractormodel/${id}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Update successful:', response.data);
      navigate('/Tractormodel', { state: { brandid: state.brandid } }); // Redirect to the tractor model list with brandid
    } catch (error) {
      console.error('Error updating tractor model:', error);
      setError('Error updating tractor model. Please try again later.');
    }
  };

  return (
    <div className="ec-header-fixed ec-sidebar-fixed ec-sidebar-dark ec-header-light" id="body">
      <div className="wrapper">
        <Sidebar />
        <div className="ec-page-wrapper">
          <Navbar />
          <div className="ec-content-wrapper">
            <div className="content">
              <div className="breadcrumb-wrapper breadcrumb-wrapper-2 breadcrumb-contacts">
                <h1>Edit Tractor Model</h1>
                <p className="breadcrumbs">
                  <span><a href="#">Home</a></span>
                  <span><i className="mdi mdi-chevron-right"></i></span>Edit Tractor Model
                </p>
              </div>
              <div className="row">
                <div className="col-xl-4 col-lg-12">
                  <div className="ec-cat-list card card-default mb-24px">
                    <div className="card-body">
                      <div className="ec-cat-form ec-vendor-uploads">
                        <h4>Edit Model</h4>
                        {error && <p className="text-danger">{error}</p>}
                        {!error && (
                           <form onSubmit={handleSubmit}>
                           <div className="form-group row">
                             <label htmlFor="name" className="col-12 col-form-label">Name</label>
                             <div className="col-12">
                               <input
                                 id="name"
                                 name="name"
                                 className="form-control here slug-title"
                                 type="text"
                                 value={formData.name}
                                 onChange={handleChange}
                               />
                             </div>
                           </div>

                           <div className="form-group row">
                             <label htmlFor="slug" className="col-12 col-form-label">Slug</label>
                             <div className="col-12">
                               <input
                                 id="slug"
                                 name="slug"
                                 className="form-control here set-slug"
                                 type="text"
                                 value={formData.slug}
                                 onChange={handleChange}
                               />
                               <small>
                                 The “slug” is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens.
                               </small>
                             </div>
                           </div>

                           <div className="form-group row">
                             <label className="col-12 col-form-label">Description</label>
                             <div className="col-12">
                               <textarea
                                 id="description"
                                 name="description"
                                 cols="40"
                                 rows="2"
                                 className="form-control"
                                 value={formData.description}
                                 onChange={handleChange}
                               />
                             </div>
                           </div>

                           <div className="form-group row">
                             <label className="col-12 col-form-label">Upload Images</label>
                             <div className="col-12">
                               <input
                                 type="file"
                                 name="image"
                                 className="form-control"
                                 multiple
                                 onChange={handleChange}
                               />
                               <div className="image-previews mt-3">
                                 {imagePreviews.map((url, idx) => (
                                   <img key={idx} src={url} alt="preview" className="preview-img img-thumbnail" />
                                 ))}
                               </div>
                             </div>
                           </div>

                           <div className="row">
                             <div className="col-12">
                               <button type="submit" className="btn btn-primary">Update Model</button>
                             </div>
                           </div>
                         </form>
                       )}
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
   </div>
 );
}