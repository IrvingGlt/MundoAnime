const Ventas = require('../../models/venta')
const { config } = require('../../config/index')

async function deleteVenta(){
  try { 

    const ventas = await Ventas.deleteOne({_id:config.dbIdMundoAnime})

return ventas
} catch(error){
  return {message: error.message}
}
}

module.exports = {deleteVenta}