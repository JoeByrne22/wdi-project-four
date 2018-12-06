const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

function registerRoute(req, res, next) {
  User.create(req.body)
    .then(user => {
      console.log('req yo body', req.body);
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
      res.json({
        message: `Thanks for registering ${user.username}!`,
        token,
        user
      });
    })
    .catch(next);
}

function loginRoute(req, res, next) {
  User.findOne({ email: req.body.email })
    .select('+password')
    .then(user => {
      if(!user || !user.validatePassword(req.body.password) ) {
        console.log('were here', user);
        return res.status(401).json({ message: 'Unauthorized' });
      }
      const token = jwt.sign({ sub: user._id, username: user.username }, secret, { expiresIn: '6h' });
      res.json({
        message: `Welcome back ${user.username}!`,
        token,
        user
      });
    })
    .catch(next);
}

module.exports = {
  registerRoute: registerRoute,
  loginRoute: loginRoute
};
