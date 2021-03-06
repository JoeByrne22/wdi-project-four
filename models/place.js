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
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  comments: [ commentSchema ]
});

placeSchema.virtual('avgRating')
  .get(function() {
    return Math.round(this.comments.reduce((sum, comment) => {
      return sum + comment.rating;
    }, 0) / this.comments.length);
  });

placeSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Place', placeSchema);
