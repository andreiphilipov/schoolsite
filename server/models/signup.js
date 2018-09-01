const mongoose = require('mongoose');

const SignupSchema = mongoose.Schema({
   
    user_job:{
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
    u_name:{
        type: String,
        require: true
    },
    e_mail:{
        type: String,
        require: true
    },
    u_pass:{
        type: String,
        require: true
    },
    v_pass:{
        type: String,
        require: true
    },
    about_user:{
        type: String,
        require: true
    }
})

const Signup = module.exports = mongoose.model('Signup', SignupSchema);