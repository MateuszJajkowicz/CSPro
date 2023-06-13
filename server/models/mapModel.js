import mongoose from 'mongoose';

const nadeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    game: {
      type: String,
      enum: {
        values: ['CSGO', 'CS'],
        message: '{VALUE} is not supported',
      },
      required: true,
    },
    name: {
      type: String,
      enum: {
        values: [
          'Ancient',
          'Anubis',
          'Cache',
          'Dust2',
          'Inferno',
          'Mirage',
          'Nuke',
          'Overpass',
          'Train',
          'Vertigo',
        ],
        message: '{VALUE} is not supported',
      },
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Map = mongoose.model('Map', mapSchema);

export default Map;
