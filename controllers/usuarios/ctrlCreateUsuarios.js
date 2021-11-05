const {createUsuarios} = require('../../services/usuarios/createUsuarios')

async function ctrlCreateUsuarios(req, res){
  try {
  const {name, lastName,phone,genero, country, email, direccion,password} = req.body
  console.log('Actualización Realizada')
  const usuariosx = await createUsuarios({name, lastName,phone,genero, country, email, direccion,password})
  return res.status(200).send(usuariosx)
} catch(error){
  return res.status(error.status || 500).send({message: error.message})
}

}
module.exports = {ctrlCreateUsuarios}
