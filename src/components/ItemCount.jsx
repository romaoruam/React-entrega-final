import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const handleIncrease = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="text-center">
      <div className="d-flex justify-content-center align-items-center gap-3">
        <button className="btn btn-outline-secondary" onClick={handleDecrease} disabled={quantity <= 1}>
          -
        </button>
        <span className="fw-bold">{quantity}</span>
        <button className="btn btn-outline-secondary" onClick={handleIncrease} disabled={quantity >= stock}>
          +
        </button>
      </div>
      <button className="btn btn-primary mt-2" onClick={() => onAdd(quantity)}>
        🛒 Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
