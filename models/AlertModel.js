const mongoose = require('mongoose')
const alertSchema = new mongoose.Schema({
    alert : {
        type: String,
        required: true
    },
})

const AlertModel = mongoose.model('Alert', alertSchema)
module.exports = AlertModel;