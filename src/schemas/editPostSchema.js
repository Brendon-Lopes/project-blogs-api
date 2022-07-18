const Joi = require('joi');

const ERROR_MESSAGE = 'Some required fields are missing';

const editPostSchema = Joi.object({
  title: Joi.string().required().messages({
    'any.required': ERROR_MESSAGE,
    'string.empty': ERROR_MESSAGE,
  }),
  content: Joi.string().required().messages({
    'any.required': ERROR_MESSAGE,
    'string.empty': ERROR_MESSAGE,
  }),
});

module.exports = editPostSchema;
