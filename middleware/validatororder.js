const Joi = require('joi');


const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;


const orderSchema = Joi.object({
    customerId: Joi.string()
        .pattern(uuidRegex)
        .required()
        .messages({
            'string.pattern.base': 'Customer ID must be a valid UUID',
            'any.required': 'Customer ID is required'
        }),

    totalPrice: Joi.number()
        .positive()
        .required()
        .messages({
            'number.base': 'Total price must be a number',
            'number.positive': 'Total price must be greater than zero',
            'any.required': 'Total price is required'
        }),

    status: Joi.string()
        .valid('Pending', 'Preparing', 'Ready', 'Delivered')
        .default('Pending')
});


const validateOrder = (req, res, next) => {
    const { error, value } = orderSchema.validate(req.body, {
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

module.exports = { validateOrder };