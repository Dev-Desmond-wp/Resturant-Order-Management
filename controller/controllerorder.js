const { order, customer } = require('../models');

// CREATE ORDER
const createOrder = async (req, res) => {
    try {
        const { customerId, totalPrice, status } = req.body;

        const existingCustomer = await customer.findByPk(customerId);

        if (!existingCustomer) {
            return res.status(404).json({
                message: 'Customer not found'
            });
        }

        const newOrder = await order.create({
            customerId,
            totalPrice,
            status
        });

        res.status(201).json({
            message: 'Order created successfully',
            data: newOrder
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// GET ALL ORDERS
const getAllOrders = async (req, res) => {
    try {
        const allOrders = await order.findAll();

        res.status(200).json({
            message: 'Orders retrieved successfully',
            data: allOrders
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// GET SINGLE ORDER
const getSingleOrder = async (req, res) => {
    try {
        const { id } = req.params;

        const singleOrder = await order.findByPk(id, {
            attributes: [
                'id',
                'customerId',
                'totalPrice',
                'status'
            ],
            include: [
                {
                    model: customer,
                    as: 'customer',
                    attributes: [
                        'id',
                        'firstName',
                        'lastName',
                        'email',
                        'city'
                    ]
                }
            ]
        });

        if (!singleOrder) {
            return res.status(404).json({
                message: 'Order not found'
            });
        }

        res.status(200).json({
            message: 'Order retrieved successfully',
            data: singleOrder
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// UPDATE ORDER
const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;

        const singleOrder = await order.findByPk(id);

        if (!singleOrder) {
            return res.status(404).json({
                message: 'Order not found'
            });
        }

        await singleOrder.update(req.body);

        res.status(200).json({
            message: 'Order updated successfully',
            data: singleOrder
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// DELETE ORDER
const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;

        const singleOrder = await order.findByPk(id);

        if (!singleOrder) {
            return res.status(404).json({
                message: 'Order not found'
            });
        }

        await singleOrder.destroy();

        res.status(200).json({
            message: 'Order deleted successfully'
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


module.exports = {
    createOrder,
    getAllOrders,
    getSingleOrder,
    updateOrder,
    deleteOrder
};