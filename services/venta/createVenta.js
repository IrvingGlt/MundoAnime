const Ventas = require('../../models/venta')

async function createVenta({totalPrice, idUser, idProduct}){
  try {
    const ventaCreated = await Ventas.create({
        totalPrice, 
        idUser, 
        idProduct
    })
console.log(ventaCreated)
return ventaCreated
} catch(error){
  return {message: error.message}
}
}

module.exports = {createVenta}
