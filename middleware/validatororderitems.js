const Joi = require('joi');

// RegExp for UUID version 4
const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

// CREATE ORDER ITEM VALIDATION
const orderItemSchema = Joi.object({
    orderId: Joi.string()
        .pattern(uuidRegex)
        .required()
        .messages({
            'string.pattern.base': 'Order ID must be a valid UUID',
            'any.required': 'Order ID is required'
        }),

    foodItemId: Joi.string()
        .pattern(uuidRegex)
        .required()
        .messages({
            'string.pattern.base': 'Food Item ID must be a valid UUID',
            'any.required': 'Food Item ID is required'
        }),

    quantity: Joi.number()
        .integer()
        .positive()
        .required()
        .messages({
            'number.base': 'Quantity must be a number',
            'number.integer': 'Quantity must be a whole number',
            'number.positive': 'Quantity must be greater than zero',
            'any.required': 'Quantity is required'
        }),

    priceAtOrder: Joi.number()
        .positive()
        .required()
        .messages({
            'number.base': 'Price at order must be a number',
            'number.positive': 'Price at order must be greater than zero',
            'any.required': 'Price at order is required'
        })
});

// VALIDATION MIDDLEWARE
const validateOrderItem = (req, res, next) => {
    const { error, value } = orderItemSchema.validate(req.body, {
        abortEarly: false
    });

    if (error) {
        return res.status(400).json({
            message: error.details.map(detail => detail.message)
        });
    }

    req.body = value;
    next();
};

module.exports = { validateOrderItem };