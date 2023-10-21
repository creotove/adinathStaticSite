const AlertModel = require("../models/AlertModel");
const ApprovalModel = require("../models/ApprovalModel");
const EmployeeModel = require("../models/EmployeeModel");
const addToWalletHistory = require("../models/addToWalletHistory");
const CouponPurchased = require("../models/couponPurchased");
const newUserModel = require("../models/newUserModel");
const withdrawalHistory = require("../models/withdrawalHistory");
const bcrypt = require("bcryptjs");
const PSA = require("../models/PSAmodelRetailer");
const RolePriceModel = require("../models/RolePriceModel");
const complaintModel = require("../models/ComplaintModel");

const getRolePrice = async (req, res) => {
  try {
    const _id = "6532bfa9a10c59e888c04106";
    const changePirce = await RolePriceModel.findById(_id);
    if (!changePirce) {
      return res.status(404).send({
        success: false,
        message: "Role Price not found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Role Price fetched successfully",
      data: changePirce,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const changeRolePrice = async (req, res) => {
  try {
    const _id = "6532bfa9a10c59e888c04106";
    const changedPrices = await RolePriceModel.findById(_id);
    if (!changedPrices) {
      return res.status(404).send({
        success: false,
        message: "Role Price not found",
      });
    }
    changedPrices.masterAdmin = req.body.masterAdmin;
    changedPrices.admin = req.body.admin;
    changedPrices.masterDistributor = req.body.masterDistributor;
    changedPrices.distributor = req.body.distributor;
    changedPrices.retailer = req.body.retailer;
    await changedPrices.save();
    return res.status(200).send({
      success: true,
      message: "Role Price Changed successfully",
      data: changedPrices,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};

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
      { status: "approved", isPaidJoiningFee: true }
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
    const { uniqueId } = req.body;

    // Find the user in the database and update the status to "rejected"
    const user = await newUserModel.findOneAndUpdate(
      { uniqueId },
      {
        status: "rejected",
      }
    );

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
    // Find the user who made the coupon purchase request
    const uniqueId = couponPurchase.uniqueId;
    const addMoneyBackToWallet = await newUserModel.findOne({ uniqueId });
    if (!addMoneyBackToWallet) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    addMoneyBackToWallet.walletBalance =
      addMoneyBackToWallet.walletBalance + couponPurchase.totalPrice;
    await addMoneyBackToWallet.save();
    // Update the coupon purchase status to 'rejected'
    couponPurchase.status = "rejected";
    await couponPurchase.save();

    res
      .status(200)
      .json({ message: "Coupon purchase request rejected", success: true });
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
    const pendingRetailer = await newUserModel
      .find({
        role: "Retailer",
        status: "pending",
      })
      .select("-_id name uniqueId mobileNumber panCard aadharCard city");

    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};
    results.totalCount = pendingRetailer.length;
    results.totalPages = Math.ceil(pendingRetailer.length / limit);
    if (endIndex < pendingRetailer.length) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    results.results = pendingRetailer.slice(startIndex, endIndex);
    if (!pendingRetailer) {
      return res.status(404).send({
        success: false,
        message: "No Retailer Found",
      });
    }
    return res.status(200).send({
      data: results,
      success: true,
      message: "Retailers Fetched Successfully",
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
    const pendingMasterDistributor = await newUserModel
      .find({
        role: "Master Distributor",
        status: "pending",
      })
      .select("-_id name uniqueId mobileNumber panCard aadharCard city");
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};
    results.totalCount = pendingMasterDistributor.length;
    results.totalPages = Math.ceil(pendingMasterDistributor.length / limit);
    if (endIndex < pendingMasterDistributor.length) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    results.results = pendingMasterDistributor.slice(startIndex, endIndex);
    if (!pendingMasterDistributor) {
      return res.status(404).send({
        success: false,
        message: "No Master Distributor Found",
      });
    }
    return res.status(200).send({
      data: results,
      success: true,
      message: "Master Distributor Fetched Successfully",
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
    const pendingDistributor = await newUserModel
      .find({
        status: "pending",
        role: "Distributor",
      })
      .select("-_id name uniqueId mobileNumber panCard aadharCard city");

    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};
    results.totalCount = pendingDistributor.length;
    results.totalPages = Math.ceil(pendingDistributor.length / limit);
    if (endIndex < pendingDistributor.length) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    results.results = pendingDistributor.slice(startIndex, endIndex);
    if (!pendingDistributor) {
      return res.status(404).send({
        success: false,
        message: "Distributor Found",
      });
    }
    return res.status(200).send({
      data: results,
      success: true,
      message: "Distributor Fetched Successfully",
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
    if (!pendingAdmin) {
      return res.status(404).send({
        success: false,
        message: "No Admin Found",
      });
    }
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};
    results.totalCount = pendingAdmin.length;
    results.totalPages = Math.ceil(pendingAdmin.length / limit);
    if (endIndex < pendingAdmin.length) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    results.results = pendingAdmin.slice(startIndex, endIndex);

    return res.status(200).send({
      data: results,
      success: true,
      message: "Admin Fetched Successfully",
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
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};
    results.totalCount = pendingCouponRequests.length;
    results.totalPages = Math.ceil(pendingCouponRequests.length / limit);
    if (endIndex < pendingCouponRequests.length) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    results.results = pendingCouponRequests.slice(startIndex, endIndex);

    return res.status(200).send({
      data: results,
      success: true,
      message: "Admin Fetched Successfully",
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
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};
    results.totalCount = pendingAddMoneyToWalletRequests.length;
    results.totalPages = Math.ceil(
      pendingAddMoneyToWalletRequests.length / limit
    );
    if (endIndex < pendingAddMoneyToWalletRequests.length) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    results.results = pendingAddMoneyToWalletRequests.slice(
      startIndex,
      endIndex
    );

    return res.status(200).send({
      data: results,
      success: true,
      message: "Admin Fetched Successfully",
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
      .populate({
        path: "userId",
        select: "name uniqueId", // Exclude the password field
      });
    if (!pendingWalletWithdrawalRequest) {
      return res.status(404).send({
        success: false,
        message: "No Wallet Withdrawal Requests Found",
      });
    }
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};
    results.totalCount = pendingWalletWithdrawalRequest.length;
    results.totalPages = Math.ceil(
      pendingWalletWithdrawalRequest.length / limit
    );
    if (endIndex < pendingWalletWithdrawalRequest.length) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    results.results = pendingWalletWithdrawalRequest.slice(
      startIndex,
      endIndex
    );

    return res.status(200).send({
      data: results,
      success: true,
      message: "Admin Fetched Successfully",
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

    const uniqueId = walletWithdrawalRequest.uniqueId;
    const user = await newUserModel.findOne({ uniqueId });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User Not Found",
      });
    }

    await walletWithdrawalRequest.save();

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
    walletWithdrawalRequest.error = "cannot find account number";
    const user = await newUserModel.findOne({
      uniqueId: walletWithdrawalRequest.uniqueId,
    });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User Not Found",
      });
    }
    user.walletBalance = user.walletBalance + walletWithdrawalRequest.amount;

    await user.save();
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

// Removed this api as it is not required starts here
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
// Removed this api as it is not required ends here

const getAlLusers = async (req, res) => {
  const users = await newUserModel.find({});
  if (!users) {
    return res.status(404).send({
      success: false,
      message: "Users not found",
    });
  }
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results = {};
  results.totalCount = users.length;
  results.totalPages = Math.ceil(users.length / limit);
  if (endIndex < users.length) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }
  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }
  results.results = users.slice(startIndex, endIndex);
  return res.status(200).send({
    data: results,
    success: true,
    message: "Admin Fetched Successfully",
  });
};

//Routes(frontEnd) me change karna hai,Not Paid me change karna hai, master admin routes
const getUserNotPaidJoiningFee = async (req, res) => {
  try {
    const user = await newUserModel.find({
      isPaidJoiningFee: false,
      status: "pending",
    });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Users not found",
      });
    }
    if (user.length === 0) {
      return res.status(200).send({
        success: true,
        data: user,
        message: "No users found who have not paid the joining fee",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Users fetched successfully",
      data: user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};
const getUserRegisteredViaSite = async (req, res) => {
  try {
    const users = await newUserModel.find({ registeredViaSite: true });
  } catch (error) {
    console.log(error);
    return res.status(404).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};
const getUserDetails = async (req, res) => {
  try {
    const users = await newUserModel
      .find({})
      .select("-_id name uniqueId mobileNumber panCard state city");
    if (!users) {
      return res.status(404).send({
        success: false,
        message: "Users not found",
      });
    }
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};
    results.totalCount = users.length;
    results.totalPages = Math.ceil(users.length / limit);
    if (endIndex < users.length) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    results.results = users.slice(startIndex, endIndex);

    return res.status(200).send({
      data: results,
      success: true,
      message: "Admin Fetched Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};

const getCountForMasterAdminPanel = async (req, res) => {
  try {
    const pendingUser = await newUserModel.find({ status: "pending" });
    const approvedUser = await newUserModel.find({ status: "approved" });
    const rejectedUser = await newUserModel.find({ status: "rejected" });
    const totalUser = await newUserModel.find({});
    const pendingCoupon = await CouponPurchased.find({ status: "pending" });
    const approvedCoupon = await CouponPurchased.find({ status: "approved" });
    const rejectedCoupon = await CouponPurchased.find({ status: "rejected" });
    const totalCoupon = await CouponPurchased.find({});
    const pendingAddMoneyToWallet = await addToWalletHistory.find({
      status: "pending",
    });
    const approvedAddMoneyToWallet = await addToWalletHistory.find({
      status: "approved",
    });
    const rejectedAddMoneyToWallet = await addToWalletHistory.find({
      status: "rejected",
    });
    const totalAddMoneyToWallet = await addToWalletHistory.find({});
    const pendingWalletWithdrawal = await withdrawalHistory.find({
      status: "pending",
    });
    const approvedWalletWithdrawal = await withdrawalHistory.find({
      status: "approved",
    });
    const rejectedWalletWithdrawal = await withdrawalHistory.find({
      status: "rejected",
    });
    const totalWalletWithdrawal = await withdrawalHistory.find({});
    if (
      !pendingUser ||
      !approvedUser ||
      !rejectedUser ||
      !totalUser ||
      !pendingCoupon ||
      !approvedCoupon ||
      !rejectedCoupon ||
      !totalCoupon ||
      !pendingAddMoneyToWallet ||
      !approvedAddMoneyToWallet ||
      !rejectedAddMoneyToWallet ||
      !totalAddMoneyToWallet ||
      !pendingWalletWithdrawal ||
      !approvedWalletWithdrawal ||
      !rejectedWalletWithdrawal ||
      !totalWalletWithdrawal
    ) {
      return res.status(404).send({
        success: false,
        message: "Users not found",
      });
    }
    const data = {
      pendingUser: pendingUser.length,
      approvedUser: approvedUser.length,
      rejectedUser: rejectedUser.length,
      totalUser: totalUser.length,
      pendingCoupon: pendingCoupon.length,
      approvedCoupon: approvedCoupon.length,
      rejectedCoupon: rejectedCoupon.length,
      totalCoupon: totalCoupon.length,
      pendingAddMoneyToWallet: pendingAddMoneyToWallet.length,
      approvedAddMoneyToWallet: approvedAddMoneyToWallet.length,
      rejectedAddMoneyToWallet: rejectedAddMoneyToWallet.length,
      totalAddMoneyToWallet: totalAddMoneyToWallet.length,
      pendingWalletWithdrawal: pendingWalletWithdrawal.length,
      approvedWalletWithdrawal: approvedWalletWithdrawal.length,
      rejectedWalletWithdrawal: rejectedWalletWithdrawal.length,
      totalWalletWithdrawal: totalWalletWithdrawal.length,
    };
    return res.status(200).send({
      success: true,
      message: "Users fetched successfully",
      data: data,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};

const changeAlert = async (req, res) => {
  try {
    const { setAlert } = req.body;
    // 65311d28cfa85d1164740dc6
    const alert = await AlertModel.findByIdAndUpdate(
      "65311d28cfa85d1164740dc6",
      { alert: setAlert }
    );
    if (!alert) {
      return res.status(404).send({
        success: false,
        message: "Alert not found",
      });
    }
    await alert.save();
    return res.status(200).send({
      success: true,
      message: "Alert Created Successfully",
    });
  } catch (error) {
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};

const getAlert = async (req, res) => {
  try {
    const alert = await AlertModel.findById("65311d28cfa85d1164740dc6");
    if (!alert) {
      return res.status(404).send({
        success: false,
        message: "Alert not found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Alert fetched successfully",
      data: alert,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};
const createEmployee = async (req, res) => {
  try {
    const { name, mobileNumber, uniqueId, perms } = req.body;
    const existingEmployee = await EmployeeModel.findOne({ uniqueId });
    if (existingEmployee) {
      return res.status(400).send({
        message: "Employee already exists",
        success: false,
      });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const masterAdmin = await newUserModel.findOne({ role: "Master Admin" });
    if (!masterAdmin) {
      return res.status(404).send({
        success: false,
        message: "Master Admin not found",
      });
    }

    const data = {
      name,
      mobileNumber,
      perms,
      uniqueId,
      password: hashedPassword,
      actualPriceOfCoupon: masterAdmin.actualPriceOfCoupon,
      couponPrice: masterAdmin.couponPrice,
    };
    const newEmployee = await EmployeeModel.create(data);
    if (!newEmployee) {
      return res.status(400).send({
        message: "Cannot Add New Employee",
        success: false,
      });
    }
    await newEmployee.save();

    return res.status(200).send({
      message: "Employee Added Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal server error",
      success: false,
    });
  }
};
const getEmployee = async (req, res) => {
  try {
    const employee = await EmployeeModel.find({});
    if (!employee) {
      return res.status(404).send({
        success: false,
        message: "Employee not found",
      });
    }
    if (employee.length === 0) {
      return res.status(200).send({
        success: false,
        message: "Employee not found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Employee fetched successfully",
      data: employee,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal server error",
      success: false,
    });
  }
};
const getUserPendingForPsa = async (req, res) => {
  try {
    const user = await newUserModel
      .find({ psaSet: false, role: "Retailer" })
      .select("-_id name uniqueId mobileNumber panCard state city psaSet");
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    if (user.length === 0) {
      return res.status(200).send({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal server error",
      success: false,
    });
  }
};
const addPSA = async (req, res) => {
  try {
    const { uniqueId, psaID, psaPassword, registerCode } = req.body;

    // Check if a PSA with the same psaID already exists
    const existingPSA = await PSA.findOne({ psaID });

    if (existingPSA) {
      return res.status(400).send({
        message: "PSA with the same psaID already exists",
        success: false,
      });
    }

    const user = await newUserModel.findOne({ uniqueId });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    const data = {
      uniqueId,
      psaId: psaID,
      psaPassword,
      registerCode,
    };

    const newPsaId = await PSA.create(data);

    if (!newPsaId) {
      return res.status(400).send({
        message: "Cannot Add New PSA",
        success: false,
      });
    }

    user.psaSet = true;
    await newPsaId.save();
    await user.save();

    return res.status(200).send({
      success: true,
      message: "PSA Added Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal server error",
      success: false,
    });
  }
};
const getUsersComplaints = async (req, res) => {
  const compliants = await complaintModel.find({});
  if (!compliants) {
    return res.status(404).send({
      success: false,
      message: "No Compliants found",
    });
  }

  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results = {};
  results.totalCount = compliants.length;
  results.totalPages = Math.ceil(compliants.length / limit);
  if (endIndex < compliants.length) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }
  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }
  results.results = compliants.slice(startIndex, endIndex);
  return res.status(200).send({
    data: results,
    success: true,
    message: "Complaints Fetched Successfully",
  });
};
const searchUser = async (req, res) => {
  try {
    const { search } = req.body;
    const user = await newUserModel.findOne({ uniqueId:search }).select("-_id -password -__v -isPaidJoiningFee -psaSet -updatedAt ");
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal server error",
      success: false,
    });
  }
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
  getUserNotPaidJoiningFee,
  getUserDetails,
  getCountForMasterAdminPanel,
  changeAlert,
  getAlert,
  createEmployee,
  getEmployee,
  getUserPendingForPsa,
  addPSA,
  getUsersComplaints,
  searchUser,
};
