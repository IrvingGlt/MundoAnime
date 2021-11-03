const {deleteVenta} = require('../../services/venta/deleteVenta')

async function ctrlDeleteVenta(req, res){
  try {
  const {id} = req.query
  console.log('Delete Realizado')
  const animex = await deleteVenta(id)
  return res.status(200).send(animex)
} catch(error){
  return res.status(error.status || 500).send({message: error.message})
}

}
module.exports = {ctrlDeleteVenta}