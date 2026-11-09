const { OrderItem, order, foodItems } = require('../models');

// CREATE ORDER ITEM
const createOrderItem = async (req, res) => {
    try {
        const { orderId, foodItemId, quantity, price } = req.body;

        const existingOrder = await order.findByPk(orderId);

        if (!existingOrder) {
            return res.status(404).json({
                message: 'Order not found'
            });
        }

        const existingFoodItem = await foodItems.findByPk(foodItemId);

        if (!existingFoodItem) {
            return res.status(404).json({
                message: 'Food item not found'
            });
        }

        const newOrderItem = await OrderItem.create({
            orderId,
            foodItemId,
            quantity,
            price
        });

        res.status(201).json({
            message: 'Order item created successfully',
            data: newOrderItem
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// GET ALL ORDER ITEMS
const getAllOrderItem = async (req, res) => {
    try {
        const allOrderItem = await OrderItem.findAll();

        res.status(200).json({
            message: 'Order items retrieved successfully',
            data: allOrderItem
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// GET SINGLE ORDER ITEM
const getSingleOrderItem = async (req, res) => {
    try {
        const { id } = req.params;

        const singleOrderItem = await OrderItem.findByPk(id, {
            attributes: [
                'id',
                'orderId',
                'foodItemId',
                'quantity',
                'price'
            ],
            include: [
                {
                    model: order,
                    as: 'order',
                    attributes: [
                        'id',
                        'customerId',
                        'totalPrice',
                        'status'
                    ]
                },
                {
                    model: foodItems,
                    as: 'foodItem',
                    attributes: [
                        'id',
                        'foodName',
                        'description',
                        'price',
                        'categoryId'
                       
                    ]
                }
            ]
        });

        if (!singleOrderItem) {
            return res.status(404).json({
                message: 'Order item not found'
            });
        }

        res.status(200).json({
            message: 'Order item retrieved successfully',
            data: singleOrderItem
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// UPDATE ORDER ITEM
const updateOrderItem = async (req, res) => {
    try {
        const { id } = req.params;

        const singleOrderItem = await OrderItem.findByPk(id);

        if (!singleOrderItem) {
            return res.status(404).json({
                message: 'Order item not found'
            });
        }

        await singleOrderItem.update(req.body);

        res.status(200).json({
            message: 'Order item updated successfully',
            data: singleOrderItem
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// DELETE ORDER ITEM
const deleteOrderItem = async (req, res) => {
    try {
        const { id } = req.params;

        const singleOrderItem = await OrderItem.findByPk(id);

        if (!singleOrderItem) {
            return res.status(404).json({
                message: 'Order item not found'
            });
        }

        await singleOrderItem.destroy();

        res.status(200).json({
            message: 'Order item deleted successfully'
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


module.exports = {
    createOrderItem,
    getAllOrderItem,
    getSingleOrderItem,
    updateOrderItem,
    deleteOrderItem
};