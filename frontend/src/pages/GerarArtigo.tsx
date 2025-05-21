import React, { useState, useCallback, ChangeEvent } from 'react';
import { Container, Alert } from 'react-bootstrap';
import { GeradorArtigoForm, GeradorArtigoResponse } from '../types/types';
import { ArtigoService } from '../services/artigoService';
import ArtigoForm from '../components/ArtigoForm';

/**
 * Componente principal para geração de artigos
 * Gerencia o estado do formulário e a comunicação com a API
 */
const GerarArtigo: React.FC = () => {
    const [formData, setFormData] = useState<GeradorArtigoForm>({
        tema: '',
        palavrasChave: '',
        estilo: 'informativo',
        tamanho: 'medio'
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [artigoGerado, setArtigoGerado] = useState<GeradorArtigoResponse | null>(null);

    /**
     * Manipula as mudanças nos campos do formulário
     */
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }, []);

    /**
     * Manipula o envio do formulário
     */
    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setArtigoGerado(null);

        try {
            const response = await ArtigoService.gerarArtigo(formData);
            setArtigoGerado(response);
        } catch (err) {
            setError('Erro ao gerar artigo. Por favor, tente novamente.');
            console.error('Erro ao gerar artigo:', err);
        } finally {
            setLoading(false);
        }
    }, [formData]);

    return (
        <Container className="py-4">
            <h1 className="text-center mb-4">Gerar Novo Artigo</h1>

            {error && (
                <Alert variant="danger" className="mb-4" dismissible onClose={() => setError(null)}>
                    {error}
                </Alert>
            )}

            <ArtigoForm
                formData={formData}
                loading={loading}
                onSubmit={handleSubmit}
                onChange={handleChange}
            />

            {artigoGerado?.sucesso && (
                <Alert variant="success" className="mt-4">
                    <h4 className="alert-heading">Artigo Gerado com Sucesso!</h4>
                    <p>{artigoGerado.mensagem}</p>
                    {artigoGerado.artigo && (
                        <div className="mt-3">
                            <h5>{artigoGerado.artigo.titulo}</h5>
                            <p className="mb-0">{artigoGerado.artigo.resumo}</p>
                        </div>
                    )}
                </Alert>
            )}
        </Container>
    );
};

export default GerarArtigo; 