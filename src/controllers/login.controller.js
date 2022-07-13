const login = require('../services/login.service');
const httpStatusCodes = require('../helpers/httpStatusCodes');

const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await login.signIn({ email, password });

    return res.status(httpStatusCodes.CREATED).json({ token });
  } catch ({ status, message }) {
    return res.status(status).json({ message });
  }
};

module.exports = {
  signIn,
};
