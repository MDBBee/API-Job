const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};
const login = async (req, res) => {
  console.log(req.body);
  const user = await req.body;
  console.log("Hi");
  res.status(StatusCodes.CREATED).json({ user });
};

module.exports = { login, register };
