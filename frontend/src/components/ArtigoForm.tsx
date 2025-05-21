import React, { ChangeEvent } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { GeradorArtigoForm, EstiloArtigo, TamanhoArtigo } from '../types';

interface ArtigoFormProps {
    formData: GeradorArtigoForm;
    loading: boolean;
    onSubmit: (e: React.FormEvent) => Promise<void>;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

/**
 * Componente que renderiza o formulário de geração de artigos
 */
const ArtigoForm: React.FC<ArtigoFormProps> = ({
    formData,
    loading,
    onSubmit,
    onChange
}) => {
    const estilosArtigo: EstiloArtigo[] = ['informativo', 'narrativo', 'argumentativo'];
    const tamanhosArtigo: TamanhoArtigo[] = ['pequeno', 'medio', 'grande'];

    const renderEstiloOption = (estilo: EstiloArtigo) => {
        const labels: Record<EstiloArtigo, string> = {
            informativo: 'Informativo',
            narrativo: 'Narrativo',
            argumentativo: 'Argumentativo'
        };
        return (
            <option key={estilo} value={estilo}>
                {labels[estilo]}
            </option>
        );
    };

    const renderTamanhoOption = (tamanho: TamanhoArtigo) => {
        const labels: Record<TamanhoArtigo, string> = {
            pequeno: 'Pequeno (500 palavras)',
            medio: 'Médio (1000 palavras)',
            grande: 'Grande (2000 palavras)'
        };
        return (
            <option key={tamanho} value={tamanho}>
                {labels[tamanho]}
            </option>
        );
    };

    return (
        <Form onSubmit={onSubmit} className="needs-validation" noValidate>
            <Form.Group className="mb-3">
                <Form.Label>Tema do Artigo</Form.Label>
                <Form.Control
                    type="text"
                    name="tema"
                    value={formData.tema}
                    onChange={onChange as any}
                    placeholder="Digite o tema do artigo"
                    required
                    minLength={3}
                    maxLength={100}
                />
                <Form.Text className="text-muted">
                    Mínimo de 3 caracteres, máximo de 100
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Palavras-chave</Form.Label>
                <Form.Control
                    type="text"
                    name="palavrasChave"
                    value={formData.palavrasChave}
                    onChange={onChange as any}
                    placeholder="Digite as palavras-chave separadas por vírgula"
                    required
                />
                <Form.Text className="text-muted">
                    Separe as palavras-chave por vírgula
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Estilo do Artigo</Form.Label>
                <Form.Select
                    name="estilo"
                    value={formData.estilo}
                    onChange={onChange}
                    required
                >
                    {estilosArtigo.map(renderEstiloOption)}
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label>Tamanho do Artigo</Form.Label>
                <Form.Select
                    name="tamanho"
                    value={formData.tamanho}
                    onChange={onChange}
                    required
                >
                    {tamanhosArtigo.map(renderTamanhoOption)}
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
    );
};

export default ArtigoForm; 