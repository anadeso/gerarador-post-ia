import { GeradorArtigoForm, GeradorArtigoResponse } from '../types/types';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

/**
 * Serviço responsável por gerenciar operações relacionadas a artigos
 */
export class ArtigoService {
    /**
     * Gera um novo artigo com base nos parâmetros fornecidos
     * @param formData - Dados do formulário de geração de artigo
     * @returns Promise com a resposta da API
     */
    static async gerarArtigo(formData: GeradorArtigoForm): Promise<GeradorArtigoResponse> {
        try {
            const response = await fetch(`${API_URL}/api/artigos/gerar`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Erro ao gerar artigo');
            }

            return await response.json();
        } catch (error) {
            console.error('Erro ao gerar artigo:', error);
            throw error;
        }
    }
} 