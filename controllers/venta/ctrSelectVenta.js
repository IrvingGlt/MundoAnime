const {selectVenta} = require('../../services/venta/selectVenta')

async function ctrlSelectVenta(req, res){
  try {
  const {idUser} = req.query
  console.log('Hola desde el controlador')
  const ventax = await selectVenta(idUser)
  return res.status(200).send(ventax)
} catch(error){
  return res.status(error.status || 500).send({message: error.message})
}

}
module.exports = {ctrlSelectVenta}