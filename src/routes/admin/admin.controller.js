import Book from '../../models/book.model.js';

const getAddBookPage = (req, res) => {
  res.render('admin/add-book', { title: 'Add Book' });
};

const addBook = async (req, res) => {
  try {
    const { title, author, category, pages, rating } = req.body;

    if (!title || !author) {
      return res.status(400).send('Title/Author is required!');
    }

    const book = new Book({
      title,
      author,
      category,
      pages,
      rating,
      coverImageUrl: 'placeholder',
      fileUrl: 'placeholder',
    });

    await book.save();
    res.status(201).send(`
      <script>
        alert('Book added successfully.');
        window.location.href = '/api/admin/books';
      </script>  
    `);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add Book' });
  }
};

export { getAddBookPage, addBook };
