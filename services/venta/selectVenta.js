const Ventas = require('../../models/venta')

async function selectVenta(idUser){
  try {
  console.log('Hola desde el servicio')
  console.log(idUser)

const ventas = !idUser ? await Ventas.find(): await Ventas.find({idUser})
console.log(ventas)
return ventas
} catch(error){
  return {message: error.message}
}
}

module.exports = {selectVenta}
