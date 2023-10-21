const mongoose = require("mongoose");

const couponPurchasedSchema = new mongoose.Schema(
  {
    retailerId: { type: mongoose.Schema.Types.ObjectId, ref: "newUser" }, // Reference to the retailer
    uniqueId: String,
    quantity: Number,
    totalPrice: Number,
    purchaseDate: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    mobileNumber: Number,
  },
  {
    timestamps: true,
  }
);

const CouponPurchased = mongoose.model(
  "CouponPurchased",
  couponPurchasedSchema
);

module.exports = CouponPurchased;
