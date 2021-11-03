const Producto = require('../../models/producto')
const { config } = require('../../config/index')

async function updateProducto(){
  try {


const producto = await Producto.updateOne({_id:config.dbIdMundoAnime},
  {
    $set:{
      name: 'Funda de naruto',
      stock: 3
    }
  })

return producto
} catch(error){
  return {message: error.message}
}
}

module.exports = {updateProducto}
