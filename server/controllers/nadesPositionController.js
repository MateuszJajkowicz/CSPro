import asyncHandler from 'express-async-handler';
import NadesCountForPosition from '../models/nadesCountForPositionModel.js';

// @desc    Fetch all nades
// @route   GET /api/nades
// @access  Public
const getNadesPositionsByMapAndType = asyncHandler(async (req, res) => {
  const nades = await NadesCountForPosition.where('map').equals(req.params.map).where('type').equals(req.params.nade);

  if (nades) {
    res.json(nades);
  } else {
    res.status(404).json({ message: 'Nades not found' });
  }
});

export { getNadesPositionsByMapAndType };
