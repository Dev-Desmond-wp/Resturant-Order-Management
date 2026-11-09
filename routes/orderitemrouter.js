const express = require('express');
const router = express.Router();

const {
    createOrderItem,
    getAllOrderItem,
    getSingleOrderItem,
    updateOrderItem,
    deleteOrderItem
} = require('../controller/controllerorderitems');

const { validateOrderItem } = require('../middleware/validatororderitems');

router.post('/orderitem', validateOrderItem, createOrderItem);
router.get('/orderitem', getAllOrderItem);
router.get('/orderitem/:id', getSingleOrderItem);
router.put('/orderitem/:id', updateOrderItem);
router.delete('/orderitem/:id', deleteOrderItem);










module.exports = router;