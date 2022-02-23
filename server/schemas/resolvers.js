const { AuthenticationError } = require("apollo-server-express");
const { Employee, User, Ski, Snowboard, Boot, Contract } = require("../models");

const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      if (context.employee) {
        return User.find().select("-__v").populate('contracts');
      } else {
        throw new AuthenticationError('You are not authorized to perform this action')
      }
    },
    user: async (parent, { email }, context) => {
      if (context.employee) {
        return User.findOne({ email: email }).select("-__v").populate('contracts');
      } else {
        throw new AuthenticationError('You are not authorized')
      } 
    },
    boots: async (parent, args, context) => {
      if (context.employee) {
        return Boot.find().select("-__v");
      } else {
        throw new AuthenticationError('You are not authorized to perform this action')
      }
    },
    skis: async (parent, args, context) => {
      if (context.employee) {
        return Ski.find().select("-__v");
      } else {
        throw new AuthenticationError('You are not authorized to perform this action')
      }
    },
    snowboards: async (parent, args, context) => {
      if (context.employee) {
        return Snowboard.find().select("-__v");
      } else {
        throw new AuthenticationError('You are not authorized to perform this action')
      }
    },
    employee: async (parent, args, context) => {
      if (context.employee) {
        const employee = await Employee.findById(context.employee._id);
        return employee;
      } else {
        throw new AuthenticationError('You are not authorized to perform this action')
      }
    },
    employees: async (parent, args, context) => {
      if (context.employee) {
        return await Employee.find();
      } else {
        throw new AuthenticationError('You are not authorized to perform this action')
      }
    },
    //find all contract
    contracts: async (parent, args, context) => {
      if (context.employee) {
        return await Contract.find()
          .populate("equipment.boots")
          .populate("equipment.skis")
          .populate("equipment.snowboards")
          .populate("user");
      } else {
        throw new AuthenticationError('You are not authorized to perform this action')
      }
    },
    //find one contract
    contract: async (parent, args, context) => {
      if (context.employee) {
        return await Contract.findOne({ _id: args._id })
          .populate("equipment.boots")
          .populate("equipment.skis")
          .populate("equipment.snowboards")
          .populate("user");
      } else {
        throw new AuthenticationError('You are not authorized to perform this action')
      }
    }
  },

  Mutation: {
    addEmployee: async (parent, args, context) => {
      
        const employee = await Employee.create(args);
        const token = signToken(employee);

        return { token, employee };
    },
    updateEmployee: async (parent, args, context) => {
      if (context.employee) {
        return await Employee.findByIdAndUpdate(context.employee._id, args, {
          new: true,
        });
      } else {
        throw new AuthenticationError('You are not authorized to perform this action')
      }
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    editUser: async (
      parent,
      { _id, username, firstName, lastName, email, birthDate, phone },
      context
    ) => {
      if (context.employee) {
        const userUpdate = await User.findByIdAndUpdate(
          { _id: _id },
          {
            $set: {
              username: username,
              firstName: firstName,
              lastName: lastName,
              email: email,
              birthDate: birthDate,
              phone: phone,
            },
          },
          { new: true }
        );
        return userUpdate;
      } else {
        throw new AuthenticationError('You are not authorized to perform this action')
      }
    },
    login: async (parent, { username, password }) => {
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
    addSki: async (parent, args, context) => {
      if (context.employee) {
        const ski = await Ski.create(args);

        return ski;
      } else {
        throw new AuthenticationError('You are not authorized to perform this action')
      }
    },
    updateSki: async (parent, { _id, brand, model, condition }, context) => {
      if (context.employee) {
        return await Ski.findByIdAndUpdate(
          { _id: _id },
          { $set: { brand: brand, model: model, condition: condition } },
          { new: true }
        );
      } else {
        throw new AuthenticationError('You are not authorized to perform this action')
      }
    },
    deleteSki: async (parent, { _id }, context) => {
      if (context.employee) {
        return await Ski.findOneAndDelete({ _id: _id });
      } else {
        throw new AuthenticationError('You are not authorized to perform this action')
      }
    },
    addSnowboard: async (parent, args, context) => {
      if (context.employee) {
        const snowboard = await Snowboard.create(args);

        return snowboard;
      } else {
        throw new AuthenticationError('You are not authorized to perform this action')
      }
    },
    updateSnowboard: async (parent, { _id, brand, model, condition }, context) => {
      if (context.employee) {
        return await Snowboard.findByIdAndUpdate(
          { _id: _id },
          { $set: { brand: brand, model: model, condition: condition } },
          { new: true }
        );
      } else {
        throw new AuthenticationError('You are not authorized to perform this action')
      }
    },
    deleteSnowboard: async (parent, { _id }, context) => {
      if (context.employee) {
        return await Snowboard.findByIdAndDelete({ _id: _id });
      } else {
        throw new AuthenticationError('You are not authorized to perform this action')
      }
    },
    addBoot: async (parent, args, context) => {
      if (context.employee) {
        const boot = await Boot.create(args);

        return boot;
      } else {
        throw new AuthenticationError('You are not authorized to perform this action')
      }
    },
    updateBoot: async (parent, { _id, brand, model, condition }, context) => {
      if (context.employee) {
        return await Boot.findByIdAndUpdate(
          { _id: _id },
          { $set: { brand: brand, model: model, condition: condition } },
          { new: true }
        );
      } else {
        throw new AuthenticationError('You are not authorized to perform this action')
      }
    },
    deleteBoot: async (parent, { _id }, context) => {
      if (context.employee) {
        return await Boot.findOneAndDelete({ _id: _id });
      } else {
        throw new AuthenticationError('You are not authorized to perform this action')
      }
    },
    createContract: async (parent, args, context) => {
      if (context.employee) {
        const contract = await Contract.create(args);
        const updatedSkis = await Ski.updateMany(
          { _id: { $in: contract.equipment.skis } },
          { $set: { available: false } },
          { new: true }
        );
        const updatedSnowboards = await Snowboard.updateMany(
          { _id: { $in: contract.equipment.snowboards } },
          { $set: { available: false } },
          { new: true }
        );
        const updatedBoots = await Boot.updateMany(
          { _id: { $in: contract.equipment.boots } },
          { $set: { available: false } },
          { new: true }
        );
        console.log(args)
        const updatedUser = await User.findOneAndUpdate(
          { username: args.username },
          { $addToSet: { contracts: contract._id } },
          { new: true }
        ).populate("contracts");

        return updatedUser;
      } else {
        throw new AuthenticationError('You are not authorized to perform this action')
      }
    },
    deactivateContract: async (parent, args, context) => {
      if (context.employee) {
        //find contract by ID
        const updatedContract = await Contract.findOneAndUpdate(
          { _id: args._id },
          { $set: { active: false } },
          { new: true }
        );
        //update each piece of gear in each array
        const updatedSkis = await Ski.updateMany(
          { _id: { $in: updatedContract.equipment.skis } },
          { $set: { available: true } },
          { new: true }
        );
        const updatedSnowboards = await Snowboard.updateMany(
          { _id: { $in: updatedContract.equipment.snowboards } },
          { $set: { available: true } },
          { new: true }
        );
        const updatedBoots = await Boot.updateMany(
          { _id: { $in: updatedContract.equipment.boots } },
          { $set: { available: true } },
          { new: true }
        );
        //return new contract
        return updatedContract;
      } else {
        throw new AuthenticationError('You are not authorized to perform this action')
      }
    },
    editContract: async (
      parent,
      { _id, checkoutOutDate, checkoutInDate, equipment },
      context
    ) => {
      if (context.employee) {
        const updatedContract = await Contract.findOneAndUpdate(
          { _id: _id },
          {
            $set: {
              checkoutOutDate: checkoutOutDate,
              checkoutInDate: checkoutInDate,
              equipment: equipment,
            },
          },
          { new: true }
        );
        return updatedContract;
      } else {
        throw new AuthenticationError('You are not authorized to perform this action')
      }
    },
  },
};

module.exports = resolvers;
