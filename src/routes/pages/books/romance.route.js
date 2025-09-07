'use strict';

import { Router } from 'express';

const router = Router();

router.get('/romance', (req, res) => {
  res.render('pages/books/romance', { title: 'Romance Books' });
});

export default router;
