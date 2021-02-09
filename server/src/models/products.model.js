const {Schema, model} = require('mongoose')

const productSchema =  new Schema({
    codigo:{type: String, require:true, trim: true},
    nombre: {type: String, require:true, trim: true},
    cantidad : {type: Number, default: 0, trim: true},
    precio : {type: Number, default: 0, trim: true},
    color: {type: String, requerie:true, trim: true},
    categoria:{type:String, requerie: true, trim: true},
    talla:{type:String, requerie: true, trim: true},
    img:{type:String, default: 'None', trim: true}
},{
    timestamps:true,
    versionKey:false
})

module.exports = model('product', productSchema)