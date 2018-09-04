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
    email_address:{
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
    user_pwd:{
        type: String,
        require: true
    },
    user_p_pwd:{
        type: String,
        require: true
    },
    card_num:{
        type: String,
        require: true
    },
    about_me:{
        type: String,
        require: true
    }
})

const Signup = module.exports = mongoose.model('Signup', SignupSchema);