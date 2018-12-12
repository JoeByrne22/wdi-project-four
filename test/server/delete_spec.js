/* global describe, it, expect, api, beforeEach */

const User = require('../../models/user');
const jwt = require('jsonwebtoken');

// TODO: add secret to environment file
const { secret } = require('../../config/environment');

const Place = require('../../models/place');

const userIds = [
  '5c093fbc79720d381ada2ff7'
];

const placeData =
  {
    // Created by Joe
    name: 'Battersea Library',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Battersea_Library_08.JPG/1200px-Battersea_Library_08.JPG',
    openingHour: 9.00,
    closingHour: 20.00,
    postcode: 'SW11 1JB',
    location: { lat: 51.46403, lng: -0.16408 },
    comments: []
  };

let token;

describe('Places DELETE', () => {

  beforeEach(done => {
    Place.remove({})
      .then(() => User.remove({}))
      .then(() => User.create({
        email: 'test',
        username: 'test',
        password: 'test'
      }))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
        done();
      });
  });

  it('should return an 200, with a valid body', done => {
    api.post('/api/places')
      .set('Authorization', `Bearer ${token}`)
      .send(placeData)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

});
