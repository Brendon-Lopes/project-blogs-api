const httpStatusCodes = require('../helpers/httpStatusCodes');

const errorHandler = (error, _req, res) => {
  const { status, message } = error;

  if (!status) return res.status(httpStatusCodes.INTERNAL_SERVER).send();

  return res.status(status).json({ message });
};

module.exports = errorHandler;
