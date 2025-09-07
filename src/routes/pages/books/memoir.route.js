'use strict';

import { Router } from 'express';

const router = Router();

router.get('/biography', (req, res) => {
  res.render('memoir', { title: 'Biography/Memoir Books' });
});

export default router;
