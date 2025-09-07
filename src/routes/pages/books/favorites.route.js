'use strict';

import { Router } from 'express';

const router = Router();

router.get('/favorites', (req, res) => {
  res.render('pages/books/favorites', { title: 'Your favorites' });
});

export default router;
