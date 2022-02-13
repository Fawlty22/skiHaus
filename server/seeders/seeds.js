const faker = require('faker');

const db = require('../config/connection');
const { Contract, Customer, Employee, Equipment } = require('../models');

db.once('open', async () => {
  await Equipment.deleteMany({});
 
  // create user data
  const employeeData = [];

  for (let i = 0; i < 10; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    employeeData.push({ username, email, password });
  }

  const createdEmployees = await Employee.collection.insertMany(employeeData);

  const equipmentData = [
    {
      name: 'Volkl',
     description: 'Scratch',
      condition: 'Good',
      price: 10.00, 
      quantity: 3,
      category: "Boots"

    },
      {
      name: 'Armada',
     description: 'ARV 96',
      condition: 'Fair',
      price: 10.00,
      quantity: 15,
      category: "Boots"
    },
    {
      name: 'Faction',
     description: 'Candide 5.0',
      condition: 'Good',
      price: 30,
      quantity: 5,
      category: "Ski"
    },
      {
      name: 'Faction',
     description: 'Candide 3.0',
      condition: 'New',
      price: 25.00,
      quantity: 6,
      category: "Ski"
    },
      {
      name: 'Black Crows',
     description: 'Atris',
      condition: 'Good',
      price: 35.00,
      quantity: 3,
      category: "Ski"
    },
      {
      name: '4FRNT',
     description: 'Devastator',
      condition: 'Good',
      price: 18.00,
      quantity: 8,
      category: "Snowboard"
    },
      {
      name: 'Elan',
     description: 'Ripstick 106',
      condition: 'New',
      price: 55.00,
      quantity: 7,
      category: "Snowboard"
      }
  ];

  const createdEquipment= await Equipment.collection.insertMany(equipmentData);

  

  console.log('all done!');
  process.exit(0);
});
