class ErrorHandler extends Error {
    constructor(statusCode, message, data) {
      super();
      this.statusCode = statusCode;
      this.message = message.front;
      this.data = data ? data : message.log;
      this.inputError = message.inputError;
    }
};

module.exports = ErrorHandler;