# Select Language: English, [Português](./README-PT.md)

# Project Blog's API

A project made to practice creating RESTful API's. A CRUD for blog posts, using MSC (Model, Service, Controller) architecture. Also to practice using an ORM (Sequelize).

All registered users have their passwords encrypted using the BCrypt library, and the login validation is done using the JWT library.

The validations used in the middlewares are made with the JOI library.

<hr></hr>

## 🛠 Tools / skills
Node.js, MySQL, MSC architecture, JOI, Sequelize, BCrypt, JWT...

<hr></hr>

## Environment Variables

To run this project you will need to add environment variables in your .env

A template is already available in the `.env.example` file, you only need to rename it to `.env` and change the variables values.

<hr></hr>

## Usage

- To clone the repository: `git clone git@github.com:Brendon-Lopes/project-blogs-api.git`.

- There is a `docker-compose.yml` file (Made available by Trybe). Just run `docker-compose up` to run MySQL and Node with Docker.

- `npx sequelize-cli db:create` to create the database.

- `npm start` to run the migrations with sequelize and start the application.

- Use a platform to request from the API's endpoints (e.g., Postman, Insomnia, Thunder Client...).

Note: It's necessary to first create an user/login to receive a validation token, that needs to be passed in the "Authorization" header.

<hr></hr>

## Diagrams

![Tables relations diagram](tabelas-blogs-api.png)

<i> Image made available by Trybe </i>

<hr></hr>

## Endpoints

- POST `/login` that needs the fields `email` and `password` inside the request body.
- POST `/user` that needs the fields `displayName`, `email`, `password` e `image` inside the request body.
- `From now on, every endpoint below needs validation by token (that was generated at user creation/login. And must be passed into the Authorization header)`.
- GET `/user` returns all the registered users.
- GET `/user/:id` returns the user that belongs to the id passed by parameter.
- POST `/categories` that needs the field `name` inside the request body, to create a category.
- GET `/categories` return all categories from the database.
- POST `/post` creates a new post. Must receive into the body the fields `title`, `content` and the array `categoryIds` (containing IDs of categories already existent on database).
- GET `/post` returns all the posts from the database.
- GET `/post/:id` returns a post by id.
- PUT `/post/:id` edits a post by id.
- DELETE `/post/:id` deletes a post by id.
- DELETE `/user/me` deletes the current user from the database.
- GET `/post/search?q=query` searches by the term passed in the URL (replacing the word "query") from the title and/or content from the posts in the database.

<hr></hr>

## Final considerations.

Using an ORM was harder than I expected, it's a steep learning curve at the beginning, but once you get the hang of it, it makes your life a lot easier, and makes the code more concise. In this project I had the chance to practice a lot of queries using Sequelize (JOIN, WHERE, LIKE, UPDATE, DELETE, etc.). And with each step it became easier and easier. It was also a first experience to use validations with JSON Web Token, and encrypting passwords with BCrypt. Many things learned from one project!
