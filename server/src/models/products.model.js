const {Schema, model} = require('mongoose')

const productSchema =  new Schema({
    nombre: {type: String, require:true},
    cantidad : {type: Number, default: 0},
    precio : {type: Number, default: 0},
    color: {type: String, requerie:true}
},{
    timestamps:true,
    versionKey:false
})

module.exports = model('product', productSchema)