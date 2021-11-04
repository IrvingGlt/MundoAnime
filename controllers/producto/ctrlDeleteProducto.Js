const {deleteProducto} = require('../../services/producto/deleteProducto')

async function ctrlDeleteProducto(req, res){
  try {
  const {_id} = req.params
  const productox = await deleteProducto(_id)
  return res.status(200).send(productox)
} catch(error){
  return res.status(error.status || 500).send({message: error.message})
}

}
module.exports = {ctrlDeleteProducto}

