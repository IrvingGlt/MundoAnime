const Ventas = require('../../models/venta')

async function updateVenta({_id,totalPrice}){
  try {
    console.log(_id)
    const ventaUpdated = await Ventas.findOneAndUpdate(
      {_id},
      {totalPrice},
      {new: true}
    )
console.log(ventaUpdated)
return ventaUpdated
} catch(error){
  return {message: error.message}
}
}

module.exports = {updateVenta}