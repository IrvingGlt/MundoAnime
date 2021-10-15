const mongoose = require('mongoose')
const Schema = mongoose.Schema
const animesSchema = new Schema({
    name: String,
    genre: String, 
    pDate: Date,
    chapters: String,
    status: {type: String, enum:['In broadcast','finished'], default:'coming soon'},
    picture: {type: String, default: ''}
},{
    timestamp:true
}
)

const Animes = mongoose.model('Animes', animesSchema)
module.exports = Animes