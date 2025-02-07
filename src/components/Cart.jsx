import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, getTotalPrice, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container-fluid text-center mt-5">
        <div className="section-container">
          <h2>🛒 Tu carrito está vacío</h2>
          <Link to="/productos" className="btn btn-primary mt-3">Ver productos</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid mt-5">
      <div className="section-container">
        <h2>🛒 Carrito de Compras</h2>
        {cart.map((item) => (
          <div key={item.id} className="d-flex justify-content-between align-items-center border-bottom py-3">
            <img src={item.image} alt={item.name} style={{ width: "80px", borderRadius: "5px" }} />
            <span>{item.name}</span>
            <span>{item.quantity} x ${item.price}</span>
            <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </div>
        ))}
        <h4 className="mt-3">Total: ${getTotalPrice()}</h4>
        <button className="btn btn-danger mt-3" onClick={clearCart}>Vaciar Carrito</button>

        {/* ✅ Nuevo botón para finalizar la compra */}
        <Link to="/checkout" className="btn btn-success mt-3">Finalizar Compra</Link>
      </div>
    </div>
  );
};

export default Cart;
