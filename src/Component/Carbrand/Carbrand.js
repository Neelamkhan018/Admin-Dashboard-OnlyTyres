import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Siderbar/Sidebar';
import axios from 'axios';  
import { Link, useNavigate } from 'react-router-dom';


import url from "../../env.js"


export default function Carbrand() {
  const [carBrands, setCarBrands] = useState([]);
  const [error, setError] = useState('');
  const [editId, setEditId] = useState(null);
  

  const navigate = useNavigate()



  useEffect(() => {
    // Check if the user navigated directly to this page
    if (document.referrer === '') {
        // If the referrer is empty, redirect to home or another page
        navigate('/');
    }
}, [navigate]);






  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    image: [],
  });
  const [imagePreviews, setImagePreviews] = useState([]);
  const [editMode, setEditMode] = useState(false);



  useEffect(() => {
  // Function to fetch car brands
  const fetchCarBrands = async () => {
    try {
      const response = await axios.get(`${url.nodeapipath}/get-carbrand`);
      console.log('Fetched car brands:', response.data); // Log fetched data
      setCarBrands(response.data);
    } catch (error) {
      console.error('Error fetching car brands:', error);
    }
  };

  fetchCarBrands();
},[])
 

  
useEffect(() => {
  const fetchCarBrands = async () => {
    try {
      const response = await axios.get(`${url.nodeapipath}/get-carbrands-with-model-counts`);
      setCarBrands(response.data);
    } catch (error) {
      console.error('Error fetching car brands:', error);
    }
  };

  fetchCarBrands();
}, []);




  const deleteCarBrand = async (id) => {
    try {
      await axios.delete(`${url.nodeapipath}/car-delete/${id}`);
      console.log('Deleted car brand with id:', id); // Log delete action
  
      // Update the state to remove the deleted brand
      setCarBrands((prevBrands) =>
        prevBrands.filter((brand) => brand._id !== id)
      );
    } catch (error) {
      console.error('Error deleting car brand:', error);
    }
  };
  

  // Handle input changes in the form
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const selectedImages = Array.from(files);
      setFormData({ ...formData, image: selectedImages });
      setImagePreviews(selectedImages.map(file => URL.createObjectURL(file)));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', formData.name);
    form.append('slug', formData.slug);
    form.append('description', formData.description);
    for (let i = 0; i < formData.image.length; i++) {
      form.append('image', formData.image[i]);
    }
  
    try {
      // if (editMode) {
      //   // Update car brand if in edit mode
      //   await axios.put(`${url.nodeapipath}/update-carbrand/${id}`, form, {
      //     headers: { 'Content-Type': 'multipart/form-data' },
      //   });
      if (editMode) {
        await axios.put(`${url.nodeapipath}/update-carbrand/${editId}`, form, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      
      } else {
        // Add a new car brand if not in edit mode
        await axios.post(`${url.nodeapipath}/add-carbrand`, form, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }
  
      // Fetch car brands again after the operation (add/update)
      const response = await axios.get(`${url.nodeapipath}/get-carbrand`);
      setCarBrands(response.data);
  
      // Reset form after submission
      resetForm();
    } catch (error) {
      console.error(`Error ${editMode ? 'updating' : 'adding'} car brand:`, error);
    }
  };
  

  // Reset form and previews
  const resetForm = () => {
    setFormData({
      name: '',
      slug: '',
      description: '',
      image: [],
    });
    setImagePreviews([]);
  };

  // Toggle active status
 
  const handleToggleActive = async (id, newStatus) => {
    try {
      const response = await fetch(`${url.nodeapipath}/active-carbrand/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ active: newStatus }),
      });
  
      if (response.ok) {
        setCarBrands((prevBrands) =>
          prevBrands.map((brand) =>
            brand._id === id ? { ...brand, active: newStatus } : brand
          )
        );
        
      } else {
        const errorText = await response.text();
        setError(`Failed to update brand status: ${errorText}`);
      }
    } catch (error) {
      setError(`Error updating brand status: ${error.message}`);
    }
  };

  const handleEdit = (brand) => {
    setEditMode(true);
    setEditId(brand._id);
    setFormData({
      name: brand.name,
      slug: brand.slug,
      description: brand.description,
      image: [], // You might want to handle images differently
    });
  };

  return (
    <body className="ec-header-fixed ec-sidebar-fixed ec-sidebar-dark ec-header-light" id="body">
      <div className="wrapper">
        <Sidebar />
        <div className="ec-page-wrapper">
          <Navbar />
          <div className="ec-content-wrapper">
            <div className="content">
              <div className="breadcrumb-wrapper breadcrumb-wrapper-2 breadcrumb-contacts">
                <h1>Car Brand Category</h1>
                <p className="breadcrumbs">
                  <span><a href="#">Home</a></span>
                  <span><i className="mdi mdi-chevron-right"></i></span>Car Brand Category
                </p>
              </div>
              <div className="row">
                {/* Form to Add a Car Brand */}
                <div className="col-xl-4 col-lg-12">
                  <div className="ec-cat-list card card-default mb-24px">
                    <div className="card-body">
                      <div className="ec-cat-form ec-vendor-uploads">
                        <h4>Add Category</h4>
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
                              <div className="image-previews">
                                {imagePreviews.map((url, idx) => (
                                  <img key={idx} src={url} alt="preview" className="preview-img" />
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-12">
                              <button type="submit" className="btn btn-primary">Add</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Table to Display Car Brands */}
                <div className="col-xl-8 col-lg-12">
                  <div className="ec-cat-list card card-default">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Image</th>
                              <th>Name</th>
                              <th>Model</th>
                              <th>Product</th>
                              <th>Total Sell</th>
                              <th>Active</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {carBrands.map((brand) => (
                              <tr key={brand._id}>
                               

    <td className="table-cell">
                {brand.image.map((item, idx) => (
                  <img key={idx} src={`https://tyres.blr1.digitaloceanspaces.com/${item}`} alt={item} className="cat-thumb" />
                ))}
              </td>
                                <td>{brand.name}</td>
                                <td>{brand.modelCount}</td>
                                <td>{brand.product}</td>
                                <td>{brand.Totalsell}</td>
                                <td>
                              <input
                                type="checkbox"
                                checked={brand.active}
                                onChange={() => handleToggleActive(brand._id, !brand.active)}
                              />
                            </td>
                                <td>
                                  <div className="btn-group">
                                    {/* <Link 
                                       to={`/caredit/${brand._id}`} 
                                      className="btn btn-outline-success"
                                    >
                                      Edit
                                    </Link> */}
                                    <Link 
  to={`/caredit/${brand._id}`} 
  className="btn btn-outline-success"
  onClick={() => handleEdit(brand)} // Call handleEdit when clicking edit
>
  Edit
</Link>
                                    <button

                                   
                                      onClick={()=>{navigate("/carbrand-model",{state:{brandid:brand._id}})}}
                                       
                                      
                                      className="btn btn-outline-success"
                                    >
                                      Add Model
                                    </button>

                                    <button
                                      type="button"
                                      onClick={() => deleteCarBrand(brand._id)}
                                      className="btn btn-outline-danger"
                                    >
                                      Delete
                                    </button>
                                  </div>
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
    </body>
  );
}
