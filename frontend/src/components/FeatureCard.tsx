import React from 'react';
import { Card } from 'react-bootstrap';
import styles from '../styles/components/FeatureCard.module.css';

interface FeatureCardProps {
    title: string;
    description: string;
}

/**
 * Componente que renderiza um card de funcionalidade
 * @param title - Título da funcionalidade
 * @param description - Descrição da funcionalidade
 */
const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
    return (
        <Card className={styles.featureCard}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default FeatureCard; 