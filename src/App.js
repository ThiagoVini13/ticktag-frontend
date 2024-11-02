// src/App.js
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {AuthProvider} from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importação de páginas e componentes
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/home/home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Catalago from './pages/Catalago/Catalago';
import Politica from './pages/Politica/Politica';
import Contato from './pages/Contato/Contato';
import Evento from './pages/Evento/Evento';
import CriarEvento from './pages/Evento/CriarEvento';


function App() {
    return (
        <AuthProvider>
            <Navbar/>
            <div className="App">
                <Routes>
                    {/* Rotas públicas */}
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/catalogo" element={<Catalago/>}/>
                    <Route path="/politica" element={<Politica/>}/>
                    <Route path="/contato" element={<Contato/>}/>

                    {/* Rotas privadas */}
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <Home/>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/evento/id/:idEvento"
                        element={
                            <PrivateRoute>
                                <Evento/>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/criar-evento"
                        element={
                            <PrivateRoute>
                                <CriarEvento/>
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </div>
            <Footer/>
        </AuthProvider>
    );
}

export default App;
