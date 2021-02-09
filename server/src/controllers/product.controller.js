const productCtrl = {};

const product = require('../models/products.model')

//CRUD de products

productCtrl.getProducts = async (req, res)=>{
    const productFind = await product.find();
    res.json(productFind)
} 
productCtrl.createProduct = (req, res)=>{
    
    const newProduct = new product(req.body);
    console.log(newProduct);
    res.json('create product')
}

productCtrl.getProduct=(req, res)=>{
    res.send('obteniendo un solo producto')
}

productCtrl.editProduct = (req, res)=>{
    res.send('editando un producto')
}

productCtrl.deleteProduct=(req, res)=>{
    res.send('eliminando un producto')
}

module.exports = productCtrl;