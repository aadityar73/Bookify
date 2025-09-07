'use strict';

import { Router } from 'express';

const router = Router();

router.get('/historicalFiction', (req, res) => {
  res.render('historical-fiction', { title: 'Historical Fiction Books' });
});

export default router;
