
const { customer , order} = require('../models');

const createCustomer = async (req, res) => {
    try {
        const { firstName, lastName, email, city, password, } = req.body;
        
      
        const existingCustomer = await customer.findOne({ where: { email } });
          
        if (existingCustomer) {
            return res.status(400).json({
                message: `Customer with Email: ${email} already exists`
            });
        }
        

        const newCustomer = await customer.create({
            firstName,
            lastName,
            email,
            city,   
          password
        });


        res.status(201).json({
            message: 'REGISTERED SUCCESSFULLY',
            data: newCustomer 
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

 


const getAllCustomers = async (req, res) => {
  try {
    const customers = await customer.findAll();

    return res.status(200).json({
      message: `All customers and the total is: ${customers.length}`,
      data: customers
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const getCustomerByPK = async (req, res) => {
  try {
    const { id } = req.params;
    const nicecustomer = await customer.findByPk(id,{
        attributes: [ 'firstName', 'lastName', 'email', 'city' ],
     
        include: {
          model: order,
          as: 'orders',
          attributes: ['id', 'status', 'totalprice']
        }
      });

    if (!nicecustomer) {
      return res.status(404).json({
        message: 'Customer not found'
      });
    }

    return res.status(200).json({
      message: 'Customer Found',
      data: nicecustomer
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const wellCustomer = await customer.findOne({ where: { id } });

    if (!wellCustomer) {
      return res.status(404).json({
        message: 'Customer not found'
      });
    }

    await customer.destroy({ where: { id } });
    return res.status(200).json({
      message: 'Customer deleted successfully'
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const { lastName, email, city, firstName } = req.body;

    const goodcustomer = await customer.findByPk(id);
    if (!goodcustomer) {
      return res.status(404).json({
        message: 'Customer not found'
      });
    }

    const updateCustomer = await customer.update({ lastName, email, city, firstName }, { where: { id } });
    return res.status(200).json({
      message: 'Customer updated successfully',
      data: updateCustomer
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};
module.exports = {
    createCustomer,
    getAllCustomers,
    getCustomerByPK,
    deleteCustomer,
    updateCustomer};