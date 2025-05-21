export const ROUTES = {
    HOME: '/',
    GERAR: '/gerar',
    ARTIGOS: '/artigos',
    LOGIN: '/login',
    REGISTRO: '/registro'
} as const;

export type RouteKey = keyof typeof ROUTES; 