const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, require: true},
    age: {type: Number, default: 18}
})

module.exports = user = mongoose.model('user', userSchema)