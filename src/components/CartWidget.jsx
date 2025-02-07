import { useCart } from "../context/CartContext";

function CartWidget() {
  const { totalItems } = useCart();

  return (
    <div>
      <i className="bi bi-cart4"></i>
      {totalItems > 0 && <span className="badge bg-secondary">{totalItems}</span>}
    </div>
  );
}

export default CartWidget;
