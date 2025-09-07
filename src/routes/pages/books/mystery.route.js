'use strict';

import { Router } from 'express';

const router = Router();

router.get('/mystery', (req, res) => {
  res.render('mystery', { title: 'Mystery/Thriller Books' });
});

export default router;
