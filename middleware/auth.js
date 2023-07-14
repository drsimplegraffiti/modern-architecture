const logger = require("../logger/logger");
const User = require("../models/user.model");
const responseService = require("../service/responseService");
const { verifyToken } = require("../utils/token/jwt");

const isAuth = async (req, res, next) => {
  let token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json(responseService.unauthorizedError("Unauthorized token"));
  }

  try {
    const decoded = await verifyToken(token);
    if (!decoded) {
      return res
        .status(401)
        .json(responseService.unauthorizedError("Token expired"));
    }

    // Check if user still exists
    const user = await User.findById(decoded.id);
    if (!user) {
      return res
        .status(401)
        .json(responseService.unauthorizedError("User not found"));
    }
    req.user = decoded;
    next();
  } catch (error) {
    return res
      .status(401)
      .json(responseService.unauthorizedError("Unauthorized: " + error));
  }
};

module.exports = isAuth;
