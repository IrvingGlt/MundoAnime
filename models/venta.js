const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ventaSchema = new Schema({
  totalPrice: {type:Number},
  idUser: {type:Number, unique:true},
  idProduct: {required: true, type: String, unique: true}
},{
  timestamp:true
}
)

const Venta = mongoose.model('Venta', ventaSchema)
module.exports = Venta
