'use strict';

import { Router } from 'express';

const router = Router();

router.get('/nonFiction', (req, res) => {
  res.render('pages/books/non-fiction', { title: 'Non-Fiction Books' });
});

export default router;
