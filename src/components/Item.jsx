import { useState } from "react";

const Item = ({ id, name, image, price, description }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow">
        <img src={image} className="card-img-top img-fluid" alt={name} style={{ height: "200px", objectFit: "cover" }} />
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="fw-bold">Precio: ${price}</p>
          {showDetails && <p className="card-text text-muted">{description}</p>}
          <button className="btn btn-primary mt-2" onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? "Ocultar Detalle" : "Ver Detalle"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
