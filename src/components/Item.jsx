import { Link } from "react-router-dom";

const Item = ({ id, name, image, price, addToCart }) => {
  console.log(`📌 ID de producto en Item.jsx: ${id}`); // ✅ Debugging

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow">
        <img src={image} className="card-img-top img-fluid" alt={name} style={{ height: "200px", objectFit: "cover" }} />
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="fw-bold">Precio: ${price}</p>
          <Link to={`/item/${id}`} className="btn btn-outline-dark mt-2">Ver Detalle</Link>
          <button className="btn btn-success mt-2" onClick={() => addToCart(id, name, price, image)}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
