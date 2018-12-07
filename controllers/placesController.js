const Place = require('../models/place');

function indexRoute(req, res, next) {
  console.log('index route running');
  Place.find().then(places => res.json(places))
    .catch(next);
}

function showRoute(req, res, next) {
  console.log('showtime!');
  Place.findById(req.params.id)
    .populate('comments.user')
    .then(place => res.json(place))
    .catch(next);
}

function createRoute(req, res, next) {
  console.log('Let there be light');
  Place.create(req.body)
    .then(place => res.json(place))
    .catch(next);
}

function deleteRoute(req, res, next) {
  console.log('delete route is running');
  Place.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

function updateRoute(req, res, next) {
  console.log('UPDATE route is running');
  Place.findById(req.params.id)
    .then(place => place.set(req.body))
    .then(place => place.save())
    .then(place => res.json(place))
    .catch(next);
}


module.exports = {
  indexRoute: indexRoute,
  showRoute: showRoute,
  createRoute: createRoute,
  deleteRoute: deleteRoute,
  updateRoute: updateRoute
};
