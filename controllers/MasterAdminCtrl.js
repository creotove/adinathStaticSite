const ApprovalModel = require("../models/ApprovalModel");
const addToWalletHistory = require("../models/addToWalletHistory");
const CouponPurchased = require("../models/couponPurchased");
const newUserModel = require("../models/newUserModel");
const withdrawalHistory = require("../models/withdrawalHistory");

const approveUser = async (req, res) => {
  try {
    const { uniqueId } = req.body;

    // const removeFromApproval = await ApprovalModel.findOneAndDelete({
    //   uniqueId,
    // });
    // if (!removeFromApproval) {
    //   return res.status(404).send({
    //     success: false,
    //     message: "User not found",
    //   });
    // }

    // Find the user in the database and update the status to "approved"
    const user = await newUserModel.findOneAndUpdate(
      { uniqueId },
      { status: "approved" }
    );
    user.save();
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "User Approved Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};
const rejectUser = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user in the database and update the status to "rejected"
    const user = await newUserModel.findByIdAndUpdate(userId, {
      status: "rejected",
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User rejected successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const rejectCouponPurchase = async (req, res) => {
  try {
    const { purchaseId } = req.body;

    // Find the coupon purchase request
    const couponPurchase = await CouponPurchased.findById(purchaseId);

    if (!couponPurchase) {
      return res
        .status(404)
        .json({ error: "Coupon purchase request not found" });
    }

    // Update the coupon purchase status to 'rejected'
    couponPurchase.status = "rejected";
    await couponPurchase.save();

    res.status(200).json({ message: "Coupon purchase request rejected" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getUserForApproval = async (req, res) => {
  try {
    // Find all users with status 'pending' from the newUserModel
    const pendingUsers = await newUserModel.find({ status: "pending" });

    // Create an array to store the results
    const usersWithTransactionInfo = [];

    // Loop through each pending user
    for (const user of pendingUsers) {
      // Find the corresponding ApprovalModel entry for the user
      const approvalInfo = await ApprovalModel.findOne({ userId: user._id });
      console.log(approvalInfo);

      // If an approvalInfo entry exists, add it to the result
      if (approvalInfo) {
        usersWithTransactionInfo.push({
          name: user.name,
          uniqueId: user.uniqueId,
          role: user.role,
          transactionId: approvalInfo.transactionId,
          paid: approvalInfo.paid,
        });
      }
    }
    return res.status(200).send({
      data: usersWithTransactionInfo,
      success: true,
      message: "All User Fetched",
    });
  } catch (error) {
    // Handle errors here
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const getRetailerForApproval = async (req, res) => {
  try {
    // Find all users with status 'pending' from the newUserModel
    const pendingRetailer = await newUserModel.find({
      role: "Retailer",
      status: "pending",
    });

    // Create an array to store the results
    const usersWithTransactionInfo = [];

    // Loop through each pending user
    for (const user of pendingRetailer) {
      // Find the corresponding ApprovalModel entry for the user
      const approvalInfo = await ApprovalModel.findOne({ userId: user._id });
      console.log(approvalInfo);

      // If an approvalInfo entry exists, add it to the result
      if (approvalInfo) {
        usersWithTransactionInfo.push({
          name: user.name,
          uniqueId: user.uniqueId,
          role: user.role,
          transactionId: approvalInfo.transactionId,
          paid: approvalInfo.paid,
        });
      }
    }
    return res.status(200).send({
      data: usersWithTransactionInfo,
      success: true,
      message: "All User Fetched",
    });
  } catch (error) {
    // Handle errors here
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
//Works fine
const getMasterDistributorForApproval = async (req, res) => {
  try {
    // Find all users with status 'pending' from the newUserModel
    const pendingMasterDistributor = await newUserModel.find({
      role: "Master Distributor",
      status: "pending",
    });

    // Create an array to store the results
    const usersWithTransactionInfo = [];

    // Loop through each pending user
    for (const user of pendingMasterDistributor) {
      // Find the corresponding ApprovalModel entry for the user
      const approvalInfo = await ApprovalModel.findOne({ userId: user._id });
      console.log(approvalInfo);

      // If an approvalInfo entry exists, add it to the result
      if (approvalInfo) {
        usersWithTransactionInfo.push({
          name: user.name,
          uniqueId: user.uniqueId,
          role: user.role,
          transactionId: approvalInfo.transactionId,
          paid: approvalInfo.paid,
        });
      }
    }
    return res.status(200).send({
      data: usersWithTransactionInfo,
      success: true,
      message: "All User Fetched",
    });
  } catch (error) {
    // Handle errors here
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getDistributorForApproval = async (req, res) => {
  try {
    // Find all users with status 'pending' from the newUserModel
    const pendingDistributor = await newUserModel.find({
      status: "pending",
      role: "Distributor",
    });

    // Create an array to store the results
    const usersWithTransactionInfo = [];

    // Loop through each pending user
    for (const user of pendingDistributor) {
      // Find the corresponding ApprovalModel entry for the user
      const approvalInfo = await ApprovalModel.findOne({ userId: user._id });
      console.log(approvalInfo);

      // If an approvalInfo entry exists, add it to the result
      if (approvalInfo) {
        usersWithTransactionInfo.push({
          name: user.name,
          uniqueId: user.uniqueId,
          role: user.role,
          transactionId: approvalInfo.transactionId,
          paid: approvalInfo.paid,
        });
      }
    }
    return res.status(200).send({
      data: usersWithTransactionInfo,
      success: true,
      message: "All User Fetched",
    });
  } catch (error) {
    // Handle errors here
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAdminForApproval = async (req, res) => {
  try {
    // Find all users with status 'pending' from the newUserModel
    const pendingAdmin = await newUserModel.find({
      role: "Admin",
      status: "pending",
    });

    // Create an array to store the results
    const usersWithTransactionInfo = [];

    // Loop through each pending user
    for (const user of pendingAdmin) {
      // Find the corresponding ApprovalModel entry for the user
      const approvalInfo = await ApprovalModel.findOne({ userId: user._id });
      console.log(approvalInfo);

      // If an approvalInfo entry exists, add it to the result
      if (approvalInfo) {
        usersWithTransactionInfo.push({
          name: user.name,
          uniqueId: user.uniqueId,
          role: user.role,
          transactionId: approvalInfo.transactionId,
          paid: approvalInfo.paid,
        });
      }
    }
    return res.status(200).send({
      data: usersWithTransactionInfo,
      success: true,
      message: "All User Fetched",
    });
  } catch (error) {
    // Handle errors here
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const getCouponRequests = async (req, res) => {
  try {
    // Find all users with status 'pending' from the newUserModel
    const pendingCouponRequests = await CouponPurchased.find({
      status: "pending",
    }).populate("retailerId");
    if (!pendingCouponRequests) {
      return res.status(404).send({
        success: false,
        message: "No Coupon Requests Found",
      });
    }

    if (pendingCouponRequests.length === 0) {
      return res.status(200).send({
        success: false,
        message: "No Coupon Requests Found",
      });
    }

    return res.status(200).send({
      data: pendingCouponRequests,
      success: true,
      message: "All Coupon Requests Fetched",
    });
  } catch (error) {
    // Handle errors here
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAddMoneyToWalletRequests = async (req, res) => {
  try {
    // Find all users with status 'pending' from the newUserModel
    const pendingAddMoneyToWalletRequests = await addToWalletHistory
      .find({
        status: "pending",
      })
      .populate("userId");
    if (!pendingAddMoneyToWalletRequests) {
      return res.status(404).send({
        success: false,
        message: "No Add Money To Wallet Requests Found",
      });
    }

    if (pendingAddMoneyToWalletRequests.length === 0) {
      return res.status(200).send({
        success: false,
        message: "No Add Money To Wallet Requests Found",
      });
    }

    return res.status(200).send({
      data: pendingAddMoneyToWalletRequests,
      success: true,
      message: "All Add Money To Wallet Requests Fetched",
    });
  } catch (error) {
    // Handle errors here
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const approveAddMoneyToWalletRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const addMoneyToWalletRequest = await addToWalletHistory.findById(id);
    if (!addMoneyToWalletRequest) {
      return res.status(404).send({
        success: false,
        message: "Add Money To Wallet Request Not Found",
      });
    }

    if (addMoneyToWalletRequest.status !== "pending") {
      return res.status(400).send({
        success: false,
        message: "Add Money To Wallet Request is not pending",
      });
    }
    const userId = addMoneyToWalletRequest.userId;

    const user = await newUserModel.findById(userId);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User Not Found",
      });
    }
    user.walletBalance = user.walletBalance + addMoneyToWalletRequest.amount; 
    await user.save();
    addMoneyToWalletRequest.status = "approved";
    await addMoneyToWalletRequest.save();

    return res.status(200).send({
      success: true,
      message: "Add Money To Wallet Request Approved",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const rejectAddMoneyToWalletRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const addMoneyToWalletRequest = await addToWalletHistory.findById(id);
    if (!addMoneyToWalletRequest) {
      return res.status(404).send({
        success: false,
        message: "Add Money To Wallet Request Not Found",
      });
    }

    if (addMoneyToWalletRequest.status !== "pending") {
      return res.status(400).send({
        success: false,
        message: "Add Money To Wallet Request is not pending",
      });
    }

    addMoneyToWalletRequest.status = "rejected";
    addMoneyToWalletRequest.error = "Transaction Id Not Found";
    await addMoneyToWalletRequest.save();

    return res.status(200).send({
      success: true,
      message: "Add Money To Wallet Request Rejected",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};
const getWalletWithdrawalRequest = async (req, res) => {
  try {
    // Find all users with status 'pending' from the newUserModel
    const pendingWalletWithdrawalRequest = await withdrawalHistory
      .find({
        status: "pending",
      })
      .populate("userId");
    if (!pendingWalletWithdrawalRequest) {
      return res.status(404).send({
        success: false,
        message: "No Wallet Withdrawal Requests Found",
      });
    }

    if (pendingWalletWithdrawalRequest.length === 0) {
      return res.status(200).send({
        success: false,
        message: "No Wallet Withdrawal Requests Found",
      });
    }

    return res.status(200).send({
      data: pendingWalletWithdrawalRequest,
      success: true,
      message: "All Wallet Withdrawal Requests Fetched",
    });
  } catch (error) {
    // Handle errors here
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const approveWalletWithdrawalRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const { transactionId } = req.body;
    const walletWithdrawalRequest = await withdrawalHistory.findById(id);
    if (!walletWithdrawalRequest) {
      return res.status(404).send({
        success: false,
        message: "Wallet Withdrawal Request Not Found",
      });
    }

    if (walletWithdrawalRequest.status !== "pending") {
      return res.status(400).send({
        success: false,
        message: "Wallet Withdrawal Request is not pending",
      });
    }

    walletWithdrawalRequest.status = "approved";
    walletWithdrawalRequest.transactionId = transactionId;
    await walletWithdrawalRequest.save();

    const uniqueId = walletWithdrawalRequest.uniqueId;
    const user = await newUserModel.findOne({ uniqueId });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User Not Found",
      });
    }
    user.totalCommissionEarned = user.totalCommissionEarned - walletWithdrawalRequest.amount;
    await user.save();

    return res.status(200).send({
      success: true,
      message: "Wallet Withdrawal Request Approved",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const rejectWalletWithdrawalRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const walletWithdrawalRequest = await withdrawalHistory.findById(id);
    if (!walletWithdrawalRequest) {
      return res.status(404).send({
        success: false,
        message: "Wallet Withdrawal Request Not Found",
      });
    }

    if (walletWithdrawalRequest.status !== "pending") {
      return res.status(400).send({
        success: false,
        message: "Wallet Withdrawal Request is not pending",
      });
    }

    walletWithdrawalRequest.status = "rejected";
    walletWithdrawalRequest.error = "Transaction Id Not Found";
    await walletWithdrawalRequest.save();

    return res.status(200).send({
      success: true,
      message: "Wallet Withdrawal Request Rejected",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};
const calculateAndAssignCommissions = async (req, res) => {
  try {
    // Get the purchaseId from the request body
    const { purchaseId } = req.body;

    // Find the Coupon Purchase Record
    const couponPurchase = await CouponPurchased.findById(purchaseId);

    if (!couponPurchase) {
      return res.status(404).json({ message: "Coupon purchase not found." });
    }

    // Initialize an array to store user commissions
    const userCommissions = [];

    // Start with the retailer and follow the chain of createdBy users
    let currentUser = couponPurchase.retailerId;

    while (currentUser) {
      const user = await newUserModel.findOne({ uniqueId: currentUser });

      if (!user) {
        break; // User not found, exit the loop
      }

      // Calculate the commission based on coupon price and actual price
      const commission = user.couponPrice - user.actualPriceOfCoupon;

      // Update the user's commissionEarned and totalCommissionEarned
      user.commissionEarned.push({
        commission,
        user: couponPurchase.retailerId,
      });
      user.totalCommissionEarned += commission;

      // Save the updated user
      await user.save();

      // Add the user's commission to the array
      userCommissions.push({
        userId: user._id,
        commission,
      });

      // Move to the next user in the chain
      currentUser = user.createdBy;
    }

    // Respond with the user commissions
    return res.status(200).json({ userCommissions });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

const getAllMasterAdmins = async (req, res) => {
  const masterAdmins = await newUserModel.find({ role: "Master Admin" });
  if (!masterAdmins) {
    return res.status(404).send({
      success: false,
      message: "Master Admins not found",
    });
  }
  return res.status(200).send({
    success: true,
    message: "Master Admins fetched successfully",
    data: masterAdmins,
  });
};
const getAllAdmins = async (req, res) => {
  const admins = await newUserModel.find({ role: "Admin" });
  if (!admins) {
    return res.status(404).send({
      success: false,
      message: "Master Admins not found",
    });
  }
  return res.status(200).send({
    success: true,
    message: "Master Admins fetched successfully",
    data: admins,
  });
};
const getAllMasterDistributor = async (req, res) => {
  const masterDistribution = await newUserModel.find({
    role: "Master Distributor",
  });
  if (!masterDistribution) {
    return res.status(404).send({
      success: false,
      message: "Master Distribution not found",
    });
  }
  return res.status(200).send({
    success: true,
    message: "Master Distribution fetched successfully",
    data: masterDistribution,
  });
};
const getAllDistributor = async (req, res) => {
  const distributor = await newUserModel.find({ role: "Distributor" });
  if (!distributor) {
    return res.status(404).send({
      success: false,
      message: "Distribution not found",
    });
  }
  return res.status(200).send({
    success: true,
    message: "Distribution fetched successfully",
    data: distributor,
  });
};
const getAllRetailer = async (req, res) => {
  const retailer = await newUserModel.find({ role: "Retailer" });
  if (!retailer) {
    return res.status(404).send({
      success: false,
      message: "Retailer not found",
    });
  }
  return res.status(200).send({
    success: true,
    message: "Retailer fetched successfully",
    data: retailer,
  });
};
const getAlLusers = async (req, res) => {
  const users = await newUserModel.find({});
  if (!users) {
    return res.status(404).send({
      success: false,
      message: "Users not found",
    });
  }
  return res.status(200).send({
    success: true,
    message: "Users fetched successfully",
    data: users,
  });
};

module.exports = {
  approveUser,
  rejectUser,
  calculateAndAssignCommissions,
  rejectCouponPurchase,
  getUserForApproval,
  getRetailerForApproval,
  getMasterDistributorForApproval,
  getDistributorForApproval,
  getAdminForApproval,
  getCouponRequests,
  getAddMoneyToWalletRequests,
  approveAddMoneyToWalletRequest,
  rejectAddMoneyToWalletRequest,
  getWalletWithdrawalRequest,
  approveWalletWithdrawalRequest,
  rejectWalletWithdrawalRequest,
  getAllMasterAdmins,
  getAllAdmins,
  getAllMasterDistributor,
  getAllDistributor,
  getAllRetailer,
  getAlLusers,
};
