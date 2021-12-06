const router = require('express').Router();

const recipeRoutes = require('./recipe-routes');
const commentRoutes = require('./comment-routes');
const userRoutes = require('./user-routes.js');

router.use('/recipes', recipeRoutes);
router.use('/users', userRoutes);
router.use('./comments', commentRoutes);

module.exports = router;
