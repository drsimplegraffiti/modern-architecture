// write 404 and 500 error handlers

const responseService = require("../../service/responseService");

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  return res.status(404).json(responseService.notFoundError(error.message));
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json(responseService.internalServerError(err.message));
  next();
};

module.exports = {
  notFound,
  errorHandler,
};
