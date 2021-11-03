const Ventas = require('../../models/venta')
const { config } = require('../../config/index')

async function updateVenta(){
  try {
  

const ventas = await Ventas.updateOne({_id:config.dbIdMundoAnime},
  {
    $set:{
      totalPrice: 2500,
      idProduct: 2
    }
  })

return ventas
} catch(error){
  return {message: error.message}
}
}

module.exports = {updateVenta}