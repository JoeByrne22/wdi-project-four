const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  rating: { type: Number, min: 1, max: 5 }
});

const placeSchema = mongoose.Schema({
  name: String,
  image: String,
  openingHour: Number,
  closingHour: Number,
  postcode: String,
  location: {
    lat: { type: Number },
    lng: { type: Number }
  },
  comments: [ commentSchema ]
});

module.exports = mongoose.model('Place', placeSchema);
