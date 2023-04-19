const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomName, getRandomReactions, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await Thought.deleteMany({});
  // Drop existing users
  await User.deleteMany({});

  // Create empty array to hold the students
  const users = [];
  const thoughts = [];

  // Loop 20 times
  //for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const reaction = getRandomReactions(1);
    const username = getRandomName();
    const email = `${username}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}${'@email.com'}`;
    const userthought = getRandomThoughts();
    //const friend = getRandomFriends();


    users.push({
      username,
      email,
      userthought,
    });

    thoughts.push({
        userthought,
        username,
        reaction
    })
  //}

  await Thought.collection.insertMany(thoughts);

  await User.collection.insertMany(users);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts)
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
