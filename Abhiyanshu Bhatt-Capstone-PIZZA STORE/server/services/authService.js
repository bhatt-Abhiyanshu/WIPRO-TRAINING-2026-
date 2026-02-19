const User = require("../models/User");
const { signToken } = require("../config/jwt");
const UserDTO = require("../dtos/userDTO");

exports.register = async (data) => {
  const existingUser = await User.findOne({ email: data.email });
  if (existingUser) {
    const error = new Error("Email already registered");
    error.statusCode = 400;
    throw error;
  }

  const user = await User.create(data);
  const token = signToken({ id: user._id, role: user.role });

  return {
    success: true,
    token,
    user: new UserDTO(user)
  };
};

exports.login = async ({ email, password }) => {
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.comparePassword(password))) {
    const error = new Error("Invalid credentials");
    error.statusCode = 401;
    throw error;
  }

  const token = signToken({ id: user._id, role: user.role });

  return {
    success: true,
    token,
    user: new UserDTO(user)
  };
};
