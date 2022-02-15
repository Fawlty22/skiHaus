const { AuthenticationError } = require("apollo-server-express");
const { Employee, Contract } = require("../models");
//again fucking ridiculous but it wont let me destructure these 
const User = require('../models/User')
const Ski = require('../models/Ski')
const Snowboard = require('../models/Snowboard')
const Boot = require('../models/Boot')


const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().select("-__v -password")
      .populate('contracts');
    },
    boots: async () => {
      return Boot.find().select("-__v");
    },
    skis: async () => {
      return Ski.find().select("-__v");
    },
    snowboards: async () => {
      return Snowboard.find().select("-__v");
    },
    employee: async (parent, args, context) => {
      if (context.employee) {
        const employee = await Employee.findById(context.employee._id);
        return employee;
      }
      throw new AuthenticationError("Not logged in");
    },
    employees: async () => {
      return await Employee.find();
    },
    //find all contract
    contracts: async () => {
      return await Contract.find()
    }, 
    //find one contract
    contract: async (parent, args) => {
      return await Contract.findOne({ _id: args.id})
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
    addUser: async (parent, args) => {
      const user = await User.create(args);
      

      return user;
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
    addSki: async (parent, args) => {
      const ski = await Ski.create(args);

      return ski; 
    },
    addSnowboard: async (parent, args) => {
      const snowboard = await Snowboard.create(args);

      return snowboard;
    },
    addBoot: async (parent, args) => {
      const boot = await Boot.create(args);

      return boot;
    },
    createContract: async (parent, args) => {
      console.log('args', args)

      const contract = await Contract.create(args);
      console.log('contract', contract)

      const updatedUser = await User.findOneAndUpdate(
        { username: args.user }, 
        { $addToSet: { contracts: contract._id } },
        { new: true }
      );
      
        console.log('updatedUser', updatedUser)
      return updatedUser;
    },
  },
};

module.exports = resolvers;



