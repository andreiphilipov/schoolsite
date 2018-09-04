const mongoose = require('mongoose');
const ContactSchema = mongoose.Schema({
    school_name:{
        type:String,
        required:true
    },
    date_year:{
         type:String,
         required:true
    },
    date_month:{
        type:String,
        required:true
    },
    date_week:{
        type:String,
       required:true
    },    
    euro_ele:{
        type:String,
        required:true
    },
    euro_heat:{
        type:String,
        required:true
    },
    euro_water:{
        type:String,
        required:true
    },
    kwh_heat:{
        type:String,
        required:true
    },
    kwh_water:{
        type:String,
        required:true
    },
    liter_water:{
        type:String,
        required:true
    }
})

const Contact = module.exports = mongoose.model('Contact', ContactSchema);
