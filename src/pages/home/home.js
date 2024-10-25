import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

function Home() {
  return (
    <div className="Home">
      {/* Header */}
      <header className="Home-header d-flex justify-content-between align-items-center p-3">
        <div className="logo">LOGO</div>
        <nav>
          <ul className="nav">
            <li className="nav-item"><a className="nav-link" href="#catalogo">Catálogo</a></li>
            <li className="nav-item"><a className="nav-link" href="#politicas">Políticas</a></li>
            <li className="nav-item"><a className="nav-link" href="#contato">Contato</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="btn btn-outline-primary me-2">Entrar</button>
          <button className="btn btn-primary">Registrar</button>
        </div>
      </header>

      {/* Evento Destaque */}
      <section className="featured-event container my-5 p-4 bg-light rounded">
        <div className="row">
          <div className="col-md-8 event-info">
            <h2 className="mb-3">Título Evento Destaque</h2>
            <p className="text-muted">Sexta-feira 27 de Janeiro de 2025</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis diam ac orci sollicitudin hendrerit.</p>
            <button className="btn btn-dark mt-3">View Event</button>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center event-video-placeholder">
            <div className="video-icon">Play</div>
          </div>
        </div>
      </section>

      {/* Novos Eventos */}
      <section className="new-events container my-5">
        <h3 className="mb-4">Novos Eventos</h3>
        <div className="d-flex justify-content-center">
          {Array(3).fill(null).map((_, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card event-card h-100">
                <div className="card-body text-center">
                  <div className="event-image-placeholder mb-3">Image</div>
                  <h5 className="event-title">Título</h5>
                  <p className="event-date text-muted">13 de Maio de 2025</p>
                  <p>Lorem ipsum dolor sit amet, iaculis diam achfe.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Eventos Favoritos */}
      <section className="favorite-events container my-5">
        <h3 className="mb-4">Nossos Favoritos</h3>
        <div className="d-flex justify-content-center">
          {Array(3).fill(null).map((_, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card event-card h-100">
                <div className="card-body text-center">
                  <div className="event-image-placeholder mb-3">Image</div>
                  <h5 className="event-title">Título</h5>
                  <p className="event-date text-muted">25 de Outubro de 2024</p>
                  <button className="btn btn-dark mt-2">View Event</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Próximos Eventos */}
      <section className="upcoming-events container my-5">
        <h3 className="mb-4">Próximos Eventos</h3>
        <div className="d-flex justify-content-center">
          {Array(4).fill(null).map((_, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card event-card h-100">
                <div className="card-body text-center">
                  <div className="event-image-placeholder mb-3">Image</div>
                  <h5 className="event-title">Título</h5>
                  <p className="event-date text-muted">Data do Evento</p>
                  <p>Lorem ipsum dolor sit amet, iaculis diam achfe.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}

export default Home;
