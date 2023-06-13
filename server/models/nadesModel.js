import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

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
    map: {
      type: String,
      enum: {
        values: [
          'ancient',
          'anubis',
          'cache',
          'dust2',
          'inferno',
          'mirage',
          'nuke',
          'overpass',
          'train',
          'vertigo',
        ],
        message: '{VALUE} is not supported',
      },
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    image: {
      type: [String],
      required: true,
    },
    video: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      enum: {
        values: ['Smoke', 'Flashbang', 'Molotov', 'Grenade'],
        message: '{VALUE} is not supported',
      },
      required: true,
    },
    side: {
      type: String,
      enum: {
        values: ['CT', 'TT', 'Both'],
        message: '{VALUE} is not supported',
      },
      required: true,
    },
    movement: {
      type: String,
      enum: {
        values: [
          'Stationary',
          'Running',
          'Walking',
          'Crouching',
          'Crouch walking',
        ],
        message: '{VALUE} is not supported',
      },
      required: true,
    },
    technique: {
      type: String,
      enum: {
        values: [
          'Jumpthrow',
          'Mouse Left',
          'Mouse Right',
          'Mouse Both',
          'Jumpthrow + W',
          'Jumpthrow - Mouse Both',
        ],
        message: '{VALUE} is not supported',
      },
      required: true,
    },
    tickrate: {
      type: String,
      enum: {
        values: ['64 Tick', '128 Tick', 'Both'],
        message: '{VALUE} is not supported',
      },
      required: true,
    },
    description: {
      type: [String],
      required: false,
    },
    tags: {
      type: [String],
      required: false,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Nade = mongoose.model('Nade', nadeSchema);

export default Nade;
