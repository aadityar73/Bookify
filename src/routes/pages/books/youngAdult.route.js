'use strict';

import { Router } from 'express';

const router = Router();

router.get('/youngAdult', (req, res) => {
  res.render('pages/books/young-adult', { title: 'Young Adult Books' });
});

export default router;
