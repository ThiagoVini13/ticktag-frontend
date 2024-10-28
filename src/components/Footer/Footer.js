import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

function Footer() {
  return (
    <footer className="container text-center py-4">
        <div className="d-flex justify-content-center align-items-center mb-3">
            <div className="footer-logo">LOGO</div>
        </div>
        <div className="d-flex justify-content-center align-items-center mb-3 social-icons">
            <div className="mx-2">X</div>
            <div className="mx-2">@</div>
        </div>
        <div className="footer-links">
            <a href="#sobre" className="mx-2">Sobre</a>
            <a href="#contato" className="mx-2">Contato</a>
            <a href="#politicas" className="mx-2">Políticas</a>
        </div>
    </footer>
  );
}
export default Footer;