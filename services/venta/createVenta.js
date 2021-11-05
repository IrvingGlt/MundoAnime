const Ventas = require('../../models/venta')

async function createVenta({totalPrice, idUser, idProduct}){
  try {
    const ventaCreated = await Ventas.create({
        totalPrice, 
        idUser, 
        idProduct
    })
    var sinIva = Math.round(totalPrice / 1.16)
    var ivaTotalPrice = totalPrice - sinIva
console.log(ventaCreated)
console.log(`El precio del producto sin IVA es: $${sinIva}, El IVA del producto es: $${ivaTotalPrice}, El precio total del producto es: $${totalPrice}`)
return ventaCreated
} catch(error){
  return {message: error.message}
}
}

module.exports = {createVenta}
