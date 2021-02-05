const { Router } = require('express');
const router = Router();

const {getProducts} = require('../controllers/product.controller')

router.get('/product', getProducts);

module.exports = router;