class CustomError extends Error {
  constructor(message, status) {
    super(message, status);
    this.status = status;
    this.message = message;
  }
}

const ErrorHandler = (err, req, res, next) => {
 
    if (err instanceof CustomError) {
        res.status(err.statusCode).send(err.message);
      } else {
        next(err);
      }
};

module.exports = ErrorHandler;
