import { useState } from "react";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";

const ItemDetail = ({ product }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const handleAdd = (quantity) => {
    addToCart(product, quantity);
    setAddedToCart(true); // ✅ Oculta el contador tras agregar al carrito
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card" style={{ width: "400px", padding: "20px" }}>
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body text-center">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p><strong>Precio: ${product.price}</strong></p>

          {/* ✅ Mostrar botón "Agregar al carrito" mientras no se haya agregado */}
          {!addedToCart ? (
            <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
          ) : (
            <p className="text-success fw-bold mt-2">Producto agregado al carrito ✅</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
