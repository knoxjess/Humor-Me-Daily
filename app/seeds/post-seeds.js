const { NONE } = require('sequelize');
const { Post } = require('../models');

const postdata = [
  {
    title: 'Grape ',
    description:
     'What did the grape say when it got stepped on? It let out a little wine.',
    user_id: 10,
  },
  {
    title: 'Math',
    description:
      'Why was the math book sad?  Because it had too many problems.',
    user_id: 8,
  },
  {
    title:
      'Pasta',
    description:
      'What do you call fake spaghetti?  An impasta.',
    user_id: 1,
  },
  {
    title: 'Penguin',
    description:
      'How does a penguin build its house? Igloos it together.',
    user_id: 4,
  },
  {
    title: 'Seagulls',
    description:
      'Why do seagulls fly over the sea?  Because if they flew over the bay, theyd be bagels.',
    user_id: 7,
  },
  {
    title: 'Science',
    description:
      'Why dont scientists trust atoms? Because they make up everything',
    user_id: 4,
  },
  {
    title: 'Chiken',
    description:
      'Why did the chicken cross the playground? To get to the other slide.',
    user_id: 1,
  },
  {
    title: 'Mooooo',
    description:
      'Why do cows wear bells? Because their horns dont work.',
    user_id: 1,
  },
  {
    title: 'Bear',
    description:
      'What do you call a bear with no teeth? A gummy bear.',
    user_id: 9,
  },
  {
    title: 'Llama',
    description:
      'Why did the llama join a choir? Because he had a lot of alpaca-tude!',
    user_id: 5,
  },
  {
    title: 'Cats',
    description:
      'Why did the cat join the Red Cross? She wanted to be a first-aid kit-tie.',
    user_id: 3,
  },
  {
    title: 'Cat',
    description:
      'What do you call a cat thats a fan of EDM? DJ Scratch-n-Sniff.',
    user_id: 10,
  },
  {
    title: 'Donec dapibus.',
    description:
      'fasd dsfasd garg ags aosdif dasf sdag sda dsa fdsa fds fasd fds fdsa',
    user_id: 8,
  },
  {
    title: 'Dog',
    description:
      'What do you call a dog with a fever? A hot dog!',
    user_id: 3,
  },
  {
    title:
      'SKELTON',
    description:
      'Why dont skeletons fight each other? They dont have the guts.',
    user_id: 3,
  },
  {
    title:
      'wife',
    description:
      'I told my wife she was drawing her eyebrows too high. She looked surprised.',
    user_id: 7,
  },
  {
    title: 'Boomerang',
    description:
      'What do you call a boomerang that doesnt come back? A stick.',
    user_id: 6,
  },
  {
    title: 'Whiskey',
    description:
      'Im on a whiskey diet. Ive lost three days already!',
    user_id: 4,
  },
  {
    title: 'Acupuncture',
    description:
      'I dont trust people that do acupuncture. Theyre back stabbers.',
    user_id: 6,
  },
  {
    title:
      'Weddings',
    description:
      'Why do melons have weddings? Because they cantaloupe!',
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
