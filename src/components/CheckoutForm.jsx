import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useCart } from "../context/CartContext";

const CheckoutForm = () => {
  const { cart, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({ name: "", email: "", address: "" });
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const order = {
      buyer: formData,
      items: cart,
      total: getTotalPrice(),
      date: new Date().toISOString(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart(); // Vaciar carrito tras la compra
    } catch (error) {
      console.error("Error al procesar la compra:", error);
    }
  };

  if (orderId) {
    return (
      <div className="text-center mt-5">
        <h2>✅ Compra realizada con éxito</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold">Finalizar Compra</h2>
      <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
        <div className="mb-3">
          <label className="form-label fw-bold">Nombre</label>
          <input type="text" className="form-control" name="name" required value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Email</label>
          <input type="email" className="form-control" name="email" required value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Dirección</label>
          <input type="text" className="form-control" name="address" required value={formData.address} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary w-100">Confirmar Compra</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
