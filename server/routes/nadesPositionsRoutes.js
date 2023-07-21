import express from 'express';
import { getNadesPositionsByMapAndType } from '../controllers/nadesPositionController.js';

const router = express.Router();

router.route('/:map/:nade').get(getNadesPositionsByMapAndType);

export default router;
