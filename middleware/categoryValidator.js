
const Joi = require('joi');

const validateCategory = (req, res, next) => {
const categorySchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(3)
    .max(50)
    .pattern(/^[a-zA-Z0-9\s&-]+$/)
    .required()
    .messages({
      'string.empty': 'Category name is required',
      'string.min': 'Category name must be at least 3 characters',
      'string.max': 'Category name must not exceed 50 characters',
      'string.pattern.base': 'Category name can only contain letters, numbers, spaces, & and -',
      'any.required': 'Category name is required'
    }),

  description: Joi.string()
    .trim()
    .min(5)
    .max(500)
    .pattern(/^[a-zA-Z0-9\s.,!?'-]+$/)
    .messages({
      'string.min': 'Description must be at least 5 characters',
      'string.max': 'Description must not exceed 500 characters',
      'string.pattern.base': 'Description contains invalid characters'
    })
});

  const { error } = categorySchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message
    });
  }

  next();
};

module.exports = { validateCategory };
