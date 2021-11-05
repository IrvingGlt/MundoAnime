const {createVenta} = require('../../services/venta/createVenta')

async function ctrlCreateVenta(req, res){
  try {
  const {totalPrice, idUser, idProduct} = req.body
  var sinIva = Math.round(totalPrice / 1.16)
  var ivaTotalPrice = totalPrice - sinIva
  const ventax = await createVenta({totalPrice, idUser, idProduct})
  return res.status(200).send({ventax,message: `El precio de la venta sin IVA es: $${sinIva}, El IVA de la venta es: $${ivaTotalPrice}, El precio total de la venta es: $${totalPrice}`})
  
} catch(error){
  return res.status(error.status || 500).send({message: error.message})
}

}
module.exports = {ctrlCreateVenta}