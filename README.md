

```markdown
# Book Management REST API

A simple REST API for managing a collection of books, built with Node.js and Express.

---

## Features

- **CRUD Operations:** Create, Read, Update, and Delete books.
- **In-Memory Storage:** Books are stored in memory (not persisted between server restarts).
- **Robust Error Handling:** Clear error messages and appropriate HTTP status codes.
- **Input Validation:** Ensures required fields and data types are correct.

---

## Installation

1. **Clone the repository:**
   ```
   git clone 
   cd book-api
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Start the server:**
   ```
   node app.js
   ```

---

## API Endpoints

| Endpoint            | Method | Description                      |
|---------------------|--------|----------------------------------|
| `/books`            | GET    | Get all books                    |
| `/books/:id`        | GET    | Get a book by ID                 |
| `/books`            | POST   | Add a new book                   |
| `/books/:id`        | PUT    | Update a book by ID              |
| `/books/:id`        | DELETE | Delete a book by ID              |

---

## Usage Examples

### Get All Books
```
curl http://localhost:3000/books
```

### Get a Book by ID
```
curl http://localhost:3000/books/1
```

### Add a New Book
```
curl -X POST http://localhost:3000/books \
  -H "Content-Type: application/json" \
  -d '{"title":"Harry Potter","author":"J.K. Rowling"}'
```

### Update a Book by ID
```
curl -X PUT http://localhost:3000/books/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"New Title","author":"New Author"}'
```

### Delete a Book by ID
```
curl -X DELETE http://localhost:3000/books/1
```

---

## Error Handling

- **400 Bad Request:** Invalid input or missing required fields.
- **404 Not Found:** Book not found.
- **500 Internal Server Error:** Unexpected server error.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---
```

---

**You can copy this into your project’s `README.md` file!**
