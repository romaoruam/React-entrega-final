import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";

const Item = ({ id, name, image, price, description, stock }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const handleAdd = (quantity) => {
    addToCart({ id, name, image, price, description, stock }, quantity);
    setAddedToCart(true);
  };

  console.log(`📌 ID de producto en Item.jsx: ${id}`); // 🔥 Verificar el ID en consola

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow">
        <img src={image} className="card-img-top img-fluid" alt={name} style={{ height: "200px", objectFit: "cover" }} />
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="fw-bold">Precio: ${price}</p>

          {/* ✅ Pasamos el ID real de Firestore */}
          <Link to={`/item/${id}`} className="btn btn-outline-primary mb-2">
            Ver Detalle
          </Link>

          {!addedToCart ? (
            <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
          ) : (
            <p className="text-success fw-bold mt-2">Producto agregado ✅</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
