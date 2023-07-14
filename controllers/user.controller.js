const responseService = require("../service/responseService");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/token/jwt");
const { userService } = require("../service");
const catchAsync = require("../utils/wrapper/wrapper");

exports.userSignUp = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await userService.findUserByEmail(email);
  if (existingUser) {
    return res
      .status(409)
      .json(responseService.conflictError("User already exists"));
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userService.createUser(email, hashedPassword);
  const token = generateToken({ email });
  return res.json(
    responseService.created("User created successfully", { token, user })
  );
});

exports.userLogin = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.findUserByEmail(email);
  if (!user) {
    return res
      .status(401)
      .json(responseService.notFoundError("User not found"));
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res
      .status(401)
      .json(responseService.unauthorizedError("Incorrect password"));
  }
  const token = generateToken({ email: email, id: user._id });
  const dataInfo = {
    token: token,
    user: user._id
  }
  return res.json(responseService.success("User logged in", dataInfo));
});

exports.protectedRoute = catchAsync(async (req, res) => {
  const { user } = req;
  return res.json(responseService.success("User authenticated", user));
});
