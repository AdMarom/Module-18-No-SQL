const names = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Courtney',
    'Gillian',
    'Clark',
    'Jared',
    'Grace',
    'Kelsey',
    'Tamar',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
];

const thoughts = [
    "Just had a great workout at the gym! Feeling pumped and energized #fitness #healthylifestyle", 
    "Excited to announce the launch of our new product! Check it out at our website #newproduct #innovation", 
    "Had a fantastic time at the beach today with my friends! #beachlife #funinthesun", 
    "Watching the sunset from my balcony is the perfect way to end the day #sunset #relaxation", 
    "Can't wait for the weekend! Planning a road trip with my family #weekendvibes #familytime", 
    "Great meeting with the team today! Making progress towards our goals #teamwork #success", 
    "Enjoying a cup of coffee and a good book on this rainy day #coffee #reading", 
    "So proud of my daughter for graduating college today! #proudmom #graduation", 
    "Happy International Women's Day! Let's celebrate the achievements of women around the world #IWD #girlpower",
    "Attended an inspiring TED talk today on the power of creativity #TEDtalks #creativity"]


const userReactions = [
    "Wow!",
    "Nice!",
    "Interesting",
    "Cool",
    "Awesome",
    "Great job!",
    "Impressive",
    "Thanks for sharing",
    "Keep it up",
    "I agree"
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
    `${getRandomArrItem(names)}`;


// Gets a random thought
const getRandomThoughts = () =>
    `${getRandomArrItem(thoughts)}}`;

// Function to generate random reactions that we can add to thoughts object.
const getRandomReactions = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtname: getRandomArrItem(userReactions),
        });
    }
    return results;
};

// const getRandomFriends = () => {
//     const randomNames = names.map(() => {
//         const randomIndex = Math.floor(Math.random() * names.length);
//         return names[randomIndex];
//       });
//       return randomNames;
// };



// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomReactions, getRandomThoughts};
