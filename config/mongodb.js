// const mongoose = require("mongoose");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

// async function DBconnect() {
//   return mongoose.connect("mongodb://localhost:27017/rust-store");
// }

const uri = process.env.ATLAS_PASSWD;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function DBconnect() {
  return await client.connect();
}

module.exports = DBconnect;
