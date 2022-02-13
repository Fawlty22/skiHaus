// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    firstName: String
    lastName: String
    birthDate: String
    phone: String
    Contracts: [Contract]
  }

  type Contract {
    checkOutDate: String
    checkInDate: String
    active: Boolean
    equipment: [Equipment]
  }

  type Employee {
    _id: ID
    username: String
  }

  type Equipment {
    boots: [Boot]
    skis: [Ski]
    snowboards: [Snowboard]
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

  type Auth {
    token: ID
    employee: Employee
  }

  type Query {
    users: [User]
    employee: Employee
    employees: [Employee]
    skis: [Ski]
    snowboards: [Snowboard]
    boots: [Boot]
  }

  type Mutation {
    addEmployee(username: String!, password: String!): Auth

    updateEmployee(username: String!, password: String!): Employee

    login(username: String!, password: String!): Auth

    addUser(
      firstName: String!
      lastName: String!
      username: String!
      password: String!
      birthDate: String!
      email: String!
      phone: String!
    ): User

    createContract(
      user: String!
      checkOutDate: String!
      checkInDate: String!
      equipment: [ID]!
    ): User

    addSki(brand: String!, model: String!, condition: String!): Ski
    addSnowboard(brand: String!, model: String!, condition: String!): Snowboard
    addBoot(brand: String!, model: String!, condition: String!): Boot
  }
`;

// export the typeDefs
module.exports = typeDefs;
