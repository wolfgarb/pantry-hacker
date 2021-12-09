const { Comment } = require('../models');

const commentData = [
    {
        id: 1,
        comment_text: 'lorem ipsum',
        recipe_id: 3,
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;