const Ventas = require('../../models/venta')
const { config } = require('../../config/index')

async function deleteVenta(){
  try { 

    const anime = await Ventas.deleteOne({_id:config.dbIdMundoAnime})

return anime
} catch(error){
  return {message: error.message}
}
}

module.exports = {deleteVenta}