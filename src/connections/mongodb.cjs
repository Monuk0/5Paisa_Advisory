const logger = require('./../utils/logger.cjs');
require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

async function connectToMongo() {
  try {
    await mongoose.connect(uri).then(() => {
       logger.info("✅ Connected to MongoDB via Mongoose!");
    }).catch((err) => {
       logger.error(`❌ Mongoose connection error: ${err.message}` );
    })
  } catch (err) {
   
  }
}

module.exports = connectToMongo;