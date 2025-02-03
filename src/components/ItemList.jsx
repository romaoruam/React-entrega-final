import React from 'react';
import { Link } from 'react-router-dom';

function ItemList({ products }) {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4 mb-4" key={product.id}>
          <div className="card">
            <img src={product.image} alt={product.name} className="image" />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text"><strong>Precio:</strong> ${product.price}</p>
              <Link to={`/item/${product.id}`} className="btn btn-primary">
                Ver Detalle
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
