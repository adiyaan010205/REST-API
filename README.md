

```markdown
# 📚 Book API

A simple RESTful API built with Node.js and Express to manage a collection of books. Supports basic CRUD operations.

## 🚀 Features

- Get all books
- Get a book by ID
- Add a new book
- Update an existing book
- Delete a book

## 🛠️ Tech Stack

- Node.js
- Express.js

## 📁 Project Structure

```

.
├── app.js           # Main server file
├── package.json     # Project metadata and dependencies
└── .gitignore       # Ignored files (e.g., node\_modules)

````

## 🔧 Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/your-username/book-api.git
cd book-api
````

2. **Install dependencies**

```bash
npm install
```

3. **Run the server**

```bash
node app.js
```

The server will start at: `http://localhost:3000`

---

## 📫 API Endpoints

| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| GET    | `/books`     | Get all books       |
| GET    | `/books/:id` | Get a book by ID    |
| POST   | `/books`     | Add a new book      |
| PUT    | `/books/:id` | Update a book by ID |
| DELETE | `/books/:id` | Delete a book by ID |

---

## 🧪 Sample API Requests (using `curl`)

### ➕ Create a Book

```bash
curl -X POST http://localhost:3000/books \
-H "Content-Type: application/json" \
-d '{"title": "The Alchemist", "author": "Paulo Coelho"}'
```

### 📖 Get All Books

```bash
curl http://localhost:3000/books
```

### 📘 Get a Book by ID

```bash
curl http://localhost:3000/books/1
```

### ✏️ Update a Book

```bash
curl -X PUT http://localhost:3000/books/1 \
-H "Content-Type: application/json" \
-d '{"title": "1984", "author": "George Orwell"}'
```

### ❌ Delete a Book

```bash
curl -X DELETE http://localhost:3000/books/1
```

