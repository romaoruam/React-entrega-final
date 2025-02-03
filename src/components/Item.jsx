import React from 'react';
import { Link } from 'react-router-dom';

function Item({ product }) {
  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p><strong>Precio: ${product.price.toFixed(2)}</strong></p>
        <Link to={`/item/${product.id}`} className="btn btn-primary">Ver Detalle</Link>
      </div>
    </div>
  );
}

export default Item;
