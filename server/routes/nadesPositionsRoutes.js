import express from 'express';
import { getNadesPositionsByMap } from '../controllers/nadesPositionController.js';

const router = express.Router();

router.route('/:map').get(getNadesPositionsByMap);

export default router;
