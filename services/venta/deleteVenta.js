const Ventas = require('../../models/venta')

async function deleteVenta(_id){
  try {
    const ventaDeleted = await Ventas.deleteOne( {_id})
console.log(ventaDeleted)
if (ventaDeleted.deletedCount == 0)
return {usuariosDeleted: ventaDeleted.deletedCount, message:'Venta no encontrada'}
else return {usuariosDeleted: ventaDeleted.deletedCount, message: 'Venta eliminada'}
} catch(error){
  return {message: error.message}
}
}

module.exports = {deleteVenta}