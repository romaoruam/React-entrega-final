import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '/src/assets/altas-cumbres-logo.png';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Altas Cumbres" style={{ width: '150px', marginRight: '10px' }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/productos">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/clasicos">Clásicos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/premium">Premium</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/especial">Especial</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/tradicional">Tradicional</Link>
            </li>
            {/* Otros enlaces */}
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
