const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");

const privateKey = fs.readFileSync(path.join(__dirname, "../../private.key"), "utf8");

function generateToken(payload) {
  return jwt.sign(payload, privateKey, {
    algorithm: "RS512",
    expiresIn: "1h",
  });
}

function verifyToken(token) {
  const publicKey = fs.readFileSync(path.join(__dirname, "../../public.key"), "utf8");
  return jwt.verify(token, publicKey);
}

module.exports = { generateToken, verifyToken };
