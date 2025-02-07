import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";  
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer"; // 👈 Agregamos la importación
import Sucursal from "./components/Sucursal";
import Contacto from "./components/Contacto";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Nuestros Sándwiches" />} />
            <Route path="/productos" element={<ItemListContainer greeting="Nuestros Sándwiches" />} />
            <Route path="/category/:id" element={<ItemListContainer greeting="Filtrando Productos" />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />  {/* 👈 Se agrega esta ruta */}
            <Route path="/sucursal" element={<Sucursal />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
