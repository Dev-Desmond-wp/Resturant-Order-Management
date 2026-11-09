const Joi = require('joi');

const createCustomerValidation = (req, res, next) => {
    const customerSchema = Joi.object({
      firstName: Joi.string()
        .trim()
        .pattern(new RegExp("^[A-Za-z]{3,}$"))
        .required()
        .messages({
          "any.required": "First name is required",
          "string.empty": "First name cannot be empty",
          "string.pattern.base":
            "First name must be letters only either lowercase or uppercase and it must be at least 3 characters long.",
        }),
      lastName: Joi.string()
        .trim()
        .pattern(new RegExp("^[A-Za-z]{3,}$"))
        .required()
        .messages({
          "any.required": "Last name is required",
          "string.empty": "Last name cannot be empty",
          "string.pattern.base":
            "Last name must be letters only either lowercase or uppercase and it must be at least 3 characters long.",
        }),
      email: Joi.string().trim().email().required().messages({
        "any.required": "Email is required",
        "string.empty": "Email cannot be empty",
        "string.email": "Email must be a valid email address",
      }),
      password: Joi.string().pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')).required().messages({
            "any.required": "Password is required",
            "string.pattern.base": "Password must contain at least one lowercase, uppercase, digit and special character and must be minimum of 8 characters",
    
        }),

  city: Joi.string()
        .trim()
        .min(2)
        .max(20)
        .pattern(new RegExp("^[a-zA-Z\\s'-]+$"))
        .required()
        .messages({
          "any.required": "City is required",
          "string.empty": "City cannot be empty",
          "string.min": "City name must be at least 2 characters long",
          "string.max": "City name cannot exceed 20 characters",
          "string.pattern.base": "City name can only contain letters, spaces, hyphens.",
        })



    })

  const { error } = customerSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message
    })
  }

  next()
};


module.exports = {createCustomerValidation};