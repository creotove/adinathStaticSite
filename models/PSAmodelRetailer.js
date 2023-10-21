const mongoose = require('mongoose');
const PSASchema = new mongoose.Schema({
    uniqueId :{
        type : String,
        ref : 'newUser'
    },
    psaId:{
        type : String,
        required : true,
    },
    psaPassword:{
        type : String,
        required : true,
    },
    registerCode:{
        type : String,
        required : true,
    },
});
const PSAmodel = mongoose.model('psa', PSASchema);
module.exports = PSAmodel;