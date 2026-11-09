const {foodItems, category} = require('../models')


const createfoodItems = async (req, res)=> {
    try{
        const {foodName,  description, price,categoryId} = req.body
        const foodItem = await foodItems.findOne({where : {id}}) 

        if (foodItem){
            return res.status(400).json({message: "user existed"})
        }

        const createfoodItems = await foodItems.create({
            foodName,
            description,
            price,
            categoryId
        })
       return res.status(201).json({
            message:"Student created successfully", 
            data: createfoodItems
        })

    }catch(error) {
        return res.status(500).json({
        message:error.message})
    }
}

const getALLfoodItem = async (req, res)=>{
    try {
        const foodItem = await foodItems.findAll()
        if (!foodItem) {
            return  res.status(404).json({
            message: 'foodItems not found',

        })
        }
         res.status(200).json({
            message: 'foodItems created successfully',
            data: foodItem
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getOnefoodItem = async (req, res) => {
    try {
        const { id } = req.params;
        const onefooditem = await foodItems.findByPk(id,{
            attributes: ["foodName", "description", "price"],
            include: {
                model: category,
                as: "Categories",
                attributes: ["id", "name", "description"]
            }
        })
        
        if(!onefooditem) {
            return res.status(404).json({
                message: "Item not found"
            })
        }

        res.status(200).json({
            message: "Food Item found successfully"
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const updatefoodItems = async (req,res)  => {
    try {
        const {id} = req.params
        const {foodName, description,price } = req.body
        const updatedfoodItem = await foodItems.update({foodName,description,price},{where: {id}})

    res.status(200).json({
        message:"foodItems updated successfully",
        data: updatedfoodItem
    })
    
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
    }
    const deletefoodItem = async(req, res) => {
        try {
         const   {id} = req.params
         const foodItem = await foodItem.findAll({where: {id}})

        if (!user){
            return req.status(404).json({message: "user not found"})
        }

        await foodItem.destroy({where : { id }})
         res.status(200).json({message : "foodItem deleted successfully"}) 
    }catch(error){
     res.status(500).json({message: error.message})
    }
        
  }          
        
    





        
module.exports = {
    createfoodItems,
    getALLfoodItem,
    getOnefoodItem,
    updatefoodItems,
    deletefoodItem
}