import { useCart } from "../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useCart();

  return (
    <div className="position-relative" style={{ width: "40px", height: "40px" }}> {/* 🔥 Tamaño fijo */}
      <i className="bi bi-cart4 fs-3"></i> {/* 🔥 Tamaño fijo del icono */}
      {getTotalQuantity() > 0 && (
        <span className="badge bg-danger position-absolute top-0 start-100 translate-middle" style={{ fontSize: "14px", minWidth: "20px", minHeight: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          {getTotalQuantity()}
        </span>
      )}
    </div>
  );
};

export default CartWidget;
