'use strict';

import { Router } from 'express';

const router = Router();

router.get('/indianAuthors', (req, res) => {
  res.render('indian-authors', { title: 'Indian Authors Books' });
});

export default router;
