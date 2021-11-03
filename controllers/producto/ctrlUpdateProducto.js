const {updateProducto} = require('../../services/producto/updateProducto')

async function ctrlUpdateProducto(req, res){
  try {
  const {id} = req.query
  console.log('Actualización Realizada')
  const productox = await updateProducto(id)
  return res.status(200).send(productox)
} catch(error){
  return res.status(error.status || 500).send({message: error.message})
}

}
module.exports = {ctrlUpdateProducto}
