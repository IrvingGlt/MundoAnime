const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuarioSchema = new Schema({
    idUser: {type:Number, unique: true},
    name: String,
    lastName: { type: String, default: ''},
    phone: {type: String, default: ''},    
    genre: {type: String, enum:['H', 'M', 'U'], default:'U'},
    country: {type: String, default: ''},
    picture: {type: String, default: 'https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png'},
    email:{required: true, type: String, lowercase: true, trim: true.valueOf, unique: true},
    direccion: {type: String, default: ''}
},{
    timestamps: true
})

const Usuario = mongoose.model('Usuario',usuarioSchema)
module.exports = Usuario