/* global describe, it, expect, api, beforeEach */

const User = require('../../models/user');
const jwt = require('jsonwebtoken');

// TODO: add secret to environment file
const { secret } = require('../../config/environment');

const Place = require('../../models/place');

// const userIds = [
//   '5c093fbc79720d381ada2ff7'
// ];

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

let token;

describe('Places CREATE', () => {

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

  it('should return a 401 response without a token', done => {
    api.post('/api/places')
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });
});

//
//
//
// it('should return the correct message when no body is sent', done => {
//   api.post('/api/items')
//     .set('Authorization', `Bearer ${token}`)
//     .end((err, res) => {
//       expect(res.body.message).to.eq('no data given');
//       done();
//     });
// });
//
// it('should return an 200, with a valid body', done => {
//   api.post('/api/items')
//     .set('Authorization', `Bearer ${token}`)
//     .send(placeData)
//     .end((err, res) => {
//       expect(res.status).to.eq(200);
//       done();
//     });
// });
//
// it('should return an object if the body contains an object', done => {
//   api.post('/api/items')
//     .set('Authorization', `Bearer ${token}`)
//     .send(placeData)
//     .end((err, res) => {
//       expect(res.body).to.be.an('object');
//       done();
//     });
// });
//
// it('should return an object with the correct name', done => {
//   api.post('/api/items')
//     .set('Authorization', `Bearer ${token}`)
//     .send(placeData)
//     .end((err, res) => {
//       // test the type of res.body
//       expect(res.body.placeName).to.eq(placeData.placeName);
//       done();
//     });
// });
