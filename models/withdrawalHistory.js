const mongoose = require("mongoose");
const withdrawalHistorySchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "newUser" },
    amount: Number,
    uniqueId: {
      type: String,
      required: true,
    },
    date: { type: Date, default: Date.now },
    bankName: {
      type: String,
      required: true,
    },
    transactionId: {
      type: String,
      default: "N/A",
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    error: {
      type: String,
      default: "No error",
    },
  },
  {
    timestamps: true,
  }
);
const withdrawalHistory = mongoose.model(
  "WithdrawalHistory",
  withdrawalHistorySchema
);
module.exports = withdrawalHistory;
