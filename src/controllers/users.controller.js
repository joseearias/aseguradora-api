const usersService = require("../services/users.service");

exports.getUsers = async (req, res) => {
  const users = await usersService.getUsers(req, res);
  res.json(users);
};

exports.createUser = async (req, res) => {
  const user = await usersService.createUser(req, res);
  res.json(user);
};

exports.deleteUser = async (req, res) => {
  await usersService.deleteUser(req, res);
};

exports.editUser = async (req, res) => {
  const user = await usersService.editUser(req, res);
  res.json(user);
};
