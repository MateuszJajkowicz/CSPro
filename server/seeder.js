// import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
// import nades from './data/nades.js';
import mirageSmokes from './data/mirageSmokes.js';
import User from './models/userModel.js';
import Nade from './models/nadesModel.js';
import NadesPositions from './models/nadesPositionsModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Nade.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    // const sampleNades = nades.map((nade) => {
    //   return { ...nade, user: adminUser };
    // });

    const sampleNades = mirageSmokes.map((nade) => {
      return { ...nade, user: adminUser };
    });

    await Nade.insertMany(sampleNades);
    console.log('Data Imported!'.green.inverse);

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
    ])
      .then(async (result) => {
        const aggregatedData = result.map((item) => ({
          endPosition: item._id.endPosition,
          type: item._id.type,
          map: item._id.map,
          count: item.count,
        }));

        await NadesPositions.insertMany(aggregatedData);
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
    await NadesPositions.deleteMany();

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
