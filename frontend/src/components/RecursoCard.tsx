import React from 'react';
import { Card } from 'react-bootstrap';
import styles from '../styles/components/recurso-card.module.css';

interface RecursoCardProps {
    title: string;
    description: string;
}

/**
 * Componente que renderiza um card de recurso do sistema
 * @param title - Título do recurso
 * @param description - Descrição do recurso
 */
const RecursoCard: React.FC<RecursoCardProps> = ({ title, description }) => {
    return (
        <Card className={styles.card}>
            <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.cardTitle}>{title}</Card.Title>
                <Card.Text className={styles.cardDescription}>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default RecursoCard; 