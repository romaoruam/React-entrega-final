import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../assets/altas-cumbres-logo.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top w-100">
      <div className="container-fluid">
        {/* LOGO */}
        <Link className="navbar-brand fw-bold" to="/">
          <img src={logo} alt="Altas Cumbres" style={{ height: "80px" }} /> {/* 🔥 Logo un poco más grande */}
        </Link>

        {/* BOTÓN RESPONSIVE */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENÚ DE NAVEGACIÓN */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/productos">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/clasicos">Clásicos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/especial">Especial</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/tradicional">Tradicional</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/premium">Premium</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sucursal">Sucursal</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>

        {/* ICONO DEL CARRITO */}
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
