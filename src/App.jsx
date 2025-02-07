import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import NavBar from "./components/NavBar";
import Home from "./components/Home"; // ✅ Nueva página de bienvenida
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Sucursal from "./components/Sucursal";
import Contacto from "./components/Contacto";
import Cart from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} /> {/* ✅ Nueva página de bienvenida */}
            <Route path="/productos" element={<ItemListContainer greeting="Nuestros Sándwiches" />} />
            <Route path="/category/:id" element={<ItemListContainer greeting="Filtrando Productos" />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/sucursal" element={<Sucursal />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
