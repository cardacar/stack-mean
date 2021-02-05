const productCtrl = {};

//CRUD de products

productCtrl.getProducts = (req, res)=>{
    res.send('obteniendo todos los productos')
} 
productCtrl.createProduct = (req, res)=>{
    res.send('creando los productos')
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