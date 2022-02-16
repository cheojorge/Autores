const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Name is requered'],
        minlength: [3, 'Length must be at least 3 characters']
    }
},{timestamps:true})

module.exports.Authors = mongoose.model('Authors', AuthorsSchema)