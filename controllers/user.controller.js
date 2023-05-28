const User = require("../models/user.model");

async function createUser(req, res) {
  const { username, email, password } = req.body;

  if (!username || !email || !password)
    return res.status(400).json({ message: "All fields are required" });

  const result = await User.create({
    username,
    email,
    password,
  });

  return res.status(201).json({ message: "user created", id: result._id });
}

module.exports = {
  createUser,
};
