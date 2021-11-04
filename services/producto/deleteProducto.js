const Producto = require('../../models/producto')

async function deleteProducto(_id){
  try {
    const productoDeleted = await Producto.deleteOne( {_id})
console.log(productoDeleted)
if (productoDeleted.deletedCount == 0)
return {usuariosDeleted: productoDeleted.deletedCount, message:'Producto no encontrado'}
else return {usuariosDeleted: productoDeleted.deletedCount, message: 'Producto eliminado'}
} catch(error){
  return {message: error.message}
}
}

module.exports = {deleteProducto}
