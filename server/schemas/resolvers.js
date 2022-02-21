const { AuthenticationError } = require("apollo-server-express");
const { Employee, User, Ski, Snowboard, Boot, Contract } = require("../models");

const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().select("-__v")
    },
    user: async (parent, { email }) => {
      return User.findOne({ email: email }).select("-__v")
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
      .populate('equipment.boots')
      .populate('equipment.skis')
      .populate('equipment.snowboards')
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
    editUser: async (parent, { _id, username, firstName, lastName, email, birthDate, phone }) => {
      const userUpdate = await User.findByIdAndUpdate(
        { _id: _id },
        { $set: { username: username, firstName: firstName, lastName: lastName, email: email, birthDate: birthDate, phone: phone } },
        { new:true }
        )
        return userUpdate;
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
    updateSki: async (parent, {_id, brand, model, condition}) => {
      return await Ski.findByIdAndUpdate(
        { _id: _id },
        { $set: { brand: brand, model: model, condition: condition } },
        { new: true }
      ); 
    },
    deleteSki: async (parent, { _id }) => {
      return await Ski.findOneAndDelete(
        { _id: _id },
      );
    },
    addSnowboard: async (parent, args) => {
      const snowboard = await Snowboard.create(args);

      return snowboard;
    },
    updateSnowboard: async (parent, {_id, brand, model, condition}) => {
      return await Snowboard.findByIdAndUpdate(
        { _id: _id },
        { $set: { brand: brand, model: model, condition: condition } },
        { new: true }
      );
    },
    deleteSnowboard: async (parent, { _id }) => {
      return await Snowboard.findByIdAndDelete(
        { _id: _id },
      );
    },
    addBoot: async (parent, args) => {
      const boot = await Boot.create(args);

      return boot;
    },
    updateBoot: async (parent, {_id, brand, model, condition}) => {
      return await Boot.findByIdAndUpdate(
        { _id: _id },
        { $set: { brand: brand, model: model, condition: condition } },
        { new: true }
      );
    },
    deleteBoot: async (parent, { _id }) => {
      return await Boot.findOneAndDelete(
        { _id: _id },
      );
    },
    createContract: async (parent, args) => {
      console.log('create contract line 102')
      console.log('args', args)

      const contract = await Contract.create(args);
      console.log('contract', contract)
      console.log('_*_*_*_*_*_*_', contract.equipment.boots )

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

      const updatedUser = await User.findOneAndUpdate(
        { username: args.user }, 
        { $addToSet: { contracts: contract._id } },
        { new: true }
      )
      .populate('contracts');

      return updatedUser;
    },
    deactivateContract: async (parent, args) => {
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
    },
    editContract: async (parent, { _id, checkoutOutDate, checkoutInDate, equipment }) => {
      const updatedContract = await Contract.findOneAndUpdate(
        { _id: _id },
        { $set: { checkoutOutDate: checkoutOutDate, checkoutInDate: checkoutInDate, equipment: equipment } },
        { new: true }
      );
      return updatedContract;
    },
   
  },
};

module.exports = resolvers;



