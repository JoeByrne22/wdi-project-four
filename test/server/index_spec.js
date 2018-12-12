/* global api, expect, describe, it, beforeEach */


const Place = require('../../models/place');

const userIds = [
  '5c093fbc79720d381ada2ff7',
  '5c093fbc79720d381ada2ff8',
  '5c093fbc79720d381ada2ff9'
];

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
  },
  {
    name: 'London Library',
    image: 'https://4.bp.blogspot.com/-zFSjjuw-I8o/Vz0uipOwp7I/AAAAAAAAx5s/6mIJwveILJEXlvhef_NcCjDpz7ofX-yvwCLcB/s1600/o.h.london.1%2B134%2B%25283%2529.JPG',
    openingHour: 9.30,
    closingHour: 20.00,
    postcode: 'SW1Y 4LG ',
    location: { lat: 51.50734, lng: -0.13701 },
    comments: []
  }
];

describe('Places INDEX', () => {

  beforeEach(done => {
    Place.remove({})
      .then(() => Place.create(placeData))
      .then(() => done());
  });

  it('should return a 200 response', done => {
    api.get('/api/places')
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

});
