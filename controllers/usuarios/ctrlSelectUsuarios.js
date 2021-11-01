const {selectUsuarios} = require('../../services/usuarios/selectUsuarios')

async function ctrlSelectUsuarios(req, res){
  try {
  const {genre} = req.query
  console.log('Hola desde el controlador')
  const usuariosx = await selectUsuarios(genre)
  return res.status(200).send(usuariosx)
} catch(error){
  return res.status(error.status || 500).send({message: error.message})
}
  //console.log('El género del usuario es: ',genre)
  // return res.status(200).send({genero: genre =='M' ? 'Femenino': 'Masculino' })

}
module.exports = {ctrlSelectUsuarios}
