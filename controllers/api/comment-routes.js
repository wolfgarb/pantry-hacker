const router = require('express').Router();
const { Comment, Recipe } = require('../../models');
const withAuth = require('../../utils/auth');

//get comments
// router.get('/', (req, res) => {
//     Comment.findAll()   
//         .then(dbCommentData => res.json(dbCommentData))
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

router.get('/', (req, res) => {
    Comment.findAll({
      attributes: ['id', 'title', 'ing_1', 'ing_2','ing_3', 'recipe_text'],
      include: [
        {
            model: Comment,
            attributes: ['id', 'comment_text', 'recipe_id', 'user_id', 'created_at']
        },
    ]
  })
      .then((dbCommentData) => res.json(dbCommentData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//post comments
router.post('/', withAuth, (req, res) => {
    // expects => {comment_text: "This is the comment", user_id: 1, recipe_id: 2}
    //check the session
    if (req.session) {
        Comment.create({
            comment_text: req.body.comment_text,
            user_id: req.session.user_id,
            recipe_id: req.body.recipe_id
        })
            .then(dbCommentData => res.json(dbCommentData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});

//delete a comment
router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCommentData => {
            if (!dbCommentData) {
                res.status(404).json({ message: 'No comment found with this id!' });
                return;
            }
            res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;





    // {
    //     include: [
    //         {
    //             model: Comment,
    //             attributes: ['comment_text', 'user_id', 'recipe_id']

    //         }
    //     ]
    // })
    //   