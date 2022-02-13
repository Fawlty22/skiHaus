// import the gql tagged template function
const { gql } = require("apollo-server-express");




// create our typeDefs
const typeDefs = gql`
  type Customer {
    _id: ID
    username: String
    email: String
    firstName: String
    lastName: String
    birthDate: String
    phone: String
  }
  

type Date {
   created: Date
}

  type Employee {
    _id: ID
    username: String
  }

type Equipment {
  _id: ID
  name: String
  description: String
  image: String
  quantity: Int
  price: Float
  
}
type Category {
  _id: ID
  name: String
}
type Contract {
  _id: ID
  rentalDate: Date
  products: [Equipment]
  customer: Customer
}
  type Auth {
    token: ID
    employee: Employee
  }

  type Query {
    custumers: [Customer]
    contract(_id: ID!): Contract
    employees: [Employee]
   equipment(category: ID, Name: String!): [Equipment]
  }

  type Mutation {
    addEmployee(username: String!, password: String!): Auth
    updateEmployee(username: String!, password: String!): Employee
    login(username: String!, password: String!): Auth
  addCategory (name: String!): Category
  addContract (
    _id: ID
    rentalDate: Date!
    customer: Customer
    equipment:[Equipment]

  ): Contract
    addEquipment(
      name: String!, 
      description: String!,
      Image: String!,
      price: Int!,
      quantity: Int!,): Equipment

    addCustomer(
      _id: ID
      firstName: String!
      lastName: String!
      username: String!
      password: String!
      birthDate: String!
      email: String!
      phone: String!
    ): Customer
  }
`;

// export the typeDefs
module.exports = typeDefs;
