const responseService = {
  statusCodes: {
    ok: 200,
    created: 201,
    accepted: 202,
    noContent: 204,
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    internalServerError: 500,
    serviceUnavailable: 503,
  },

  success(message, data) {
    return {
      success: true,
      message,
      data,
      status: this.statusCodes.ok,
    };
  },

  error(message, error) {
    return {
      success: false,
      message,
      error,
      status: this.statusCodes.badRequest,
    };
  },

  unauthorizedError(message) {
    return {
      success: false,
      message,
      error: "Unauthorized",
      status: this.statusCodes.unauthorized,
    };
  },

  forbiddenError(message) {
    return {
      success: false,
      message,
      error: "Forbidden",
      status: this.statusCodes.forbidden,
    };
  },

  notFoundError(message) {
    return {
      success: false,
      message,
      error: "Not Found",
      status: this.statusCodes.notFound,
    };
  },

  internalServerError(message) {
    return {
      success: false,
      message,
      error: "Internal Server Error",
      status: this.statusCodes.internalServerError,
    };
  },

  serviceUnavailableError(message) {
    return {
      success: false,
      message,
      error: "Service Unavailable",
      status: this.statusCodes.serviceUnavailable,
    };
  },

  created(message, data) {
    return {
      success: true,
      message,
      data,
      status: this.statusCodes.created,
    };
  },

  accepted(message, data) {
    return {
      success: true,
      message,
      data,
      status: this.statusCodes.accepted,
    };
  },

  noContent(message, data) {
    return {
      success: true,
      message,
      data,
      status: this.statusCodes.noContent,
    };
  },

  badRequestError(message, error) {
    return {
      success: false,
      message,
      error,
      status: this.statusCodes.badRequest,
    };
  },
  conflictError(message, error) {
    return {
      success: false,
      message,
      error,
      status: this.statusCodes.conflict,
    };
  }
};

module.exports = responseService;
