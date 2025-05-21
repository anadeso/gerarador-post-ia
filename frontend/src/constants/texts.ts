export const APP_TITLE = 'Gerador de Artigos com IA';
export const APP_DESCRIPTION = 'Crie artigos profissionais para seu blog WordPress usando Inteligência Artificial';

export const FEATURES = [
    {
        id: 'geracao',
        title: 'Geração Inteligente',
        description: 'Utilize a potência da IA para criar artigos únicos e relevantes para seu blog.'
    },
    {
        id: 'personalizacao',
        title: 'Personalização',
        description: 'Escolha o estilo, tamanho e palavras-chave para artigos sob medida.'
    },
    {
        id: 'integracao',
        title: 'Integração WordPress',
        description: 'Publique seus artigos diretamente no WordPress com apenas um clique.'
    }
];

export const FORM_LABELS = {
    TEMA: 'Tema do Artigo',
    PALAVRAS_CHAVE: 'Palavras-chave',
    ESTILO: 'Estilo do Artigo',
    TAMANHO: 'Tamanho do Artigo',
    GERAR: 'Gerar Artigo',
    GERANDO: 'Gerando...'
};

export const FORM_PLACEHOLDERS = {
    TEMA: 'Digite o tema do artigo',
    PALAVRAS_CHAVE: 'Digite as palavras-chave separadas por vírgula'
};

export const FORM_HELP = {
    TEMA: 'Mínimo de 3 caracteres, máximo de 100',
    PALAVRAS_CHAVE: 'Separe as palavras-chave por vírgula'
};

export const ESTILOS_ARTIGO = {
    informativo: 'Informativo',
    narrativo: 'Narrativo',
    argumentativo: 'Argumentativo'
};

export const TAMANHOS_ARTIGO = {
    pequeno: 'Pequeno (500 palavras)',
    medio: 'Médio (1000 palavras)',
    grande: 'Grande (2000 palavras)'
};

export const MESSAGES = {
    ERRO_GERACAO: 'Erro ao gerar artigo. Por favor, tente novamente.',
    SUCESSO_GERACAO: 'Artigo Gerado com Sucesso!'
}; 