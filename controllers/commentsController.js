const Place = require('../models/place');

function commentCreateRoute(req, res, next) {
  req.body.user = req.currentUser;
  console.log('user', req.body.user);
  Place
    .findById(req.params.id)
    .populate('comments.username')
    .exec()
    .then(place => {
      place.comments.push(req.body);
      return place.save();
    })
    .then(place => res.json(place))
    .catch(next);
}

function commentDeleteRoute(req, res, next) {
  Place
    .findById(req.params.id)
    .populate('comments.username')
    .then(place => {
      const comment = place.comments.id(req.params.commentId);
      console.log('place.comments.id(req.params.commentId', place.comments.id(req.params.commentId));
      console.log('req is ', req);
      // if(!comment._id.equals(req.currentUser._id)) {
      //   throw new Error('Unauthorized');
      // }
      comment.remove();
      return place.save();
    })
    .then(place => res.json(place))
    .catch(next);
}

module.exports = {
  commentDeleteRoute: commentDeleteRoute,
  commentCreateRoute: commentCreateRoute
};
