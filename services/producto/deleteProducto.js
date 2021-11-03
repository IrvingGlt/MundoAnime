const Producto = require('../../models/producto')
const { config } = require('../../config/index')

async function deleteProducto(){
  try {

    const producto = await Producto.deleteOne({_id:config.dbIdMundoAnime})

return producto
} catch(error){
  return {message: error.message}
}
}

module.exports = {deleteProducto}
