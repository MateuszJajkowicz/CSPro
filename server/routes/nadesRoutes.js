import express from 'express';
import { getNadesByMap } from '../controllers/nadesController.js';

const router = express.Router();

router.route('/:map').get(getNadesByMap);

export default router;
