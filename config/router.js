const router = require('express').Router();
const placesController = require('../controllers/placesController');

router.route('/places')
  .get(placesController.indexRoute);

router.route('/places/:id')
  .get(placesController.showRoute);

router.route('/places')
  .post(placesController.createRoute);

router.route('/places/:id')
  .delete(placesController.deleteRoute);

router.route('/places/:id')
  .post(placesController.updateRoute);


module.exports = router;
