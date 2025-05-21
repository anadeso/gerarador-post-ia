#!/bin/bash

# Instalar dependências
yarn install

# Instalar tipos do TypeScript
yarn add -D @types/react @types/react-dom @types/node

# Criar diretórios necessários
mkdir -p public/assets

# Copiar arquivos estáticos
cp ../assets/* public/assets/ 2>/dev/null || :

echo "Configuração concluída!" 