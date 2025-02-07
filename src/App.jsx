import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Sucursal from "./components/Sucursal";
import Contacto from "./components/Contacto";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm"; // ✅ Nueva importación

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <div className="container-fluid"> {/* ✅ Aseguramos que ocupe todo el ancho */}
          <div className="container"> {/* ✅ El contenido ahora está alineado */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<ItemListContainer greeting="Nuestros Sándwiches" />} />
              <Route path="/category/:id" element={<ItemListContainer greeting="Filtrando Productos" />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/sucursal" element={<Sucursal />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckoutForm />} /> {/* ✅ Nueva ruta */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
