const express = require('express');
const router = express.Router();

const {
createOrder,
    getAllOrders,
    getSingleOrder,
    updateOrder,
    deleteOrder
} = require('../controller/controllerorder');
 
const { validateOrder } = require('../middleware/validatororder');

router.post('/orders', validateOrder, createOrder);
router.get('/orders', getAllOrders);
router.get('/orders/:id', getSingleOrder);
router.put('/orders/:id', updateOrder);
router.delete('/orders/:id', deleteOrder);
module.exports = router;