const express = require('express');
const router = express.Router()
const {ProductController} = require("../controller/Product.controller")

router.get('/', ProductController.getAll)
router.get('/:id', ProductController.getById)
router.post('/', ProductController.add)
router.delete('/', ProductController.delete)

module.exports = router;