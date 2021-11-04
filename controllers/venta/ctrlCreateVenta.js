const {createVenta} = require('../../services/venta/createVenta')

async function ctrlCreateVenta(req, res){
  try {
  const {totalPrice, idUser, idProduct} = req.body
  
  const animex = await createVenta({totalPrice, idUser, idProduct})
  return res.status(200).send(animex)
} catch(error){
  return res.status(error.status || 500).send({message: error.message})
}

}
module.exports = {ctrlCreateVenta}