const Ventas = require('../../models/venta')
const { config } = require('../../config/index')

async function updateVenta(){
  try {
  

const venta = await Ventas.updateOne({_id:config.dbIdMundoAnime},
  {
    $set:{
      totalPrice: 2500,
      idProduct: 2
    }
  })

return venta
} catch(error){
  return {message: error.message}
}
}

module.exports = {updateVenta}