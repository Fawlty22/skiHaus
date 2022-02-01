const { User, Snowboard, Ski, Boot } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
      users: async () => {
        return User.find()
        .select('-__v -password')
      },
      boots: async () => {
        return Boot.find()
        .select('-__v')
      },
      skis: async () => {
        return Ski.find()
        .select('-__v')
      },
      snowboards: async () => {
        return Snowboard.find()
        .select('-__v')
      }
    }
  };

  module.exports = resolvers;
  