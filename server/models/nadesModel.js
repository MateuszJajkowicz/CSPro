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

const imageSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  stack: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const gfySchema = mongoose.Schema({
  smallVideoUrl: {
    type: String,
    required: true,
  },
  avgColor: {
    type: String,
    required: true,
  },
  gfyId: {
    type: String,
    required: true,
  },
  largeVideoWebm: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  largeVideoUrl: {
    type: String,
    required: true,
  },
});

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
    endPosition: {
      type: String,
      required: true,
    },
    startPosition: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: false,
    },
    imageLineup: imageSchema,
    imageLineupThumb: imageSchema,
    imageLineupThumbUrl: String,
    imageMain: imageSchema,
    video: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      enum: {
        values: ['smoke', 'flash', 'molotov', 'hegrenade', 'decoy'],
        message: '{VALUE} is not supported',
      },
      required: true,
    },
    teamSide: {
      type: String,
      enum: {
        values: ['counterTerrorist', 'terrorist', 'both'],
        message: '{VALUE} is not supported',
      },
      required: true,
    },
    movement: {
      type: String,
      enum: {
        values: [
          'stationary',
          'running',
          'walking',
          'crouching',
          'crouchwalking',
        ],
        message: '{VALUE} is not supported',
      },
      required: true,
    },
    technique: {
      type: String,
      enum: {
        values: [
          'jumpthrow',
          'jumpthrowBoth',
          'jumpthrowW',
          'left',
          'right',
          'both',
        ],
        message: '{VALUE} is not supported',
      },
      required: true,
    },
    tickrate: {
      type: String,
      enum: {
        values: ['tick64', 'tick128', 'any', null],
        message: '{VALUE} is not supported',
      },
      required: false,
    },
    description: {
      type: [String],
      required: false,
    },
    slug: {
      type: String,
      required: false,
    },
    tags: {
      type: [String],
      required: false,
    },
    new: {
      type: Boolean,
      required: false,
      default: false,
    },
    oneWay: {
      type: Boolean,
      required: false,
      default: false,
    },
    score: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: [reviewSchema],
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    favoriteCount: {
      type: Number,
      required: true,
      default: 0,
    },
    viewCount: {
      type: Number,
      required: true,
      default: 0,
    },
    status: {
      type: String,
      enum: {
        values: ['pending', 'accepted', 'rejected'],
        message: '{VALUE} is not supported',
      },
      required: true,
      default: 'pending',
    },
    youTubeId: {
      type: String,
      required: false,
    },
    gfycat: gfySchema,
  },
  {
    timestamps: true,
  }
);

const Nade = mongoose.model('Nade', nadeSchema);

// Nade.aggregate([
//   {
//     $group: {
//       _id: '$endPosition',
//       count: { $sum: 1 },
//     },
//   },
// ])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

export default Nade;
