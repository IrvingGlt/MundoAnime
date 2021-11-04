const Usuarios = require('../../models/usuarios')

async function createUsuarios({name, lastName,phone,genero, country, email, direccion }){
  try {
    const usuariosCreated = await Usuarios.create({
      name,
      lastName,
      phone,
      genre: genero,
      country,
      email,
      direccion
    })
console.log(usuariosCreated)
return usuariosCreated
} catch(error){
  return {message: error.message}
}
}

module.exports = {createUsuarios}
