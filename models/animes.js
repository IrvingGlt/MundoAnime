const mongoose = require('mongoose')
const Schema = mongoose.Schema
const animesSchema = new Schema({
    name: String,
    genre: String, 
    pDate: Date,
    chapters: {type: Number},
    status: {type: String, enum:['In broadcast','finished','coming soon'], default:'coming soon'},
    picture: {type: String, default: ''}
},{
    timestamp:true
}
)

const Animes = mongoose.model('Animes', animesSchema)
module.exports = Animes