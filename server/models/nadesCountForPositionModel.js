import mongoose from 'mongoose';

const nadesCountForPositionsSchema = new mongoose.Schema({
  user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
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
  x: {
    type: Number,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  },
});

const NadesCountForPosition = mongoose.model(
  'NadesCountForPosition',
  nadesCountForPositionsSchema
);

export default NadesCountForPosition;
