import React from "react";

function Item({ producto }) {
  if (!producto) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div className="col-md-4">
      <div className="card">
        <img
          src={producto.image || "https://via.placeholder.com/150"}
          className="card-img-top"
          alt={producto.name || "Producto sin nombre"}
        />
        <div className="card-body">
          <h5 className="card-title">{producto.name || "Producto sin nombre"}</h5>
          <p className="card-text">{producto.description || "Sin descripción"}</p>
          <p className="card-text">💰 ${producto.price || "Precio no disponible"}</p>
          <button className="btn btn-primary">Ver más</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
