const CouponPurchased = require("../models/couponPurchased");
const newUserModel = require("../models/newUserModel");

const calculateCommission = async (userId, couponPrice, quantity) => {
  try {
    const user = await newUserModel.findOne({ uniqueId: userId });

    if (!user) {
      return 0;
    }
    console.log("user", user);

    // Calculate commission for the current user
    const commission = (user.couponPrice - user.actualPriceOfCoupon) * quantity;

    // Update the user's commission fields
    user.totalCommissionEarned += commission;
    user.currentCommission = commission;

    // Save the user's changes
    await user.save();

    // Update the commissionEarned array with the commission record
    user.commissionEarned.push({ commission, uniqueId: userId });
    await user.save();

    // Recursively calculate commission for the user's creator
    if (user.createdBy) {
      await calculateCommission(user.createdBy, couponPrice, quantity);
    }

    return commission;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const purchaseCouponNew = async (req, res) => {
  try {
    const { uniqueId, singleCouponPrice, quantity, coupon_id } = req.body;

    // Find the user who is purchasing the coupon
    const user = await newUserModel.findOne({ uniqueId });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const couponPurchase = await CouponPurchased.findOne({
      uniqueId,
    });

    if (!couponPurchase) {
      return res
        .status(404)
        .json({ error: "Coupon purchase request not found" });
    }
    await calculateCommission(uniqueId, singleCouponPrice, quantity);

    couponPurchase.status = "approved";
    await couponPurchase.save();

    const coupon = await CouponPurchased.findById(coupon_id);
    coupon.dateOfApprove = Date.now();

    res.status(200).json({
      message: "Coupon purchased successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  purchaseCouponNew,
};

//   {
// 1 . [x] add to wallet in all section
// 2 . [] coupon request in admin panel [add mobile number]
// 3 . [] complain specific to user [ticket number and status mobile number]
// 4 . [] jo complain raise kare us user ko show to the user status
// 5 . [] forget password
// 6 . [x] optimze the code
// 7 . [x] check scanner
// 8 . [x] add wallet request in admin panel
// 9 . [x] add wallet withdrawal request in admin panel
// 10 .[x] coupon  request in admin panel
//    }


//Self did
// 1. [x] Fixed coupon price to be a whole number
// 2. [x] Withdraw ammount deducted from wallet
// 3. [x] Add wallet request in admin panel
// 4. [x] Add wallet withdrawal request in admin panel
// 5. [x] Coupon request in admin panel
// 6. [x] Add mobile number in coupon request
// 7. [x] Optimize some code
// 8. [x] Check scanner
// 9. [x] Add to wallet in all section