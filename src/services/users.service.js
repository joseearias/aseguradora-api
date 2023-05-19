const User = require("../models/user.model");

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.createUser = async (req, res) => {
  try {
    const user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    user.role = req.body.role;

    return await user.save();
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "Not found" });
    }
    res.sendStatus(204);
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, role } = req.body;
    const user = await User.findByIdAndUpdate(
      id,
      { name, email, role },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "Not found" });
    }
    return user;
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};
