const mongoose = require('mongoose');

const SignupSchema = mongoose.Schema({
   
    com_name:{
        type: String,
        require: true
    },
    user_name:{
        type: String,
        require: true
    },  
    e_mail:{
        type: String,
        require: true
    },
    first_name:{
        type: String,
        require: true
    },
    last_name:{
        type: String,
        require: true
    },
    address_name:{
        type: String,
        require: true
    },
    user_city:{
        type: String,
        require: true
    },
    user_country:{
        type: String,
        require: true
    },
    postal_code:{
        type: String,
        require: true
    },
    about_user:{
        type: String,
        require: true
    }
})

const Signup = module.exports = mongoose.model('Signup', SignupSchema);