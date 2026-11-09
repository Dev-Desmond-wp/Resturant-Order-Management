const express = require('express');
const router = express.Router();

const {
    createCustomer,
    getAllCustomers,
    getCustomerByPK,
    updateCustomer,
    deleteCustomer
} = require('../controller/customerController');
const { createCustomerValidation } = require('../middleware/validation');
router.post('/create', createCustomerValidation, createCustomer);
router.get('/getAllcustomers', getAllCustomers);
router.get('/onecustomerbyPk/:id', getCustomerByPK);
router.put('/updatecustomer/:id', updateCustomer);
router.delete('/deletecustomer/:id', deleteCustomer);
module.exports = router;