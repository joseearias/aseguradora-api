const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: {
    type: String,
    enum: {
      values: ["Admin", "Gerente", "Capturista", "Cliente"],
      message: "{VALUE} no es un rol válido",
    },
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
