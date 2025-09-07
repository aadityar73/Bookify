'use strict';

import { Router } from 'express';

const router = Router();

router.get('/youngAdult', (req, res) => {
  res.render('young-adult', { title: 'Young Adult Books' });
});

export default router;
