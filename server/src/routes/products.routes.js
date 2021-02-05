const { Router } = require('express');
const router = Router();

const { getProducts,
        createProduct,
        editProduct,
        getProduct,
        deleteProduct
} = require('../controllers/product.controller')

//listo todos los productos
router.get('/products', getProducts);

//creo un nuevo producto
router.post('/products', createProduct);

router.get('/products:id',getProduct);

router.put('/products:id', editProduct);

router.delete('/products:id', deleteProduct);

module.exports = router;