// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Products.css';

// const Products = () => {
//     const [products, setProducts] = useState([]);
//     const [selectedProduct, setSelectedProduct] = useState(null);
//     const [isAdmin, setIsAdmin] = useState(false);
//     const [galleryImages, setGalleryImages] = useState([]);

//     useEffect(() => {
//         fetchProducts();
//         fetchGalleryImages();
//     }, []);

//     const fetchProducts = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/products');
//             setProducts(response.data);
//         } catch (error) {
//             console.error('Failed to fetch products', error);
//         }
//     };

//     const fetchGalleryImages = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/gallery');
//             setGalleryImages(response.data);
//         } catch (error) {
//             console.error('Failed to fetch gallery images', error);
//         }
//     };

//     const handleProductClick = (product) => {
//         setSelectedProduct(product);
//     };

//     const handleAdminLogin = (e) => {
//         e.preventDefault();
//         const username = e.target.username.value;
//         const password = e.target.password.value;
//         if (username === 'admin' && password === 'password') {
//             setIsAdmin(true);
//         } else {
//             alert('Invalid credentials');
//         }
//     };

//     const handleAdminLogout = () => {
//         setIsAdmin(false);
//     };

//     const handleCloseDetails = () => {
//       setSelectedProduct(null);
//     };

//     return (
//         <div className="products-container">
//             <div className="admin-controls">
//                 {isAdmin ? (
//                     <button onClick={handleAdminLogout}>Logout</button>
//                 ) : (
//                     <form onSubmit={handleAdminLogin}>
//                         <input type="text" name="username" placeholder="Username" required />
//                         <input type="password" name="password" placeholder="Password" required />
//                         <button type="submit">Admin Login</button>
//                     </form>
//                 )}
//             </div>
//             <h1>Our Products</h1>
//             <div className="products-grid">
//                 {products.map(product => (
//                     <div key={product._id} className="product-card" onClick={() => handleProductClick(product)}>
//                         <img src={product.imageUrl} alt={product.name} />
//                         <h3>{product.name}</h3>
//                     </div>
//                 ))}
//             </div>


//             {selectedProduct && (
//                 <div className="product-details">
//                     <button className="close-details" onClick={handleCloseDetails}>X</button>
//                     <h2>{selectedProduct.name}</h2>
//                     <p>{selectedProduct.description}</p>
//                 </div>
//             )}

//             <div className="standard-sizes">
//                 <h1>Standard Door Sizes</h1>
//                 <table className="standard-sizes-table">
//                     <thead>
//                         <tr>
//                             <th>Height</th>
//                             <th>Width</th>
//                             <th>Thickness</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>81"</td>
//                             <td>27"</td>
//                             <td>1 1/4"</td>
//                         </tr>
//                         <tr>
//                             <td>81"</td>
//                             <td>30"</td>
//                             <td>1 1/4"</td>
//                         </tr>
//                         <tr>
//                             <td>81"</td>
//                             <td>33"</td>
//                             <td>1 1/4"</td>
//                         </tr>
//                         <tr>
//                             <td>81"</td>
//                             <td>36"</td>
//                             <td>1 1/4"</td>
//                         </tr>
//                         <tr>
//                             <td>81"</td>
//                             <td>42"</td>
//                             <td>1 1/4"</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//             <div className="gallery-section">
//                 <h1>Gallery</h1>
//                 <div className="gallery-grid">
//                     {galleryImages.map((image, index) => (
//                         <img key={index} src={image.url} alt={`Gallery ${index}`} />
//                     ))}
//                 </div>
//             </div>
//             <button className="back-to-top" onClick={() => window.scrollTo(0, 0)}> ↑ Back to Top</button>
//         </div>
//     );
// };

// export default Products;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css';
import AdminLogin from '../Admin/AdminLogin';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchGalleryImages();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Failed to fetch products', error);
    }
  };

  const fetchGalleryImages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/gallery');
      setGalleryImages(response.data);
    } catch (error) {
      console.error('Failed to fetch gallery images', error);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleAdminLogin = () => {
    setIsAdmin(true);
    setShowLogin(false);
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
    setShowLogin(false);
  };

  return (
    <div className="products-container">
      <div className="admin-buttons">
        {isAdmin ? (
          <button onClick={handleAdminLogout}>Logout</button>
        ) : (
          <>
            <button onClick={() => setShowLogin(true)}>Admin Login</button>
          </>
        )}
      </div>
      {showLogin && <AdminLogin onLogin={handleAdminLogin} handleClose={handleCloseDetails} />}
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card" onClick={() => handleProductClick(product)}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="product-details">
          <button className="close-details" onClick={handleCloseDetails}>X</button>
          <h2>{selectedProduct.name}</h2>
          <p>{selectedProduct.description}</p>
        </div>
      )}
      <div className="standard-sizes">
        <h1>Standard Door Sizes</h1>
        <table className="standard-sizes-table">
          <thead>
            <tr>
              <th>Height</th>
              <th>Width</th>
              <th>Thickness</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>81"</td>
              <td>27"</td>
              <td>1 1/4"</td>
            </tr>
            <tr>
              <td>81"</td>
              <td>30"</td>
              <td>1 1/4"</td>
            </tr>
            <tr>
              <td>81"</td>
              <td>33"</td>
              <td>1 1/4"</td>
            </tr>
            <tr>
              <td>81"</td>
              <td>36"</td>
              <td>1 1/4"</td>
            </tr>
            <tr>
              <td>81"</td>
              <td>42"</td>
              <td>1 1/4"</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="gallery-section">
        <h1>Gallery</h1>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <img key={index} src={image.url} alt={`Gallery ${index}`} />
          ))}
        </div>
      </div>
      <button className="back-to-top" onClick={() => window.scrollTo(0, 0)}>
        ↑ Back to Top
      </button>
    </div>
  );
};

export default Products;
