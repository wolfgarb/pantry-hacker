const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipe, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get all recipes for dashboard
router.get('/', withAuth, (req, res) => {
    console.log(req.session);
    console.log('======================');
    Recipe.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'recipe_text',
            'title',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'recipe_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbRecipeData => {
            const recipes = dbRecipeData.map(recipe => recipe.get({ plain: true }));
            res.render('dashboard', { recipes, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/create/', withAuth, (req, res) => {
    Recipe.findAll({
        where: {
            // use the ID from the session
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'title',
            'created_at',
            'recipe_content'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'recipe_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbRecipeData => {
            // serialize data before passing to template
            const recipes = dbRecipeData.map(recipe => recipe.get({ plain: true }));
            res.render('create-recipe', { recipes, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//edit a recipe
router.get('/edit/:id', withAuth, (req, res) => {
    Recipe.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'recipe_text',
            'title',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'recipe_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbRecipeData => {
            if (dbRecipeData) {
                const recipe = dbRecipeData.get({ plain: true });

                res.render('edit-recipe', {
                    recipe,
                    loggedIn: true
                });
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});


module.exports = router;
