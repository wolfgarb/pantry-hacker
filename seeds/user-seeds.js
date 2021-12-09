const sequelize = require('../config/connection');
const { User, Recipe } = require('../models');

const userData = [
    {
        username: 'PipNeedsChips',
        email: 'piphasnochips@gmail.com',
        password: 'pipnchips'
    }
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;