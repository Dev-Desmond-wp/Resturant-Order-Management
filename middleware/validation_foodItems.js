const Joi = require('joi');

const createfoodItemValidation = (req, res, next) => {
    const foodItemSchema = Joi.object({
      foodName: Joi.string()
        .trim()
        .notEmpty()
        .required()
        .pattern(new RegExp("^[a-zA-Z\s]+$"))
        .messages({
          "any.required": "foodName is required",
          "string.empty": "food name cannot be empty",

        }),
      description: Joi.string()
        .trim()
        .pattern(new RegExp("^[a-zA-Z\s]+$"))
        .required()
        .messages({
          "any.required": "description is required",
          "string.empty": "description cannot be empty",
          "string.pattern.base":
            "description must be text.",
        }),
      price: Joi.string()
      .trim()
      .pattern(new RegExp("/^\d+(\.\d{1,2})?$/"))
      .required()
      .messages({
        "any.required": "price is required",
        "string.empty": "price cannot be empty",
        "string.pattern.base": "Price cannot contain an Alphabet Or a Special Character",
      }),

    })

    const { error } = foodItemSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message
    })
  }

  next()
}

  
;


module.exports = {createfoodItemValidation};