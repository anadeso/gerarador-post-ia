import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const NavbarComponent: React.FC = () => {
    const navigate = useNavigate();
    const isAuthenticated = false; // TODO: Implementar autenticação

    const handleLogout = () => {
        // TODO: Implementar logout
        navigate('/login');
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand as={Link} to="/">Gerador de Artigos IA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/gerar">Gerar Artigo</Nav.Link>
                        <Nav.Link as={Link} to="/artigos">Meus Artigos</Nav.Link>
                    </Nav>
                    <Nav>
                        {isAuthenticated ? (
                            <Button variant="outline-light" onClick={handleLogout}>
                                Sair
                            </Button>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login">Entrar</Nav.Link>
                                <Nav.Link as={Link} to="/registro">Registrar</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent; 