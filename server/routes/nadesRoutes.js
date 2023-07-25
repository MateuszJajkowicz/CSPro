import express from 'express';
import { getNadesByMapNadeTypeAndPosition } from '../controllers/nadesController.js';

const router = express.Router();

router
  .route('/:map/:nadeType/:endPosition')
  .get(getNadesByMapNadeTypeAndPosition);

export default router;
