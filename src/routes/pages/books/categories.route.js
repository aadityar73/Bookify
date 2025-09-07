'use strict';

import { Router } from 'express';

const router = Router();

router.get('/categories', (req, res) => {
  res.render('categories', { title: 'Categories' });
});

export default router;
