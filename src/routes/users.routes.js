const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users.controller");
const {
  authenticateToken,
  adminOnly,
} = require("../middlewares/authenticateToken");

router.get("/", usersController.getUsers);
router.post("/", authenticateToken, adminOnly, usersController.createUser);
router.delete("/:id", authenticateToken, adminOnly, usersController.deleteUser);
router.put("/:id", authenticateToken, adminOnly, usersController.editUser);

module.exports = router;
