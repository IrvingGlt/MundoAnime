const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ventaSchema = new Schema({
  totalPrice: {type:Number},
  idUser: {type:String},
  idProduct: {type: String}
},{
  timestamp:true
}
)

const Venta = mongoose.model('Venta', ventaSchema)
module.exports = Venta
