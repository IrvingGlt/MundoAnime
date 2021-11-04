const {updateVenta} = require('../../services/venta/updateVenta')

async function ctrlUpdateVenta(req, res){
  try {
  const {totalPrice} = req.body
  const {_id} = req.params
  console.log('Actualización Realizada')
  const ventax = await updateVenta({totalPrice, _id})
  return res.status(200).send(ventax)
} catch(error){
  return res.status(error.status || 500).send({message: error.message})
}

}
module.exports = {ctrlUpdateVenta}