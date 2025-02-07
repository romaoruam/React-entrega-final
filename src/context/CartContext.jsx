import { createContext, useContext, useState } from "react";

// 🔥 Crear contexto del carrito
const CartContext = createContext();

// 🔥 Hook para usar el contexto más fácil
export const useCart = () => useContext(CartContext);

// 🔥 Proveedor del carrito (Envuelve toda la app)
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Estado del carrito

  // ✅ Agregar producto al carrito
  const addToCart = (product, quantity) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  // ✅ Eliminar producto del carrito
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // ✅ Vaciar carrito
  const clearCart = () => {
    setCart([]);
  };

  // ✅ Obtener cantidad total de productos
  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // ✅ Obtener precio total del carrito
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, getTotalQuantity, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
