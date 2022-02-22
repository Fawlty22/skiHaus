const jwt = require('jsonwebtoken');
const { AuthenticationError } = require("apollo-server-express");

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  //middleware for verifying token on server requests
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      // throw new AuthenticationError('You must be logged in');
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.employee = data;
    } catch {
      console.log('Invalid token');
    }
    return req;
  },
  signToken: function({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  }
};