# Rick and Morty API

A REST API built with Node.js and Express that consumes the Rick and Morty public API, filters alive characters, and formats their names.

## Description

This project exposes endpoints to retrieve characters from the Rick and Morty API. It filters only alive characters and replaces spaces in their names with underscores. The project follows a layered architecture separating routes, controllers, and services.

## Technologies

- Node.js
- Express
- Jest
- Supertest

## Install dependencies
```bash
npm install
```

## Usage

Start the server:

```bash
node app.js
```

The server will run at `http://localhost:3000`.

## Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/characters | Returns all alive characters from page 1 |
| GET | /api/characters/:page | Returns alive characters from a specific page (1-42) |


## Running Tests

```bash
npm test
```
