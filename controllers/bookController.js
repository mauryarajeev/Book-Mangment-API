const Book = require('../models/bookModel');

const bookController = {
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.find();
      res.status(200).json(books);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  getBookById: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  createBook: async (req, res) => {
    const { title, author, summary } = req.body;
    const book = new Book({
      title,
      author,
      summary,
    });
    try {
      const newBook = await book.save();
      res.status(201).json(newBook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  updateBook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
      if (req.body.title) {
        book.title = req.body.title;
      }
      if (req.body.author) {
        book.author = req.body.author;
      }
      if (req.body.summary) {
        book.summary = req.body.summary;
      }
      const updatedBook = await book.save();
      res.status(200).json(updatedBook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  deleteBook: async (req, res) => {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.status(200).json({ message: 'Book deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

module.exports = bookController;
