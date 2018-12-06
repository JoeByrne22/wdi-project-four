const Place = require('../models/place');

function commentCreateRoute(req, res, next) {
  req.body.user = req.currentUser;
  Place
    .findById(req.params.id)
    .populate('comments.user')
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
    .populate('comments.user')
    .then(place => {
      const comment = place.comments.id(req.params.commentId);
      console.log('place.comments.id(req.params.commentId', place.comments.id(req.params.commentId));
      if(!comment.user._id.equals(req.currentUser._id)) {
        throw new Error('Unauthorized');
      }
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
