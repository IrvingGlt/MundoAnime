const {createProducto} = require('../../services/producto/createProducto')

async function ctrlCreateProducto(req, res){
  try {
  const {name, price, stock,picture } = req.body
  console.log('Actualización Realizada')
  const productox = await createProducto({name, price, stock,picture })
  return res.status(200).send(productox)
} catch(error){
  return res.status(error.status || 500).send({message: error.message})
}

}
module.exports = {ctrlCreateProducto}
