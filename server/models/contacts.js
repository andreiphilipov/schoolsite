const mongoose = require('mongoose');
const ContactSchema = mongoose.Schema({
    school_name:{
        type:String,
        required:true
    },
    date_year:{
         type:Number,
         required:true
    },

    date_month:{
        type:Number,
        required:true
    },
    date_week:{
        type:Number,
       required:true
    },    
    euro_ele:{
        type:Number,
        required:true
    },
    euro_heat:{
        type:Number,
        required:true
    },
    euro_water:{
        type:Number,
        required:true
    },
    kwh_heat:{
        type:Number,
        required:true
    },
    kwh_water:{
        type:Number,
        required:true
    },
    liter_water:{
        type:Number,
        required:true
    }
});

const Contact = module.exports = mongoose.model('Contact',ContactSchema);