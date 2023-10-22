const mongoose = require('mongoose');
const roleChangeModelSchema = new mongoose.Schema({
    uniqueId: {
        type: String,
        ref: 'newUser'
    },
    role: {
        type: String,
        enum: ['masterAdmin', 'admin', 'masterDistributor', 'distributor', 'retailer']
    },
    date: {
        type: Date,
        default: Date.now()
    },
    transactionId: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    amount:{
        type: Number,
        default: 0
    },
});
const roleChangeModel = mongoose.model('roleChange', roleChangeModelSchema);
module.exports = roleChangeModel;


