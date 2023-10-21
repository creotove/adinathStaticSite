const mongoose = require("mongoose");
const newuserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobileNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected", "registeredViaSite"],
      default: "pending",
    },
    actualPriceOfCoupon: {
      type: Number,
      default: 100,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    pinCode: {
      type: Number,
      required: true,
    },
    aadharCard: {
      type: String,
      required: true,
    },
    psa: {
      type: String,
      ref: "PSA",
    },
    role: {
      type: String,
      enum: [
        "Master Distributor",
        "Distributor",
        "Retailer",
        "Admin",
        "Master Admin",
      ],
      required: true,
    },
    partners: [{ type: mongoose.Schema.Types.ObjectId, ref: "newUser" }],
    createdBy: { type: String, ref: "newUser" },
    commissionOfCreatedByUser: {
      //jisne create kiya uska commissions
      type: Number,
      default: 0,
    },
    couponPrice: {
      type: Number,
      default: 0,
    },
    panCard: {
      type: String,
      required: true,
    },
    uniqueId: {
      type: String,
      default: null,
    },
    psaSet: {
      type: Boolean,
      default: false,
    },
    currentCommission: {
      type: Number,
      default: 0,
    },
    totalCommissionEarned: {
      type: Number,
      default: 0,
    },
    walletBalance: {
      type: Number,
      default: 0,
    },
    isPaidJoiningFee: {
      type: Boolean,
      default: false,
    },
    commissionEarned: [
      {
        commission: {
          type: Number,
          default: 0,
        },
        uniqueId: { type: String, ref: "User" },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);
const newUserModel = mongoose.model("newUser", newuserSchema);
module.exports = newUserModel;
