// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`  

type User {
    _id: ID
    username: String
    email: String
  }

  type Ski {
    _id: ID
    brand: String
    model: String
    condition: String
  }

  type Snowboard {
    _id: ID
    brand: String
    model: String
    condition: String
  }

  type Boot {
    _id: ID
    brand: String
    model: String
    condition: String
  }

  type Query {
    users: [User]
    skis: [Ski]
    snowboards: [Snowboard]
    boots: [Boot]
  }

`;

// export the typeDefs
module.exports = typeDefs;