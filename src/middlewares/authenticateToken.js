const jwt = require("jsonwebtoken");

const secret = "mysecretsshhh";

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.userId = decoded.userId;
    req.role = decoded.role;
    next();
  });
};

const adminOnly = (req, res, next) => {
  if (req.role !== "Admin") {
    return res.status(403).json({ message: "Admin only" });
  }
  next();
};

module.exports = { authenticateToken, adminOnly };
