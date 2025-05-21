import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import Home from './pages/Home';
import GerarArtigo from './pages/GerarArtigo';

const App: React.FC = () => {
    return (
        <Router>
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gerar" element={<GerarArtigo />} />
                {/* TODO: Adicionar outras rotas */}
            </Routes>
        </Router>
    );
};

export default App; 