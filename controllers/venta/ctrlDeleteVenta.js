const {deleteVenta} = require('../../services/venta/deleteVenta')

async function ctrlDeleteVenta(req, res){
  try {
  const {_id} = req.params
  const ventax = await deleteVenta(_id)
  return res.status(200).send(ventax)
} catch(error){
  return res.status(error.status || 500).send({message: error.message})
}

}
module.exports = {ctrlDeleteVenta}