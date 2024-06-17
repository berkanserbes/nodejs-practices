const BadRequest = require("./bad-request");
const NotFoundError = require("./not-found");
const CustomApiError = require("./custom-api-error");
const UnauthenticatedError = require("./unauthenticated");

module.exports = {
  BadRequest,
  NotFoundError,
  CustomApiError,
  UnauthenticatedError,
};
