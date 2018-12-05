const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
  name: String,
  image: String,
  openingHour: Number,
  closingHour: Number,
  postcode: String
});

const placeModel = mongoose.model('Place', placeSchema);
module.exports = placeModel;
