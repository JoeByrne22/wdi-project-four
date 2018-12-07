const router = require('express').Router();
const placesController = require('../controllers/placesController');
const commentsController = require('../controllers/commentsController');
const authController = require('../controllers/authController');
const secureRoute = require('../lib/secureRoute');

router.route('/places')
  .get(placesController.indexRoute);

router.route('/places/:id')
  .get(placesController.showRoute);

router.route('/places')
  .post(secureRoute, placesController.createRoute);

router.route('/places/:id')
  .delete(secureRoute, placesController.deleteRoute);

router.route('/places/:id/edit')
  .put(secureRoute, placesController.updateRoute);

router.route('/login')
  .post(authController.loginRoute);

router.route('/register')
  .post(authController.registerRoute);

router.route('/places/:id/comments')
  .post(secureRoute, commentsController.commentCreateRoute);

router.route('/places/:id/comments/:commentId')
  .delete(secureRoute, commentsController.commentDeleteRoute);


module.exports = router;
