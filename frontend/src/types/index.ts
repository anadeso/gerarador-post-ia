export interface Artigo {
    id?: number;
    titulo: string;
    conteudo: string;
    resumo?: string;
    palavrasChave?: string;
    dataCriacao?: string;
    dataAtualizacao?: string;
}

export interface Usuario {
    id?: number;
    nome: string;
    email: string;
    senha?: string;
}

export type EstiloArtigo = 'informativo' | 'narrativo' | 'argumentativo';
export type TamanhoArtigo = 'pequeno' | 'medio' | 'grande';

export interface GeradorArtigoForm {
    tema: string;
    palavrasChave: string;
    estilo: EstiloArtigo;
    tamanho: TamanhoArtigo;
}

export interface GeradorArtigoResponse {
    sucesso: boolean;
    mensagem: string;
    artigo?: Artigo;
}

export interface AuthResponse {
    token: string;
    usuario: Usuario;
}

export interface FormControlEvent {
    target: {
        name: string;
        value: string;
    };
} 