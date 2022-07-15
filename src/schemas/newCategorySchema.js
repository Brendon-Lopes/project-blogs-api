const Joi = require('joi');

const newCategorySchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({
      'any.required': '"name" is required',
    }),
});

module.exports = newCategorySchema;