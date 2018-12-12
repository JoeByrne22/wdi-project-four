/* global describe, it, expect, api, beforeEach */

const User = require('../../models/user');
const jwt = require('jsonwebtoken');

// TODO: add secret to environment file
const { secret } = require('../../config/environment');

const Item = require('../../models/place');

const userIds = [
  '5c093fbc79720d381ada2ff7'
];

const placeData =
  {
    name: 'Battersea Library',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Battersea_Library_08.JPG/1200px-Battersea_Library_08.JPG',
    openingHour: 9.00,
    closingHour: 20.00,
    postcode: 'SW11 1JB',
    location: { lat: 51.46403, lng: -0.16408 },
    comments: []
  };

let token

const placeId = '5bf6e31125ab69b642dc8626';


describe('Places EDIT', () => {

  beforeEach(done => {
    Item.remove({})
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

  it('should return a 404 response without a token', done => {
    api.post(`/api/places/${placeId}`)
      .end((err, res) => {
        expect(res.status).to.eq(404);
        done();
      });
  });

});
