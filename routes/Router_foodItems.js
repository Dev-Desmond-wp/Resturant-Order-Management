const express = require("express")
const { createfoodItems, getALLfoodItem, getOnefoodItem,  updatefoodItems, deletefoodItem } = require("../controller/foodcontroller")

const router = express.Router()

const {createfoodItemValidation} = require("../middleware/validation_foodItems")
 router.post('/createfoodItems',createfoodItemValidation, createfoodItems)

 router.get('/allfoodItems',getALLfoodItem)

 router.get('/onefooditems',getOnefoodItem)

 router.patch('/updatefooditems',updatefoodItems)

router.delete('/deletefooditems',deletefoodItem)


module.exports = router

