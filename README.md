# Gerador de Artigos WordPress com IA

Este projeto é um gerador de artigos para WordPress utilizando Inteligência Artificial, especificamente a API da OpenAI.

## Stack Tecnológica

### Backend
- Java 17+
- Spring Boot 3.x
- Spring Security
- Spring Data JPA
- SQLite (desenvolvimento)
- JWT Authentication

### Frontend
- React
- TypeScript
- Bootstrap 5
- React Bootstrap

## Requisitos

- Java 17+
- Node.js 18+
- Maven
- Yarn

## Configuração do Ambiente

1. Clone o repositório
2. Configure o ambiente Java:
   ```bash
   mvn clean install
   ```

3. Configure o ambiente Frontend:
   ```bash
   cd frontend
   yarn install
   ```

4. Configure as variáveis de ambiente:
   - Crie um arquivo `application.properties` em `src/main/resources`
   - Adicione sua chave da API OpenAI:
     ```
     openai.api.key=sua_chave_aqui
     ```

## Executando o Projeto

1. Inicie o backend:
   ```bash
   mvn spring-boot:run
   ```

2. Inicie o frontend:
   ```bash
   cd frontend
   yarn start
   ```

## Estrutura do Projeto

```
projeto/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   ├── com/seuprojeto/
│   │   │   │   │   ├── controllers/
│   │   │   │   │   ├── services/
│   │   │   │   │   ├── repositories/
│   │   │   │   │   ├── models/
│   │   │   │   │   ├── config/
│   │   │   │   │   └── security/
│   │   │   └── resources/
│   │   └── test/
│   └── pom.xml
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│   └── public/
└── docker/
``` 