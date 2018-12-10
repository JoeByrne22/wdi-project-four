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
    name: 'Costa Coffee',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Sutton%2C_Surrey%2C_Greater_London_-_Costa_Coffee_bar_building.jpg/701px-Sutton%2C_Surrey%2C_Greater_London_-_Costa_Coffee_bar_building.jpg',
    openingHour: 9.00,
    closingHour: 20.00,
    postcode: 'SW11 1PX',
    location: { lat: 51.46109, lng: -0.16741 },
    comments: []
  }, {
    name: 'London Library',
    image: 'https://4.bp.blogspot.com/-zFSjjuw-I8o/Vz0uipOwp7I/AAAAAAAAx5s/6mIJwveILJEXlvhef_NcCjDpz7ofX-yvwCLcB/s1600/o.h.london.1%2B134%2B%25283%2529.JPG',
    openingHour: 9.30,
    closingHour: 20.00,
    postcode: 'SW1Y 4LG ',
    location: { lat: 51.50734, lng: -0.13701 },
    comments: []
  }, {
    name: 'Clapham Library',
    image: 'https://images.ecosia.org/DM2KYH60EffLasTDVrsRRWZmWaY=/0x390/smart/http%3A%2F%2Fwww.viaggidiarchitettura.it%2Fwp-content%2Fuploads%2F2016%2F10%2Fclapham-library-building-1000x600.jpg',
    openingHour: 10.00,
    closingHour: 20.00,
    postcode: 'SW4 7DB',
    location: { lat: 51.46321, lng: -0.13368 },
    comments: []
  }, {
    name: 'Plaistow Library',
    image: 'https://c1.staticflickr.com/3/2366/2336897715_20f8a0a174_b.jpg',
    openingHour: 8.30,
    closingHour: 19.00,
    postcode: 'E13 9HL',
    location: { lat: 51.53023, lng: 0.02550 },
    comments: []
  }, {
    name: 'Artizan Street Library',
    image: 'https://chiversphotography.files.wordpress.com/2013/10/13a-middlesex-street.jpg',
    openingHour: 8.00,
    closingHour: 18.00,
    postcode: ' E1 7BS',
    location: { lat: 51.51550, lng: -0.07681 },
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
