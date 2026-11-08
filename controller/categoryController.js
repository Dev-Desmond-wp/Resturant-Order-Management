const { category, foodItems } = require('../models');

const createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;

        const newCategory = await category.create({
            name,
            description
        })

        res.status(201).json({
            message: 'Category created successfully',
            data: newCategory
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getAllCategories = async (req, res) => {
    try {
        const categories = await category.findAll();
        res.status(200).json({
            message: 'Categories found successfully',
            data: categories
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getOnecategory = async (req, res) => {
    try {
        const { id } = req.params;
        const onecategory = await category.findByPk(id,{
            attributes: ['name', 'description'],
            include: {
                model: foodItems,
                as: 'fooditem',
                attributes: ['id', 'foodName', 'description', 'price']
            }
        });
        
        if (!onecategory) {
            return res.status(404).json({
                message: 'Category not found'
            })
        }

        res.status(200).json({
            message: 'Category found successfully',
            data: onecategory
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const updatecategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;

        const CAT = await category.findByPk({where: {id}});
    if (!update) {
        return res.status(404).json({
            message: 'Category not found'
        })
    }

    const update = await category.update({ 
        name,
        description
    },{ where: {id}});
    res.status(200).json({
        message: 'Category updated successfully',
        data: update
    })

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;

        const deleteCAT = await category.findOne({where: {id}});

        if(!deleteCAT) {
            return res.status(404).json({
                message: 'Category not found'
            })
        }

        await deleteCAT.destroy({where: {id}})
        res.status(200).json({
            message: 'Category deleted successfully'
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    createCategory,
    getAllCategories,
    getOnecategory,
    updatecategory,
    deleteCategory
}