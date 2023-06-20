import mongoose from 'mongoose';

const nadesPositionsSchema = new mongoose.Schema({
  endPosition: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  map: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

const NadesPositions = mongoose.model(
  'EndPositionCount',
  nadesPositionsSchema
);

export default NadesPositions;
