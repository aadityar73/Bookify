import { Router } from 'express';

import {
  getFictionBooks,
  getMysteryBooks,
  getRomanceBooks,
  getScienceBooks,
  getFantasyBooks,
  getHistoricalBooks,
  getYoungAdultBooks,
  getNonFictionBooks,
  getBiographyBooks,
  getSelfHelpBooks,
  getBusinessBooks,
  getPsychologyBooks,
  getPhilosophyBooks,
  getIndianAuthorBooks,
} from './books.controller.js';

const router = Router();

router.get('/fiction', getFictionBooks);
router.get('/mystery', getMysteryBooks);
router.get('/romance', getRomanceBooks);
router.get('/science-fiction', getScienceBooks);
router.get('/fantasy', getFantasyBooks);
router.get('/historical-fiction', getHistoricalBooks);
router.get('/young-adult', getYoungAdultBooks);
router.get('/non-fiction', getNonFictionBooks);
router.get('/biography', getBiographyBooks);
router.get('/self-help', getSelfHelpBooks);
router.get('/business', getBusinessBooks);
router.get('/psychology', getPsychologyBooks);
router.get('/philosophy', getPhilosophyBooks);
router.get('/indian-authors', getIndianAuthorBooks);

export default router;
