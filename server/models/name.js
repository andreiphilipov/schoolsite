const mongoose = require('mongoose');

const NameSchema = mongoose.Schema({
   
    name:{
        type: String,
        require: true
    }
})

const Name = module.exports = mongoose.model('Name', NameSchema);