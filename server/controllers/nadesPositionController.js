import asyncHandler from 'express-async-handler';
import NadesPositions from '../models/nadesPositionsModel.js';

// @desc    Fetch all nades
// @route   GET /api/nades
// @access  Public
const getNadesPositionsByMap = asyncHandler(async (req, res) => {
  const nades = await NadesPositions.where('map').equals(req.params.map);

  if (nades) {
    res.json(nades);
  } else {
    res.status(404).json({ message: 'Nades not found' });
  }
});

export { getNadesPositionsByMap };
