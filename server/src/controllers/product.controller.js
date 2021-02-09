const productCtrl = {};

const product = require('../models/products.model')

//CRUD de products

productCtrl.getProducts = async (req, res)=>{
    const productFind = await product.find();
    res.json(productFind)
} 
productCtrl.createProduct = async(req, res)=>{
    const newProduct = new product(req.body);
    await newProduct.save()
    res.send({message:'producto creado'})
}

productCtrl.getProduct= async (req, res)=>{
    const oneProduct = await product.findOne({codigo:req.params.id})
    res.json(oneProduct)
}

productCtrl.editProduct = async(req, res)=>{
    await product.findOneAndUpdate({codigo:req.params.id}, req.body);
    res.json({statud:"producto actualizado"})
}

productCtrl.deleteProduct= async(req, res)=>{
    await product.findOneAndDelete({codigo: req.params.id})
    res.send('producto eliminado')
}

module.exports = productCtrl;