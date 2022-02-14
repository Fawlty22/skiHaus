const faker = require('faker');

const db = require('../config/connection');
const { Contract, Employee } = require('../models');
//i realize this is ridiculous but it wont let me destructure these ones below here EVEN THOUGH THE TWO ABOVE WORK JUST FINE!!!
const Ski = require('../models/Ski')
const Boot = require('../models/Boot')
const Snowboard = require('../models/Snowboard')
const User = require('../models/User')


db.once('open', async () => {
 
    await Ski.deleteMany({});
    await Boot.deleteMany({});
    await Snowboard.deleteMany({});
    await User.deleteMany({});
    await Employee.deleteMany({})

  // create user data
  const employeeData = [];

  for (let i = 0; i < 10; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    employeeData.push({ username, email, password });
  }

  const createdEmployees = await Employee.collection.insertMany(employeeData);

    // create user data
    const userData = [];
  
    for (let i = 0; i < 10; i += 1) {
      const username = faker.internet.userName();
      const email = faker.internet.email(username);
      const password = faker.internet.password();
  
      userData.push({ username, email, password });
    }
  
    const createdUsers = await User.collection.insertMany(userData);
  
    const skiData = [
      {
        brand: 'Volkl',
        model: 'Scratch',
        condition: 'Good'
      },
      {
        brand: 'Armada',
        model: 'ARV 96',
        condition: 'Fair'
      },
      {
        brand: 'Faction',
        model: 'Candide 5.0',
        condition: 'Good'
      },
      {
        brand: 'Faction',
        model: 'Candide 3.0',
        condition: 'New'
      },
      {
        brand: 'Black Crows',
        model: 'Atris',
        condition: 'Good'
      },
      {
        brand: '4FRNT',
        model: 'Devastator',
        condition: 'Good'
      },
      {
        brand: 'Elan',
        model: 'Ripstick 106',
        condition: 'New'
      }
    ];
  
    const createdSkis = await Ski.collection.insertMany(skiData);
  
    const bootData = [
      {
        brand: 'Atomic',
        model: 'Hawx 130',
        condition: 'Good'
      },
      {
        brand: 'Atomic',
        model: 'HAWX 130',
        condition: 'Fair'
      },
      {
        brand: 'Tecnica',
        model: 'Mach1 120',
        condition: 'Good'
      },
      {
        brand: 'Rossignol',
        model: 'Evo 70',
        condition: 'New'
      },
      {
        brand: 'Full Tilt',
        model: 'Ascendant SC',
        condition: 'Good'
      },
      {
        brand: 'K2',
        model: 'BFC 90',
        condition: 'Good'
      },
      {
        brand: 'Tecnica',
        model: 'Cochise 120',
        condition: 'New'
      }
    ];
  
    const createdBoots = await Boot.collection.insertMany(bootData);
  
    const snowboardData = [
      {
        brand: 'Jones',
        model: 'Flagship',
        condition: 'Good'
      },
      {
        brand: 'Lib Tech',
        model: 'Orca',
        condition: 'Fair'
      },
      {
        brand: 'Jones',
        model: 'Stratos',
        condition: 'Good'
      },
      {
        brand: 'Salomon',
        model: 'Sickstick',
        condition: 'New'
      },
      {
        brand: 'Burton',
        model: 'Custom X',
        condition: 'Good'
      },
      {
        brand: 'Salomon',
        model: 'Sight 2022',
        condition: 'Good'
      },
      {
        brand: 'Ride',
        model: 'Warpig',
        condition: 'New'
      }
    ];
  
    const createdSnowboards = await Snowboard.collection.insertMany(snowboardData);

  console.log('all done!');
  process.exit(0);
});
