const mongoose = require("mongoose");

async function DBconnect() {
  return mongoose.connect("mongodb://localhost:27017/rust-store");
}

module.exports = DBconnect;
