const express = require("express");
const router = express.Router();
const { userSignUp, userLogin, protectedRoute } = require("../controllers");
const isAuth = require("../middleware/auth");
const { validateRequest, schemas } = require("../utils/validator/validator");

router.post("/register", validateRequest(schemas.SignupSchema), userSignUp);
router.post("/login", validateRequest(schemas.LoginSchema), userLogin);

router.use(isAuth);
router.get("/protected", protectedRoute);

module.exports = router;
