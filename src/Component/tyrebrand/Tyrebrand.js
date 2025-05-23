

import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Siderbar/Sidebar';
import Footer from '../Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import url from "../../env.js";

const Tyrebrand = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user navigated directly to this page
    if (document.referrer === '') {
      // If the referrer is empty, redirect to home or another page
      navigate('/');
    }
  }, [navigate]);

  const [brands, setBrands] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    image: [],
    category: '', // New category state
  });
  const [imagePreviews, setImagePreviews] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('car'); // State for active tab
  const [filteredBrands, setFilteredBrands] = useState([]);

  const fetchBrands = async () => {
    try {
      setLoading(true); // Start loading
      const response = await fetch(`${url.nodeapipath}/get-tyre-brands`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBrands(data);
    } catch (error) {
      console.error('Error fetching tyre brands:', error);
      setError('Failed to load tyre brands. Please try again later.');
    } finally {
      setLoading(false); // End loading
    }
  };

  useEffect(() => {
    fetchBrands(); // Fetch brands on component mount
  }, []);

  useEffect(() => {
    // Filter brands based on active tab
    const filtered = brands.filter((brand) => brand.category === activeTab);
    setFilteredBrands(filtered);
  }, [brands, activeTab]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', formData.name);
    form.append('slug', formData.slug);
    form.append('description', formData.description);
    form.append('category', formData.category); // Append category
    for (let i = 0; i < formData.image.length; i++) {
      form.append('image', formData.image[i]);
    }

    try {
      await axios.post(`${url.nodeapipath}/add-tyre-brand`, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Added new tyre brand:', formData); // Log form data
      fetchBrands(); // Refresh the tyre brand list after adding
      resetForm(); // Reset the form
    } catch (error) {
      console.error('Error adding tyre brand:', error);
    }
  };

  // Reset form and previews
  const resetForm = () => {
    setFormData({
      name: '',
      slug: '',
      description: '',
      image: [],
      category: '', // Reset category
    });
    setImagePreviews([]);
  };

  // Handle brand deletion
  const deletetyreBrand = async (id) => {
    try {
      const response = await fetch(`${url.nodeapipath}/delete-tyre-brand/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setBrands((prevBrands) => prevBrands.filter((brand) => brand._id !== id));
      } else {
        const errorText = await response.text();
        setError(`Failed to delete brand: ${errorText}`);
      }
    } catch (error) {
      setError(`Error deleting brand: ${error.message}`);
    }
  };

  // Handle image upload
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

  const handleToggleActive = async (id, newStatus) => {
    try {
      const response = await fetch(`${url.nodeapipath}/active-tyres/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ active: newStatus }),
      });

      if (response.ok) {
        setBrands((prevBrands) =>
          prevBrands.map((brand) =>
            brand._id === id ? { ...brand, active: newStatus } : brand
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
    <body className="ec-header-fixed ec-sidebar-fixed ec-sidebar-dark ec-header-light" id="body">
      <div className="wrapper">
        <Sidebar />
        <div className="ec-page-wrapper">
          <Navbar />
          <div className="ec-content-wrapper">
            <div className="content">
              <div className="breadcrumb-wrapper breadcrumb-wrapper-2 breadcrumb-contacts">
                <h1>Tyre Brand Category</h1>
                <p className="breadcrumbs">
                  <span><a href="#">Home</a></span>
                  <span><i className="mdi mdi-chevron-right"></i></span>Tyre Brand Category
                </p>
              </div>
              <div className="row">
                {/* Form to Add a Tyre Brand */}
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
                            <label htmlFor="category" className="col-12 col-form-label">Category</label>
                            <div className="col-12">
                              <select
                                id="category"
                                name="category"
                                className="form-control"
                                value={formData.category}
                                onChange={handleChange}
                              >
                                <option value="">Select Category</option>
                                <option value="car">Car</option>
                                <option value="bike">Bike</option>
                                <option value="truck">Truck</option>
                                <option value="tractor">Tractor</option>
                                <option value="battery">Battery</option>
                                <option value="alloywheel">Alloy Wheel</option>
                                <option value="accessories">Accessories</option>
                              </select>
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

                {/* Tabs for Filtering */}
                <div className="col-xl-8 col-lg-12">
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

                  {/* Table to Display Tyre Brands */}
                  <div className="ec-cat-list card card-default">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Image</th>
                              <th>Name</th>
                              <th>Product</th>
                              <th>Total Sell</th>
                              <th>Active</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredBrands.map((brand) => (
                              <tr key={brand._id}>
                                <td className="table-cell">
                                  {brand.image.map((item, idx) => (
                                    <img key={idx} src={`https://tyres.blr1.digitaloceanspaces.com/${item}`} alt={item} className="cat-thumb" />
                                  ))}
                                </td>
                                <td>{brand.name}</td>
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
                                    <Link 
                                      to={`/tyreedit/${brand._id}`} 
                                      className="btn btn-outline-success"
                                    >
                                      Edit
                                    </Link>
                                    <button
                                      type="button"
                                      onClick={() => deletetyreBrand(brand._id)}
                                      className="btn btn-outline-danger"
                                    >
                                      Delete
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                            {filteredBrands.length === 0 && (
                              <tr>
                                <td colSpan="6" className="text-center">No brands found</td>
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
    </body>
  );
};

export default Tyrebrand;
