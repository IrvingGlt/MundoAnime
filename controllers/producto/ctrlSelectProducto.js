const {selectProductos} = require('../../services/producto/selectProducto')

async function ctrlSelectProductos(req, res){
  try {
  const {name} = req.query
  console.log('Hola desde el controlador')
  const productosx = await selectProductos(name)
  return res.status(200).send(productosx)
} catch(error){
  return res.status(error.status || 500).send({message: error.message})
}

}
module.exports = {ctrlSelectProductos}