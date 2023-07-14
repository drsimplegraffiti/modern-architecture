const Joi = require("joi");
const responseService = require("../../service/responseService");

const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const errorMessage = error.details[0].message.replace(/"/g, "");
      return res.json(responseService.badRequestError(errorMessage));
    }
    if (!req.value) {
      req.value = {}; 
    }
    req.value["body"] = req.body;
    next();
  };
};

const schemas = {
  SignupSchema: Joi.object().keys({
    email: Joi.string().required().trim(),
    password: Joi.string().required().min(6),
  }),
  LoginSchema: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

module.exports = {
  validateRequest,
  schemas,
};
