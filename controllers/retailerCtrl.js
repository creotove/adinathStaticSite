const CouponPurchased = require("../models/couponPurchased");
const newUserModel = require("../models/newUserModel");

const initiateCouponPurchase = async (req, res) => {
  try {
    const { userId, singleCouponPrice, quantity } = req.body;

    // Find the user who is purchasing the coupon
    const user = await newUserModel.findOne({
      uniqueId: userId,
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const totalAmount = singleCouponPrice * quantity;
    user.walletBalance = user.walletBalance - totalAmount;
    
    // Calculate total coupon price
    const totalCouponPrice = singleCouponPrice * quantity;
    
    // Check if user has enough balance to purchase the coupon
    if (user.walletBalance < totalCouponPrice) {
      return res.status(200).send({
        message: "Insufficient wallet balance",
        success: false,
      });
    }
    
    
    // Create a new CouponPurchased entry to store the purchase details as pending
    const couponPurchased = new CouponPurchased({
      retailerId: userId,
      quantity,
      totalPrice: totalCouponPrice,
      status: "pending", // You can define statuses like 'pending', 'approved', 'rejected'
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
