const mongoose = require('mongoose')
const complaintSchema = new mongoose.Schema({
    userId: { type: String, ref: 'newUser' },
    date: { type: Date, default: Date.now },
    status: {
        type: String,
        enum: ['pending', 'resolved'],
        default: 'pending'
    },
    complaintTitle: {
        type: String,
        required: true
    },
    complaintMessage: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    screenshot: {
        type: String,
        default: ''
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    ticketId: {
        type: String,
        default: ''
    },

})
const complaintModel = mongoose.model('complaint', complaintSchema)
module.exports = complaintModel;