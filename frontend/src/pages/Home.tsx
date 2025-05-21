import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <Container>
            <Row className="text-center mb-5">
                <Col>
                    <h1 className="display-4">Gerador de Artigos com IA</h1>
                    <p className="lead">
                        Crie artigos profissionais para seu blog WordPress usando Inteligência Artificial
                    </p>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col md={4}>
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title>Geração Inteligente</Card.Title>
                            <Card.Text>
                                Utilize a potência da IA para criar artigos únicos e relevantes para seu blog.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title>Personalização</Card.Title>
                            <Card.Text>
                                Escolha o estilo, tamanho e palavras-chave para artigos sob medida.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title>Integração WordPress</Card.Title>
                            <Card.Text>
                                Publique seus artigos diretamente no WordPress com apenas um clique.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="text-center">
                <Col>
                    <Link to="/gerar">
                        <Button
                            variant="primary"
                            size="lg"
                            className="px-5"
                        >
                            Começar Agora
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Home; 