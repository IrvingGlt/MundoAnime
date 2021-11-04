const Producto = require('../../models/producto')

async function updateProducto({_id,price, stock }){
  try {
    console.log('Hola desde el servicio')
    console.log(_id)
    const productoUpdated = await Producto.findOneAndUpdate(
      {_id},
      {price,stock},
      {new: true}
    )
console.log(productoUpdated)
return productoUpdated
} catch(error){
  return {message: error.message}
}
}

module.exports = {updateProducto}

