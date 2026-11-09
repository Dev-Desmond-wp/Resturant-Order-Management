const express = require('express');
const router = express.Router();

const {
    createOrderItem,
    getAllOrderItems,
    getSingleOrderItem,
    updateOrderItem,
    deleteOrderItem
} = require('../controller/controllerorderitems');

const { validateOrder } = require('../middleware/validatorder');

router.post('/order-items', validateOrder, createOrderItem);
router.get('/order-items', getAllOrderItems);
router.get('/order-items/:id', getSingleOrderItem);
router.put('/order-items/:id', updateOrderItem);
router.delete('/order-items/:id', deleteOrderItem);

module.exports = router;