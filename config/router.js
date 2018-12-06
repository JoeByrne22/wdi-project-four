const router = require('express').Router();
const placesController = require('../controllers/placesController');
const authController = require('../controllers/authController');

router.route('/places')
  .get(placesController.indexRoute);

router.route('/places/:id')
  .get(placesController.showRoute);

router.route('/places')
  .post(placesController.createRoute);

router.route('/places/:id')
  .delete(placesController.deleteRoute);

router.route('/places/:id/edit')
  .put(placesController.updateRoute);

router.route('/login')
  .post(authController.loginRoute);

router.route('/register')
  .post(authController.registerRoute);

module.exports = router;
