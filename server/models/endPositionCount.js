import mongoose from 'mongoose';

const endPositionCountSchema = new mongoose.Schema({
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

const EndPositionCount = mongoose.model(
  'EndPositionCount',
  endPositionCountSchema
);

export default EndPositionCount;
