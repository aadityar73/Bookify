import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('books/categories', { title: 'Categories', booksPage: true });
});

export default router;
