# Nest + MySQL + TypeScript example integration

1. Install dependencies via `yarn` or `npm install`
2. Run `docker-compose up -d` to start mysql or run mysql via Xampp
3. Create database schema via `npx mikro-orm schema:create -r`. This will also create the 
   database if it does not exist.
4. Run via `yarn start` or `yarn start:dev` (nodemon)
5. Example API is running on http://localhost:3000

Available routes:


```
GET     /book          finds all books
GET     /book/:id      finds book by id
POST    /book          creates new book
PUT     /book/:id      updates book by id
DELETE  /book/:id      deletes book by id
```
