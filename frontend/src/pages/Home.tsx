import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';
import { APP_TITLE, APP_DESCRIPTION, FEATURES } from '../constants/texts';
import { ROUTES } from '../config/routes';
import styles from '../styles/pages/Home.module.css';

/**
 * Componente que renderiza a página inicial
 */
const Home: React.FC = () => {
    return (
        <Container className={styles.container}>
            <Row className={styles.header}>
                <Col>
                    <h1 className={styles.title}>{APP_TITLE}</h1>
                    <p className={styles.description}>{APP_DESCRIPTION}</p>
                </Col>
            </Row>

            <Row className={styles.features}>
                {FEATURES.map(feature => (
                    <Col key={feature.id} md={4}>
                        <FeatureCard
                            title={feature.title}
                            description={feature.description}
                        />
                    </Col>
                ))}
            </Row>

            <Row className={styles.cta}>
                <Col>
                    <Link to={ROUTES.GERAR}>
                        <Button
                            variant="primary"
                            size="lg"
                            className={styles.ctaButton}
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