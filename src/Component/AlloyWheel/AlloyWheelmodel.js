import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../Siderbar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import url from "../../env.js";

const AlloyWheelModel = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    console.log('State:', state); // Debugging line
    if (!state || !state.brandid) {
      console.error('Brand ID is not available');
      navigate('/'); // Redirect to home or another page
    }
  }, [navigate, state]);

  const [alloyWheelModels, setAlloyWheelModels] = useState([]);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    image: []
  });
  const [imagePreviews, setImagePreviews] = useState([]);

  const fetchAlloyWheelModels = async () => {
    if (!state || !state.brandid) {
      console.error('Brand ID is not available');
      return; // Exit the function if brandid is not available
    }
    try {
      const response = await fetch(`${url.nodeapipath}/get-alloywheelmodel?brandid=${state.brandid}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setAlloyWheelModels(data);
    } catch (error) {
      console.error('Error fetching alloy wheel models:', error);
    }
  };

  useEffect(() => {
    fetchAlloyWheelModels();
  }, [state]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, [name]: files });
      setImagePreviews(Array.from(files).map(file => URL.createObjectURL(file)));
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
    form.append('brandid', state.brandid);

    try {
      const response = await fetch(`${url.nodeapipath}/add-alloywheelmodel`, {
        method: 'POST',
        body: form,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response from server:', errorData);
        throw new Error(errorData.message || 'Failed to submit the form');
      }

      const data = await response.json();
      console.log('Form submitted successfully:', data);
      fetchAlloyWheelModels();
      resetForm();
    } catch (error) {
      console.error('Error submitting the form:', error.message);
      alert(`Error: ${error.message}`);
    }
  };

  const handleToggleActive = async (id, newStatus) => {
    try {
      const response = await fetch(`${url.nodeapipath}/active-alloywheelmodel/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ active: newStatus }),
      });

      if (response.ok) {
        setAlloyWheelModels((prevModel) =>
          prevModel.map((model) =>
            model._id === id ? { ...model, active: newStatus } : model
          )
        );
      } else {
        const errorText = await response.text();
        setError(`Failed to update model status: ${errorText}`);
      }
    } catch (error) {
      setError(`Error updating model status: ${error.message}`);
    }
  };

  const deleteAlloyWheelModel = async (id) => {
    try {
      const response = await fetch(`${url.nodeapipath}/delete-alloywheelmodel/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Network response was not ok');
      fetchAlloyWheelModels();
    } catch (error) {
      console.error('Error deleting alloy wheel model:', error);
    }
};

const resetForm = () => {
  setFormData({ name: '', slug: '', description: '', image: [] });
  setImagePreviews([]);
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
              <h1>Alloy Wheel Model Category</h1>
              <p className="breadcrumbs">
                <span><a href="#">Home</a></span>
                <span><i className="mdi mdi-chevron-right"></i></span>Alloy Wheel Model Category
              </p>
            </div>
            <div className="row">
              {/* Form to Add an Alloy Wheel Model */}
              <div className="col-xl-4 col-lg-12">
                <div className="ec-cat-list card card-default mb-24px">
                  <div className="card-body">
                    <div className="ec-cat-form ec-vendor-uploads">
                      <h4>Add Model</h4>
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
                            <button type="submit" className="btn btn-primary">
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              {/* Table to Display Alloy Wheel Models */}
              <div className="col-xl-8 col-lg-12">
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
                          {alloyWheelModels.map((model) => (
                            <tr key={model._id}>
                              <td className="table-cell">
                                {model.image.map((item, idx) => (
                                  // <img key={idx} src={`${url.nodeapipath}/uploads/${item}`} alt={item} className="cat-thumb" />
                  <img key={idx} src={`https://tyres.blr1.digitaloceanspaces.com/${item}`} alt={item} className="cat-thumb" />

                                ))}
                                </td>
                                <td>{model.name}</td>
                                <td>{model.product}</td>
                                <td>{model.totalsell}</td>
                                <td>
                                  <input
                                    type="checkbox"
                                    checked={model.active}
                                    onChange={() => handleToggleActive(model._id, !model.active)}
                                  />
                                </td>
                                <td>
                                  <div className="btn-group">
                                    <Link
                                      to={`/AlloyWheelmodeledit/${model._id}`}
                                      state={{ brandid: state.brandid }} // Pass brandid here
                                      className="btn btn-outline-success"
                                    >
                                      Edit
                                    </Link>

                                    <button
                                      type="button"
                                      className="btn btn-outline-danger"
                                      onClick={() => deleteAlloyWheelModel(model._id)}
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
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlloyWheelModel;