const db = require('./models/restaurant');
const data = require('./data/wenjiRestaurants.json');

async function seedData(){
    await db.deleteMany({});
    console.log('Deleted Restaurant...');
    await db.insertMany(data);
    console.log('Finished seeding Restaurants.');
    process.exit(0)
}

seedData();


