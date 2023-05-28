const mongoose = require("mongoose");
require("dotenv").config();

async function DBconnect() {
  return mongoose.connect("mongodb://localhost:27017/rust-store");
}

// const uri = process.env.ATLAS_PASSWD;

// async function DBconnect() {
//   return await mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// }

module.exports = DBconnect;
