'use strict';

import { Router } from 'express';

const router = Router();

router.get('/selfHelp', (req, res) => {
  res.render('pages/books/self-help', { title: 'Self-Help Books' });
});

export default router;
