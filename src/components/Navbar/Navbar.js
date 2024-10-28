import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="Home-header d-flex justify-content-between align-items-center p-3 border">
            <div className="logo">LOGO</div>
            <nav>
              <ul className="nav">
                <li className="nav-item"><Link to="/catalogo" className="nav-link" >Catálogo</Link></li>
                <li className="nav-item"><Link to="/politica" className="nav-link" >Políticas</Link></li>
                <li className="nav-item"><Link to="/contato" className="nav-link" >Contato</Link></li>
              </ul>
            </nav>
            <div className="auth-buttons">
              <button className="btn btn-outline-primary me-2">Entrar</button>
              <button className="btn btn-primary">Registrar</button>
            </div>
    </header>
  );
}

export default Navbar;