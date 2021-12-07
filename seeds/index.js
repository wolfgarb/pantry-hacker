const seedRecipes = require('./recipe-seeds');

const sequelize = require('../config/connection');

// const seedAll = async () => {
//   await sequelize.sync({ force: true });
//   console.log('===================');
//   try {
//     await seedRecipes();
//   } catch (err) {
//     console.log('\n===============\n');
//     console.log(err);
//     console.log('\n===============\n');
//   }

//   process.exit(0);
// };

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedRecipes();
  console.log('--------------');

  process.exit(0);
};

seedAll();
