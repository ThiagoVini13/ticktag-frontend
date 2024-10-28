import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import { Routes, Route } from 'react-router-dom';
import Catalago from './pages/Catalago/Catalago.js';
import Politica from './pages/Politica/Politica.js';
import Contato from './pages/Contato/Contato.js';



function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalago />} />
          <Route path="/politica" element={<Politica />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      <Footer/>
    </div>
);
}

export default App;
