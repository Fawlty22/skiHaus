// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
scalar Date

type User {
  _id: ID
  username: String
  email: String
  firstName: String
  lastName: String
  birthDate: String
  phone: String
  contracts: [Contract]
}

  type Contract {
    _id: ID
    checkOutDate: Date
    checkInDate: Date
    equipment: Equipment
    active: Boolean
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

  input EquipmentInput {
    boots: [ID]
    skis: [ID]
    snowboards: [ID]
  }

  type Ski {
    _id: ID
    brand: String
    model: String
    condition: String
    available: Boolean
  }

  type Snowboard {
    _id: ID
    brand: String
    model: String
    condition: String
    available: Boolean
  }

  type Boot {
    _id: ID
    brand: String
    model: String
    condition: String
    available: Boolean
  }

  type Auth {
    token: ID
    employee: Employee
  }

  type Query {
    users: [User]
    user(email: String!): User
    employee: Employee
    employees: [Employee]
    contract(id: ID!): Contract
    contracts: [Contract]
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
      birthDate: String!
      email: String!
      phone: String!
    ): User

    editUser(
      _id: ID!
      firstName: String!
      lastName: String!
      username: String!
      birthDate: String!
      email: String!
      phone: String!
    ): User

    createContract(
      active: Boolean
      user: String!
      checkOutDate: Date!
      checkInDate: Date!
      equipment: EquipmentInput
    ): User

    deactivateContract(_id: ID!): Contract

    editContract(
      _id: ID!
      checkOutDate: Date!
      checkInDate: Date!
      equipment: EquipmentInput
    ): Contract

    addSki(brand: String!, model: String!, condition: String!): Ski
    updateSki(_id: ID!, brand: String, model: String, condition: String): Ski
    deleteSki(_id: ID!): Ski
    addSnowboard(brand: String!, model: String!, condition: String!): Snowboard
    updateSnowboard(
      _id: ID!
      brand: String
      model: String
      condition: String
    ): Snowboard
    deleteSnowboard(_id: ID!): Snowboard
    addBoot(brand: String!, model: String!, condition: String!): Boot
    updateBoot(_id: ID!, brand: String, model: String, condition: String): Boot
    deleteBoot(_id: ID!): Boot
  }
`;

// export the typeDefs
module.exports = typeDefs;
