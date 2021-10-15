const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productoSchema = new Schema({
    id: {required: true, type: String, unique: true},
    name: String,
    price: {type:Number},
    stock: {type:Number},
    picture: {type: String, default: ''}
},{
    timestamp:true
}
)

const Producto = mongoose.model('Producto', productoSchema)
module.exports = Producto
