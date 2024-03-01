import React from 'react';
import { Products } from '../data.js';
import { ProductView } from '../components/ProductView';
import { useParams } from 'react-router-dom';

export function View() {
  const { productId } = useParams();
  const productIdNumber = parseInt(productId);

  // Find the selected product if productId is not undefined
  const selectedProduct = productId ? Products.find((product) => product.id === productIdNumber) : null;

 
  return (
    <>
      {/* Render ProductView component with the selected product */}
      {selectedProduct ? (
        <ProductView data={selectedProduct} />
      ) : (
        <p>No product found with the specified ID.</p>
      )}
    </>
  );
}

