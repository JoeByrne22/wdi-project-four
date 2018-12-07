const mongoose = require('mongoose');
const env = require('../config/environment');
const Place = require('../models/place');
const User = require('../models/user');

mongoose.connect(env.dbURI);

const userData = [{
  username: 'Dave',
  email: 'dave@dave.com',
  password: 'pass'
  // passwordConfirmation: 'pass'
}];

const placeData = [
  {
    name: 'Battersea Library',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Battersea_Library_08.JPG/1200px-Battersea_Library_08.JPG',
    openingHour: 9.00,
    closingHour: 20.00,
    postcode: 'SW11 1JB',
    location: { lat: 51.46403, lng: -0.16408 },
    comments: []
  },
  {
    name: 'Northcote Library',
    image: 'https://images.ecosia.org/vvEe_MxZCVUiPEtbtmTJ4hWCfUg=/0x390/smart/http%3A%2F%2Fbecandbalhamlabour.org%2Fwp-content%2Fuploads%2F2017%2F09%2FNorthcote-Library.jpg',
    openingHour: 9.00,
    closingHour: 19.00,
    postcode: 'SW11 6HW',
    location: { lat: 51.45522, lng: -0.16435 },
    comments: []
  }
];



Place.collection.drop();

Place.create(placeData)
  .then(places => {
    console.log(`Created ${places.length} places`);
    mongoose.connection.close();
  });
User.create(userData)
  .then(user => {
    console.log(`Created ${user.length} users!`);
    mongoose.connection.close();
  });
