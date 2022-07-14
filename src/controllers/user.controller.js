const user = require('../services/user.service');
const httpStatusCodes = require('../helpers/httpStatusCodes');

const create = async (req, res) => {
  const userInfo = req.body;

  try {
    const token = await user.create(userInfo);

    return res.status(httpStatusCodes.CREATED).json({ token });
  } catch ({ status, message }) {
    return res.status(status).json({ message });
  }
};

module.exports = {
  create,
};
