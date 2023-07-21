// import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
// import nades from './data/nades.js';
import mirageSmokes from './data/mirageSmokes.js';
import mirageNadesPositions from './data/mirageNadesPositions.js';
import User from './models/userModel.js';
import Nade from './models/nadeModel.js';
import NadesCountForPosition from './models/nadesCountForPositionModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Nade.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleNades = mirageSmokes.map((nade) => {
      return { ...nade, user: adminUser };
    });

    await Nade.insertMany(sampleNades);
    console.log('Nades Imported!'.green.inverse);

    await Nade.aggregate([
      {
        $group: {
          _id: {
            endPosition: '$endPosition',
            type: '$type',
            map: '$map',
          },
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          endPosition: '$_id.endPosition',
          type: '$_id.type',
          map: '$_id.map',
          count: 1,
        },
      },
    ])
      .then(async (result) => {
        const nadePositions = result;

        // Joining the arrays based on the specified conditions
        const joinedArray = nadePositions
          .filter((nadePos) => mirageNadesPositions.some((mapPos) => mapPos.map === nadePos.map && mapPos.type === nadePos.type && mapPos.endPosition === nadePos.endPosition))
          .map((nadePos) => {
            const mapPos = mirageNadesPositions.find((mapPos) => mapPos.map === nadePos.map && mapPos.type === nadePos.type && mapPos.endPosition === nadePos.endPosition);
            return {
              ...nadePos,
              x: mapPos.x,
              y: mapPos.y,
              user: adminUser
            };
          });

        await NadesCountForPosition.insertMany(joinedArray);
      })
      .then(() => {
        console.log('Aggregated data saved successfully.'.green.inverse);
      })
      .catch((error) => {
        console.error(
          'Failed to save aggregated data:',
          `${error}`.red.inverse
        );
      });

    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Nade.deleteMany();
    await User.deleteMany();
    await NadesCountForPosition.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
