import React from 'react';

function ItemDetail({ product }) {
  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p><strong>Precio: ${product.price}</strong></p>
      </div>
    </div>
  );
}

export default ItemDetail;
