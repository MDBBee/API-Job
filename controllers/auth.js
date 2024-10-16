const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { password, name, email } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashpassw = await bcrypt.hash(password, salt);

  const temUser = { password: hashpassw, name, email };

  const user = await User.create({ ...temUser });

  res.status(StatusCodes.CREATED).json({ user });
};
const login = async (req, res) => {
  console.log(req.body);
  const user = await req.body;
  console.log("Hi");
  res.status(StatusCodes.CREATED).json({ user });
};

module.exports = { login, register };
