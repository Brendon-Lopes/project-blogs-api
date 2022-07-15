const Joi = require('joi');

const ERROR_MESSAGE = 'Some required fields are missing';

const newPostSchema = Joi.object({
  title: Joi.string().required().messages({
    'any.required': ERROR_MESSAGE,
    'string.empty': ERROR_MESSAGE,
  }),
  content: Joi.string().required().messages({
    'any.required': ERROR_MESSAGE,
    'string.empty': ERROR_MESSAGE,
  }),
  categoryIds: Joi.array().required().messages({
    'any.required': ERROR_MESSAGE,
  }),
});

module.exports = newPostSchema;
