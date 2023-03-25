const { User } = require('../models');

const userdata = [
    {
        username: 'FuzzyPenguin23',
        email: 'fuzzypenguin23@example.com',
        password: 'FuzPeng@23!',
      },
      {
        username: 'Happyflower',
        email: 'happy80@example.com',
        password: 'password123',
      },
      {
        username: 'RainbowWarrior87',
        email: 'rainbowwarrior87@example.com',
        password: 'R@inb0w87!',
      },
      {
        username: 'WhimsicalUnicorn',
        email: 'whimsicalunicorn@example.com',
        password: 'Un1cornW@him!',
      },
      {
        username: 'HappyHiker99',
        email: 'happyhiker99@example.com',
        password: 'H@ppyHiker99!',
      },
      {
        username: 'DaringDragonfly',
        email: 'daringdragonfly@example.com',
        password: 'Dr@gonfly88!',
      },
      {
        username: 'BeachBum',
        email: 'Bum19@example.com',
        password: 'password123',
      },
      {
        username: 'CoffeeCraze',
        email: 'coffee30@example.com',
        password: '',
      },
      {
        username: 'FoodieFrenzy',
        email: 'Frenzy78@example.com',
        password: 'password123',
      },
      {
        username: 'TravelingTurtle',
        email: 'Turtle00@example.com',
        password: 'password123',
      },
      {
        username: 'ZenMaster',
        email: 'ZZenm@example.com',
        password: 'password123',
      },
    ];

    const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });
    
    module.exports = seedUsers;
    