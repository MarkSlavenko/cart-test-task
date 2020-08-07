const express = require('express');
const CartController = require('../controllers/controller');
const router = express.Router();

router.get('/cart', CartController.getCartItems);

module.exports = router;
