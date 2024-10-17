const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const {
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
} = require("../errors/index");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    throw new BadRequestError("Please provide both email and password!! :)");

  const user = await User.findOne({ email });

  if (!user)
    throw new UnauthenticatedError(
      "Not authorized to gain access to this resource!! :)"
    );

  const samePassword = await user.comparePassword(password);
  if (!samePassword) throw new UnauthenticatedError("Wrong Password!! :)");

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

module.exports = { login, register };
