import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Sucursal from "./components/Sucursal";  
import Contacto from "./components/Contacto";  

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <div className="welcome-message">
                <h1 className="fw-bold">¡Bienvenidos a Altas Cumbres!</h1>
                <p className="lead">
                  La mejor selección de sándwiches de miga con ingredientes frescos y de calidad.
                </p>
                <p>Explora nuestras categorías y encuentra tu favorito.</p>
              </div>
            }
          />
          <Route path="/productos" element={<ItemListContainer greeting="Nuestros Sándwiches" />} />
          <Route path="/category/:id" element={<ItemListContainer greeting="Filtrando Productos" />} />
          <Route path="/sucursal" element={<Sucursal />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
