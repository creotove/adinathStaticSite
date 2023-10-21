const CouponPurchased = require("../models/couponPurchased");
const newUserModel = require("../models/newUserModel");

const initiateCouponPurchase = async (req, res) => {
  try {
    const { userId, singleCouponPrice, quantity } = req.body;

    // Find the user who is purchasing the coupon
    const user = await newUserModel.findOne({
      uniqueId: userId,
    });
    console.log(user);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const totalAmount = singleCouponPrice * quantity;
    
    // Calculate total coupon price
    
    // Check if user has enough balance to purchase the coupon
    if (user.walletBalance < totalAmount) {
      return res.status(200).send({
        message: "Insufficient wallet balance",
        success: false,
      });
    }
    user.walletBalance = user.walletBalance - totalAmount;
    
    
    // Create a new CouponPurchased entry to store the purchase details as pending
    const couponPurchased = new CouponPurchased({
      retailerId: user._id,
      uniqueId: user.uniqueId,
      quantity,
      totalPrice: totalAmount,
      mobileNumber : user.mobileNumber,
    });
    await user.save();
    await couponPurchased.save();

    res.status(200).send({
      message: "Coupon purchase request initiated",
      success: true,
      data: couponPurchased,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: "Internal Server Error",
      success: false,
    });
  }
};
const getPurchaseCouponHistory = async (req, res) => {
  try {
    const { userId } = req.body;

    // Find the user who is purchasing the coupon
    const user = await newUserModel.findById(userId);

    console.log(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Find all the coupon purchases made by the user
    const couponPurchases = await CouponPurchased.find({
      retailerId: userId,
    }).populate("retailerId");

    res.status(200).send({
      message: "Coupon purchase history fetched successfully",
      success: true,
      data: couponPurchases,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: "Internal Server Error",
      success: false,
    });
  }
};
module.exports = {
  initiateCouponPurchase,
  getPurchaseCouponHistory,
};
