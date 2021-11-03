const {updateVenta} = require('../../services/venta/updateVenta')

async function ctrlUpdateVenta(req, res){
  try {
  const {id} = req.query
  console.log('Actualización Realizada')
  const ventax = await updateVenta(id)
  return res.status(200).send(ventax)
} catch(error){
  return res.status(error.status || 500).send({message: error.message})
}

}
module.exports = {ctrlUpdateVenta}