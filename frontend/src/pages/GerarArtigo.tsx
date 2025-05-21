import React, { useState } from 'react';
import { Container, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { GeradorArtigoForm } from '../types';

const GerarArtigo: React.FC = () => {
    const [formData, setFormData] = useState<GeradorArtigoForm>({
        tema: '',
        palavrasChave: '',
        estilo: 'informativo',
        tamanho: 'medio'
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [artigoGerado, setArtigoGerado] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // TODO: Implementar chamada à API
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulação
            setArtigoGerado('Artigo gerado com sucesso!');
        } catch (err) {
            setError('Erro ao gerar artigo. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <Container>
            <h1 className="text-center mb-4">Gerar Novo Artigo</h1>

            {error && (
                <Alert variant="danger" className="mb-4">
                    {error}
                </Alert>
            )}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Tema do Artigo</Form.Label>
                    <Form.Control
                        type="text"
                        name="tema"
                        value={formData.tema}
                        onChange={handleChange as any}
                        placeholder="Digite o tema do artigo"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Palavras-chave</Form.Label>
                    <Form.Control
                        type="text"
                        name="palavrasChave"
                        value={formData.palavrasChave}
                        onChange={handleChange as any}
                        placeholder="Digite as palavras-chave separadas por vírgula"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Estilo do Artigo</Form.Label>
                    <Form.Select
                        name="estilo"
                        value={formData.estilo}
                        onChange={handleChange}
                    >
                        <option value="informativo">Informativo</option>
                        <option value="narrativo">Narrativo</option>
                        <option value="argumentativo">Argumentativo</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label>Tamanho do Artigo</Form.Label>
                    <Form.Select
                        name="tamanho"
                        value={formData.tamanho}
                        onChange={handleChange}
                    >
                        <option value="pequeno">Pequeno (500 palavras)</option>
                        <option value="medio">Médio (1000 palavras)</option>
                        <option value="grande">Grande (2000 palavras)</option>
                    </Form.Select>
                </Form.Group>

                <div className="text-center">
                    <Button
                        variant="primary"
                        type="submit"
                        disabled={loading}
                        className="px-5"
                    >
                        {loading ? (
                            <>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    className="me-2"
                                />
                                Gerando...
                            </>
                        ) : (
                            'Gerar Artigo'
                        )}
                    </Button>
                </div>
            </Form>

            {artigoGerado && (
                <Alert variant="success" className="mt-4">
                    {artigoGerado}
                </Alert>
            )}
        </Container>
    );
};

export default GerarArtigo; 