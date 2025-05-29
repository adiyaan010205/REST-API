const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

let books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 2, title: "1984", author: "George Orwell" },
    { id: 3, title: "Pride and Prejudice", author: "Jane Austen" }
];

function generateId() {
    return books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;
}

app.get('/books', (req, res) => {
    try {
        res.status(200).json({
            success: true,
            count: books.length,
            data: books
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
});

app.get('/books/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        
        if (isNaN(id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid book ID. ID must be a number.'
            });
        }
        
        const book = books.find(book => book.id === id);
        
        if (!book) {
            return res.status(404).json({
                success: false,
                message: 'Book not found'
            });
        }
        
        res.status(200).json({
            success: true,
            data: book
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
});

app.post('/books', (req, res) => {
    try {
        const { title, author } = req.body;
        
        if (!title || !author) {
            return res.status(400).json({
                success: false,
                message: 'Title and author are required fields'
            });
        }
        
        if (typeof title !== 'string' || typeof author !== 'string') {
            return res.status(400).json({
                success: false,
                message: 'Title and author must be strings'
            });
        }
        
        const newBook = {
            id: generateId(),
            title: title.trim(),
            author: author.trim()
        };
        
        books.push(newBook);
        
        res.status(201).json({
            success: true,
            message: 'Book created successfully',
            data: newBook
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
});

app.put('/books/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { title, author } = req.body;
        
        if (isNaN(id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid book ID. ID must be a number.'
            });
        }
        
        const bookIndex = books.findIndex(book => book.id === id);
        
        if (bookIndex === -1) {
            return res.status(404).json({
                success: false,
                message: 'Book not found'
            });
        }
        
        if (!title || !author) {
            return res.status(400).json({
                success: false,
                message: 'Title and author are required fields'
            });
        }
        
        books[bookIndex] = {
            id: id,
            title: title.trim(),
            author: author.trim()
        };
        
        res.status(200).json({
            success: true,
            message: 'Book updated successfully',
            data: books[bookIndex]
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
});

app.delete('/books/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        
        if (isNaN(id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid book ID. ID must be a number.'
            });
        }
        
        const bookIndex = books.findIndex(book => book.id === id);
        
        if (bookIndex === -1) {
            return res.status(404).json({
                success: false,
                message: 'Book not found'
            });
        }
        
        const deletedBook = books[bookIndex];
        books.splice(bookIndex, 1);
        
        res.status(200).json({
            success: true,
            message: 'Book deleted successfully',
            data: deletedBook
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
});

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.originalUrl} not found`
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Available endpoints:');
    console.log('GET    /books     - Get all books');
    console.log('GET    /books/:id - Get a book by ID');
    console.log('POST   /books     - Create a new book');
    console.log('PUT    /books/:id - Update a book by ID');
    console.log('DELETE /books/:id - Delete a book by ID');
});
