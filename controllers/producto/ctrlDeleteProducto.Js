const {deleteProducto} = require('../../services/producto/deleteProducto')

async function ctrlDeleteProducto(req, res){
  try {
  const {id} = req.query
  console.log('Delete Realizado')
  const productox = await deleteProducto(id)
  return res.status(200).send(productox)
} catch(error){
  return res.status(error.status || 500).send({message: error.message})
}

}
module.exports = {ctrlDeleteProducto}
