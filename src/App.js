// src/App.js
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom"; // Adicione Navigate aqui
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";

// Importação de páginas e componentes
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Catalago from "./pages/Catalogo/Catalogo";
import Politica from "./pages/Politica/Politica";
import Contato from "./pages/Contato/Contato";
import Evento from "./pages/Evento/Evento";
import CriarEvento from "./pages/Evento/CriarEvento";
import Carrinho from "./pages/Carrinho/Carrinho";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
    return (
        <AuthProvider>
            <div className="d-flex flex-column min-vh-100">
                <Navbar />
                <div className="App flex-fill">
                    <Routes>
                        {/* Rotas públicas */}
                        <Route path="/home" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/catalogo" element={<Catalago />} />
                        <Route path="/evento/id/:idEvento" element={<Evento />} />
                        <Route path="/politica" element={<Politica />} />
                        <Route path="/contato" element={<Contato />} />
                        <Route path="/dashboard" element={<Dashboard />} />

                        {/* Rotas privadas */}
                        <Route
                            path="/criar-evento"
                            element={
                                <PrivateRoute>
                                    <CriarEvento />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/carrinho"
                            element={
                                <PrivateRoute>
                                    <Carrinho />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/dashboard"
                            element={
                                <PrivateRoute>
                                    <Dashboard />
                                </PrivateRoute>
                            }
                        />

                        {/* Rota padrão */}
                        <Route path="/" element={<Navigate to="/home" />} /> {/* Redireciona para /home */}
                    </Routes>
                </div>
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
