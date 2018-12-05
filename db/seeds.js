const mongoose = require('mongoose');
const env = require('../config/environment');
const Place = require('../models/place');

mongoose.connect(env.dbURI);

const placeData = [
  {
    name: 'Battersea Library',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Battersea_Library_08.JPG/1200px-Battersea_Library_08.JPG',
    openingHour: 9.00,
    closingHour: 20.00,
    postcode: 'SW11 1JB'
  }

];

Place.collection.drop();

Place.create(placeData)
  .then(places => {
    console.log(`Created ${places.length} places`);
    mongoose.connection.close();
  });
