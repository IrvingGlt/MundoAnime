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
console.log(`El total de la venta sin IVA es: $${sinIva}, El IVA de la venta es: $${ivaTotalPrice}, El precio total de la venta es: $${totalPrice}`)
return ventaCreated
} catch(error){
  return {message: error.message}
}
}

module.exports = {createVenta}
