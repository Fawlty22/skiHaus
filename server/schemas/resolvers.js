const { AuthenticationError } = require("apollo-server-express");
const { Employee, Category , Customer, Equipment } = require("../models");
const { signToken } = require("../utils/auth");
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

const resolvers = {
  Query: {
    //find all categories
    categories: async () => {
      return await Category.find();
    },
    //find all equipment
    equipment: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Equipment.find(params).populate('category');
    },
    //find single equipment
    equipment: async (parent, { _id }) => {
      return await Equipment.findById(_id).populate('category');
    },
    //finnd all customers and populate contracts 
    customer: async (parent, args, context) => {
      if (context.customer) {
        const customer = await Customer.findById(context.customer._id).populate({
          path: 'contract.equipment',
          populate: 'category'
        });

        customer.contract.sort((a, b) => b.rentalDate - a.rentalDate);

        return customer;
      }

      throw new AuthenticationError('Not logged in');
    },
    contract: async (parent, { _id }, context) => {
      if (context.customer) {
        const customer = await Customer.findById(context.customer._id).populate({
          path: 'contract.equipment',
          populate: 'category'
        });

        return Customer.contract.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },  
    
    Date: new GraphQLScalarType({
      name: 'Date',
      description: 'Date custom scalar type',
      parseValue(value) {
        return new Date(value); // value from the client
      },
      serialize(value) {
        return value.getTime(); // value sent to the client
      },
      parseLiteral(ast) {
        if (ast.kind === Kind.INT) {
          return parseInt(ast.value, 10); // ast value is always in string format
        }
        return null;
      },
    
  },
 
  Mutation: {
    addEmployee: async (parent, args) => {
      const employee = await Employee.create(args);
      const token = signToken(employee);

      return { token, employee };
    },
    updateEmployee: async (parent, args, context) => {
      if (context.employee) {
        return await Employee.findByIdAndUpdate(context.employee._id, args, {
          new: true,
        });
      }
    },
    login: async (parent, { username, password }) => {
      console.log("login mutation line 47", username, password);
      const employee = await Employee.findOne({ username });

      if (!employee) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await employee.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(employee);

      return { token, employee };
    },
    addCustomer: async (parent, args) => {
      const customer = await Customer.create(args);

      return customer;
    },
  },
};

module.exports = resolvers;
