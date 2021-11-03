const {deleteProducto} = require('../../services/producto/deleteProducto')

async function ctrlDeleteProducto(req, res){
  try {
  const {id} = req.query
  console.log('Delete Realizado')
  const animex = await deleteProducto(id)
  return res.status(200).send(animex)
} catch(error){
  return res.status(error.status || 500).send({message: error.message})
}

}
module.exports = {ctrlDeleteProducto}
