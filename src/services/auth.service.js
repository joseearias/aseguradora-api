const jwt = require("jsonwebtoken");

const User = require("../models/user.model");

const secret = "mysecretsshhh";

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).json({ message: "Incorrect username or password" });
  }

  const token = jwt.sign({ userId: user._id, role: user.role }, secret, {
    expiresIn: "1h",
  });
  res.json({ token });
};
