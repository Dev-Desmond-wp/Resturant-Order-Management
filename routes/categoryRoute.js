const express = require('express');

const router = express.Router();

const { validateCategory } = require('../middleware/categoryValidator');

const { createCategory, getAllCategories, getOnecategory, updatecategory,deleteCategory } = require('../controller/categoryController');

router.post('/category/newcategory', validateCategory, createCategory);

router.get('/category/allcategories', getAllCategories);

router.get('/category/getone/:id', getOnecategory);

router.put('/category/update/:id', updatecategory);

router.delete('/category/delete/:id', deleteCategory);

module.exports = router;