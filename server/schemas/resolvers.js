const { AuthenticationError } = require("apollo-server-express");
const { User, Employee, Snowboard, Ski, Boot } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().select("-__v -password");
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
    addUser: async (parent, args) => {
      const user = await User.create(args);

      return user;
    },
  },
};

module.exports = resolvers;
