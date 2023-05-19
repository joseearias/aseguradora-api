const authService = require("../services/auth.service");

exports.loginUser = async (req, res) => {
  const user = await authService.loginUser(req, res);

  res.json(user);
};
