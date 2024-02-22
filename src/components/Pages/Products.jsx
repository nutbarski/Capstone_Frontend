import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css'; // Import CSS file for styling

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product._id} className="product-item">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <p><strong>{product.name}</strong></p>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

