const mongoose = require('mongoose');
const AccountDetailsSchema = new mongoose.Schema({
    userId: { type: "String", ref: 'newUser' },
    accountNumber: Number,
    ifscCode: String,
    bankName: String,
    accountHolderName: String,
});
const AccountDetails = mongoose.model('AccountDetails', AccountDetailsSchema);
module.exports = AccountDetails;