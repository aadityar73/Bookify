'use strict';

import { Router } from 'express';

const router = Router();

router.get('/scienceFiction', (req, res) => {
  res.render('science-fiction', { title: 'Science Fiction Books' });
});

export default router;
