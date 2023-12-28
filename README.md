# Projeto de Exemplo - Gerenciamento de Estudantes

Este é um projeto de gerenciamento de estudantes desenvolvido em Java usando Spring Boot e PostgreSQL como banco de dados. O objetivo deste projeto é oferecer operações CRUD (Create, Read, Update, Delete) para manipular informações de estudantes.

## Pré-requisitos

Certifique-se de ter as seguintes dependências instaladas:

- Java 8 ou superior
- Maven
- Docker

## Configuração

### Banco de Dados

1. Clone o repositório e navegue até o diretório do projeto.
2. Renomeie o arquivo `application.properties.example` para `application.properties`.
3. Dentro do arquivo `application.properties`, substitua os campos `jdbc:postgresql://localhost:5432/nome_do_banco`, `username` e `password` pelas credenciais do seu banco de dados PostgreSQL.

### Docker Compose

1. Certifique-se de ter o Docker instalado.
2. No diretório raiz do projeto, execute o comando `docker-compose up` para iniciar o contêiner do PostgreSQL.

## Executando a Aplicação

1. Abra o projeto em sua IDE favorita.
2. Execute a classe `WorkApplication` para iniciar a aplicação Spring Boot.

A aplicação estará disponível em `http://localhost:8080`.

## Endpoints da API

- `GET /student/` - Obtém todos os estudantes cadastrados.
- `GET /student/{id}` - Obtém um estudante pelo ID.
- `POST /student/` - Adiciona um novo estudante.
- `PUT /student/update/{id}` - Atualiza os dados de um estudante pelo ID.
- `DELETE /student/delete/{id}` - Remove um estudante pelo ID.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

- `controller` - Contém os controladores REST para lidar com as requisições HTTP.
- `entity` - Define a entidade `Student`.
- `exception` - Contém as classes de exceção personalizadas.
- `repository` - Repositório JPA para lidar com operações no banco de dados.
- `service` - Camada de serviço que implementa a lógica de negócios.

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novos recursos. Basta abrir uma issue ou enviar um pull request!
# Projeto de Gerenciamento de Estudantes

Este é um projeto de gerenciamento de estudantes usando React para o frontend e uma API em Java com Spring Boot para o backend. O projeto oferece funcionalidades para visualizar, adicionar, editar e excluir informações de estudantes.

## Tecnologias Utilizadas

- React
- React Router DOM
- Axios
- Bootstrap
- Spring Boot (Backend)
- PostgreSQL (Banco de Dados)

## Estrutura do Projeto

O projeto está dividido em diferentes partes:

### Componentes React

- `NavBar`: Componente para a barra de navegação contendo links para diferentes seções.
- `Home`: Página inicial do projeto.
- `StudentView`: Componente para visualizar todos os estudantes, permitindo também excluir e acessar detalhes de cada estudante.
- `AddStudent`: Página para adicionar novos estudantes.
- `EditStudent`: Página para editar informações de um estudante específico.
- `StudentProfile`: Página que exibe detalhes de um estudante individualmente.

### Configuração da Aplicação

- Configuração das rotas usando React Router DOM.
- Integração com uma API RESTful em Java/Spring Boot usando Axios para realizar requisições HTTP.

### Scripts Disponíveis

- `dev`: Inicia o servidor de desenvolvimento.
- `build`: Compila o código para produção.
- `lint`: Executa o linter para garantir boas práticas de codificação.
- `preview`: Inicia um servidor de visualização do código compilado.

## Como Rodar o Projeto

1. Certifique-se de ter o Node.js instalado.
2. Clone o repositório.
3. No terminal, navegue até o diretório do projeto.
4. Instale as dependências usando o comando `npm install`.
5. Execute o projeto usando o comando `npm run dev`.
6. Acesse a aplicação em `http://localhost:3000`.

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novos recursos. Basta abrir uma issue ou enviar um pull request!

---

### Observações

Lembre-se de ajustar as URLs da API para corresponder à sua configuração local, especialmente se a API estiver rodando em uma porta diferente.

Para o backend em Java/Spring Boot, certifique-se de configurar corretamente o ambiente, incluindo o banco de dados PostgreSQL e as credenciais de acesso.
