const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ventaSchema = new Schema({
  status: {type: String},
  idVenta: {type:Number},
  totalPrice: {type:Number},
  actualUsuario: [{type: Schema.Types.ObjectId, ref:'usuario' }],
  actualProducto: [{type: Schema.Types.ObjectId, ref:'producto' }]
},{
  timestamp:true
}
)

const Venta = mongoose.model('Venta', ventaSchema)
module.exports = Venta
