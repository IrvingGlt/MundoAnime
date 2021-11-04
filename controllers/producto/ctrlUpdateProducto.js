const {updateProducto} = require('../../services/producto/updateProducto')

async function ctrlUpdateProducto(req, res){
  try {
  const {price, stock} = req.body
  const {_id} = req.params
  console.log('Actualización Realizada')
  const productox = await updateProducto({price, stock, _id})
  return res.status(200).send(productox)
} catch(error){
  return res.status(error.status || 500).send({message: error.message})
}

}
module.exports = {ctrlUpdateProducto}
