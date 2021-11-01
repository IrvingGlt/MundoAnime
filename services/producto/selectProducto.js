const Producto = require('../../models/producto')

async function selectProductos(name){
  try {
  console.log('Hola desde el servicio')
  console.log(name)

const producto = !name ? await Producto.find(): await Producto.find({name})
console.log(producto)
return producto
} catch(error){
  return {message: error.message}
}
}

module.exports = {selectProductos}
