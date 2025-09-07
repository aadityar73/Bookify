'use strict';

import { Router } from 'express';

const router = Router();

router.get('/fiction', (req, res) => {
  res.render('pages/books/fiction', { title: 'Fiction Books' });
});

export default router;
