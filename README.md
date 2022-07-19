# Projeto Blog's API

Um projeto feito para treinar a criação de API's. Um CRUD de posts, utilizando a arquitetura MSC, e também para introduzir a utilização de um ORM (Sequelize). Seguindo os princípios REST.

Todas os usuários cadastrados têm suas senhas criptografadas utilizando a biblioteca BCrypt, e a validação de login é feita utilizando a biblioteca JWT.

Validações utilizadas nos middlewares feitas com a biblioteca JOI.

<hr></hr>

## 🛠 Habilidades
Node.js, MySQL, Arquitetura MSC, JOI, Sequelize, BCrypt, JWT...

<hr></hr>

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar variáveis de ambiente no seu .env

Um exemplo já está disponível no arquivo `.env.example`, bastando renomear para `.env` e escolher o valor das variáveis.

<hr></hr>

## Utilização

- Para clonar o projeto: `git clone git@github.com:Brendon-Lopes/project-blogs-api.git`.

- Já existe um arquivo `docker-compose.yml` (Disponibilizado pela Trybe). Bastando usar o comando `docker-compose up` para rodar o MySQL e o Node pelo Docker.

- `npm start` para criar o banco de dados, usar os migrates pelo Sequelize e iniciar a aplicação.

- Utilizar alguma Plataforma de API para utilizar os endpoints. Exemplos: Postman, Insomnia, Thunder Client...

<hr></hr>

## Diagramas

![Diagrama de relacionamentos das tabelas](tabelas-blogs-api.png)

<i> Imagem disponibilizada pela Trybe </i>

<hr></hr>

## Endpoints

- POST `/login` que deve receber no body os campos `email` e `password`.
- POST `/user` que deve receber no body os campos `displayName`, `email`, `password` e `image`.
- `A partir desse ponto todos os próximos endpoints requerem validação por token que foi gerado no login (e deve ser passado no header Authorization)`
- GET `/user` que retorna todos os usários cadastrados.
- GET `/user/:id` que retorna o usuário pertencente ao id passado por parâmetro.
- POST `/categories` que deve receber no body o campo `name` para o cadastro de uma nova categoria.
- GET `/categories` que retorna todas as categorias do banco de dados.
- POST `/post` que insere um novo post no banco de dados. Deve receber no body os campos `title`, `content` e um array `categoryIds` (contendo ids de categorias já cadastradas no banco de dados).
- GET `/post` que retorna todos os posts do banco de dados.
- GET `/post/:id` que retorna um post pelo id.
- PUT `/post/:id` que edita um post por id.
- DELETE `/post/:id` que deleta um post por id.
- DELETE `/user/me` que apago o usuário logado do banco de dados.
- GET `/post/search?q=query` que pesquisa o termo passado na URL (substituindo a palavra query) nos títulos e/ou conteúdo dos posts cadastrados no banco de dados.
