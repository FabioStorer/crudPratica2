const mongoose = require('mongoose');
const mongoDB = require('link do mongoDB');

async function main() {
    await mongoose.connect(mongoDB);
};

main().then(() => console.log('Successfully connected.')).catch((error => console.log(error)));

module.exports = mongoose;