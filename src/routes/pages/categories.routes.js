import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('pages/books/categories', { title: 'Categories' });
});

export default router;
