const mongoose = require('mongoose')
const addTowalletHistory = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'newUser' },
    amount: Number,
    date: { type: Date, default: Date.now },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    transactionId: String,
    error:{
        type:String,
        default:'No error'
    }

})
const addToWalletHistory = mongoose.model('addToWalletHistory', addTowalletHistory)
module.exports = addToWalletHistory;