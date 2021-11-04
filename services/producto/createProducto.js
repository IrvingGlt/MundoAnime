const Producto = require('../../models/producto')

async function createProducto({name, price, stock,picture}){
  try {
    const productoCreated = await Producto.create({
      name,
      price,
      stock,
      picture
    })
console.log(productoCreated)
return productoCreated
} catch(error){
  return {message: error.message}
}
}

module.exports = {createProducto}
