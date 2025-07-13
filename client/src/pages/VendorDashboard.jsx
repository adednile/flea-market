import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import ProductCard from "../components/ProductCard";
import VendorProfile from "../components/VendorProfile";
import "../styles/VendorDashboard.css";
import { useDropzone } from 'react-dropzone';

function VendorDashboard() {
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);
  const [formData, setFormData] = useState({ name: '', price: '', description: '', image: '', alt: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem('products');
    if (saved) setProducts(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData(prev => ({ ...prev, image: reader.result, alt: `Image of ${formData.name}` }));
      };
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'image/*': [] } });

  const openAddModal = () => {
    setIsEditing(false);
    setFormData({ name: '', price: '', description: '', image: '', alt: '' });
    setModalOpen(true);
  };

  const openEditModal = (product) => {
    setIsEditing(true);
    setCurrentProductId(product.id);
    setFormData(product);
    setModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const product = {
      ...formData,
      id: isEditing ? currentProductId : Date.now(),
    };

    setProducts(prev => {
      if (isEditing) {
        return prev.map(p => p.id === currentProductId ? product : p);
      } else {
        return [...prev, product];
      }
    });

    setModalOpen(false);
    setFormData({ name: '', price: '', description: '', image: '', alt: '' });
    setIsEditing(false);
  };

  const deleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(prev => prev.filter(p => p.id !== id));
    }
  };

  return (
    <div className="app">
      <header className="site-header">
        <div className="container">
          <div className="branding">
            <h1 className="site-title">Flea Market</h1>
            <p className="site-tagline">Connecting vendors with potential customers</p>
            <span className="vendor-welcome">Welcome, Vendor!</span>
          </div>
          <div className="logout-container">
            <button className="btn btn-danger" onClick={() => navigate("/vendor-login")}>Logout</button>
          </div>
        </div>
      </header>

      <main>
        <div className="container welcome">
          <section className="dashboard-header">
            <h2>My Products</h2>
            <button className="btn btn-danger add-product" onClick={openAddModal}>+ Add Product</button>
          </section>

          <section className="product-grid">
            {products.map(product => (
              <article className="product-card" key={product.id}>
                <img src={product.image} alt={product.alt} />
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <div className="card-actions">
                    <button className="edit-btn" onClick={() => openEditModal(product)}>Edit</button>
                    <button className="delete-btn" onClick={() => deleteProduct(product.id)}>Delete</button>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>

      {modalOpen && (
        <div className="modal" onClick={(e) => e.target.classList.contains('modal') && setModalOpen(false)}>
          <div className="modal-content">
            <div className="modal-header">
              <h3>{isEditing ? 'Edit Product' : 'Add New Product'}</h3>
              <span className="close-modal" onClick={() => setModalOpen(false)}>&times;</span>
            </div>

            <form onSubmit={handleFormSubmit} className="modal-body">
              <div className="form-group">
                <label>Product Name</label>
                <input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input type="text" value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })} required />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })}></textarea>
              </div>

              <div {...getRootProps({ className: `dropzone${isDragActive ? ' hover' : ''}` })}>
                <input {...getInputProps()} />
                <p>Drag and drop product image here, or click to select</p>
              </div>

              {formData.image && (
                <div className="preview-item">
                  <img src={formData.image} alt="Preview" />
                  <p>Preview</p>
                </div>
              )}

              <div className="modal-footer">
                <button type="submit" className="btn btn-danger">{isEditing ? 'Update Product' : 'Save Product'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default VendorDashboard;