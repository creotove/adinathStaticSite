const AccountDetails = require("../models/AccountDetails");
const ApprovalModel = require("../models/ApprovalModel");
const RolePriceModel = require("../models/RolePriceModel");
const addToWalletHistory = require("../models/addToWalletHistory");
const newUserModel = require("../models/newUserModel");
const withdrawalHistory = require("../models/withdrawalHistory");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const complaintModel = require("../models/ComplaintModel");
const EmployeeModel = require("../models/EmployeeModel");
const PSAModelRetailer = require("../models/PSAmodelRetailer");

const login = async (req, res) => {
  try {
    const { uniqueId, password } = req.body;
    // After Applying JWT
    const user = await newUserModel.findOne({ uniqueId });
    const employee = await EmployeeModel.findOne({ uniqueId });
    if (!user && !employee) {
      return res.status(400).json({
        success: false,
        message: "User Not Found in login",
      });
    }

    if (employee) {
      console.log("employee");
      const isMatchEmployee = await bcrypt.compare(password, employee.password);
      if (!isMatchEmployee) {
        return res.status(400).json({
          success: false,
          message: "Invalid Credentials",
        });
      }
      const token = jwt.sign({ id: employee._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      return res.status(200).json({
        success: true,
        token,
        data: employee,
        message: "Login Successfully",
      });
    }
    if (user) {
      console.log("user");
      const isMatchUser = await bcrypt.compare(password, user.password);
      if (!isMatchUser) {
        return res.status(400).json({
          success: false,
          message: "Invalid Credentials",
        });
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      res.status(200).json({
        success: true,
        token,
        data: user,
        message: "Login Successfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const createUser = async (req, res) => {
  try {
    const {
      name,
      email,
      role,
      uniqueId,
      pan,
      dob,
      aadharCard,
      createdBy,
      mobileNumber,
      state,
      city,
      pinCode,
    } = req.body;

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;

    // const couponPriceOfCreater = await newUserModel.findOneB ({ _id: createdBy });
    if (role === "Master Admin") {
      const newUser = new newUserModel({
        name,
        email,
        password: hashedPassword,
        role,
        dob,
        mobileNumber,
        uniqueId,
        state,
        city,
        pinCode,
        couponPrice: 100,
        actualPriceOfCoupon: 98,
      });
      await newUser.save();
      if (newUser) {
        return res.status(201).json({
          success: true,
          message: "User created successfully",
        });
      }
      return res.status(400).json({
        success: false,
        message: "Something went wrong",
      });
    }

    const couponPriceOfCreater = await newUserModel.findById(createdBy);
    const { couponPrice, actualPriceOfCoupon } = couponPriceOfCreater;
    const commissionOfCreatedByUser = couponPrice - actualPriceOfCoupon;

    // Create the new user with initial values
    const data = {
      name,
      email,
      password: hashedPassword,
      mobileNumber,
      role,
      dob,
      uniqueId,
      aadharCard,
      createdBy: couponPriceOfCreater.uniqueId,
      state,
      panCard: pan,
      city,
      pinCode,
      isPaidJoiningFee: true,
      couponPrice,
      actualPriceOfCoupon: couponPrice,
      commissionOfCreatedByUser,
    };

    const duplicateMobileNumber = await newUserModel.findOne({
      mobileNumber: mobileNumber,
    });
    if (duplicateMobileNumber) {
      return res.status(400).json({
        success: false,
        message: "Mobile Number already exists",
      });
    }
    const duplicateUniqueId = await newUserModel.findOne({
      uniqueId: uniqueId,
    });
    if (duplicateUniqueId) {
      return res.status(400).json({
        success: false,
        message: "Unique Id already exists",
      });
    }
    const duplicatePanCard = await newUserModel.findOne({
      panCard: pan,
    });
    if (duplicatePanCard) {
      return res.status(400).json({
        success: false,
        message: "Pan Card already exists",
      });
    }

    const newUser = await newUserModel.create(data);
    const setPartner = await newUserModel.findByIdAndUpdate(createdBy, {
      $push: {
        partners: newUser._id,
        commissionOfcreatedPartners: { commission: commissionOfCreatedByUser },
      },
    });
    // Save the new user to the database
    await newUser.save();

    res.status(201).json({
      success: true,
      data: newUser,
      message: "User created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: "Internal Server Error",
      success: false,
      message: error.message,
    });
  }
};
const createUserByEmp = async (req, res) => {
  try {
    const {
      name,
      email,
      role,
      uniqueId,
      pan,
      dob,
      aadharCard,
      createdBy,
      mobileNumber,
      state,
      city,
      pinCode,
    } = req.body;

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;

    const couponPriceOfCreater = await EmployeeModel.findById(createdBy);
    const { couponPrice, actualPriceOfCoupon } = couponPriceOfCreater;
    const commissionOfCreatedByUser = couponPrice - actualPriceOfCoupon;

    // Create the new user with initial values
    const data = {
      name,
      email,
      password: hashedPassword,
      mobileNumber,
      role,
      dob,
      uniqueId,
      aadharCard,
      createdBy: couponPriceOfCreater.uniqueId,
      state,
      panCard: pan,
      city,
      pinCode,
      isPaidJoiningFee: true,
      couponPrice,
      actualPriceOfCoupon: couponPrice,
      commissionOfCreatedByUser,
    };

    const duplicateMobileNumber = await newUserModel.findOne({
      mobileNumber: mobileNumber,
    });
    if (duplicateMobileNumber) {
      return res.status(400).json({
        success: false,
        message: "Mobile Number already exists",
      });
    }
    const duplicateUniqueId = await newUserModel.findOne({
      uniqueId: uniqueId,
    });
    if (duplicateUniqueId) {
      return res.status(400).json({
        success: false,
        message: "Unique Id already exists",
      });
    }
    const duplicatePanCard = await newUserModel.findOne({
      panCard: pan,
    });
    if (duplicatePanCard) {
      return res.status(400).json({
        success: false,
        message: "Pan Card already exists",
      });
    }

    const newUser = await newUserModel.create(data);
    const setPartner = await newUserModel.findByIdAndUpdate(createdBy, {
      $push: {
        partners: newUser._id,
        commissionOfcreatedPartners: { commission: commissionOfCreatedByUser },
      },
    });
    // Save the new user to the database
    await newUser.save();

    res.status(201).json({
      success: true,
      data: newUser,
      message: "User created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: "Internal Server Error",
      success: false,
      message: error.message,
    });
  }
};

const registerUserViaSite = async (req, res) => {
  try {
    const {
      name,
      email,
      role,
      uniqueId,
      pan,
      aadharCard,
      mobileNumber,
      state,
      city,
      pinCode,
    } = req.body;
    const data = {
      name,
      email,
      role,
      mobileNumber,
      uniqueId,
      aadharCard,
      state,
      panCard: pan,
      city,
      status: "registeredViaSite",
      pinCode,
      createdBy: "6524543d6499044021e90373",
    };
    const duplicateMobileNumber = await newUserModel.findOne({
      mobileNumber: mobileNumber,
    });
    if (duplicateMobileNumber) {
      return res.status(400).json({
        success: false,
        message: "Mobile Number already exists",
      });
    }
    const duplicateUniqueId = await newUserModel.findOne({
      uniqueId: uniqueId,
    });
    if (duplicateUniqueId) {
      return res.status(400).json({
        success: false,
        message: "Unique Id already exists",
      });
    }
    const duplicatePanCard = await newUserModel.findOne({
      panCard: pan,
    });
    if (duplicatePanCard) {
      return res.status(400).json({
        success: false,
        message: "Pan Card already exists",
      });
    }
    const newUser = await newUserModel.create(data);
    newUser;
    await newUser.save();
    res.status(201).json({
      success: true,
      data: newUser,
      message: "User created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: "Internal Server Error",
      success: false,
      message: error.message,
    });
  }
};

const fetchUserRolePrice = async (req, res) => {
  try {
    const price = await RolePriceModel.findOne(); // Assuming you have only one price document
    if (!price) {
      return res.status(404).send({
        message: "Price not found",
        success: false,
      });
    }
    return res.status(200).send({
      message: "Fetched Role Price Successfully",
      data: price,
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: "Internal Server Error",
      success: false,
    });
  }
};
const requestForApproval = async (req, res) => {
  try {
    const { userId, transactionId, rolePrice } = req.body;
    const user = await newUserModel.findById(userId);
    if (!user) {
      return res.status(404).send({
        error: "User not found in request for approval",
        success: false,
      });
    }
    if (user.status === "approved") {
      return res.status(400).send({
        error: "User already approved",
        success: false,
      });
    }
    if (user.status === "pending") {
      const request = await ApprovalModel.create({
        userId,
        name: user.name,
        uniqueId: user.uniqueId,
        role: user.role,
        rolePrice,
        transactionId,
        paid: true,
        success: true,
      });
      if (!request) {
        return res.status(400).send({
          error: "Something went wrong",
          success: false,
        });
      }
      user.isPaidJoiningFee = true;
      await user.save();
      return res.status(200).send({
        message: "Request sent successfully",
        success: true,
      });
    }
  } catch (error) {}
};
const fetchTransactionId = async (req, res) => {
  try {
    const { userId } = req.body;
    console.log(req.body);
    const transactionId = await ApprovalModel.findOne({ userId: userId });
    if (!transactionId) {
      return res.status(404).send({
        error: "Transaction Id not found",
        success: false,
      });
    }
    const data = { transactionId: transactionId.transactionId };
    return res.status(200).send({
      message: "Fetched Transaction Id Successfully",
      data: data,
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: "Internal Server Error in fetch transaction id",
      success: false,
    });
  }
};
const changeCouponPrice = async (req, res) => {
  try {
    const { userId, newCouponPrice } = req.body;
    console.log(req.body);

    const user = await newUserModel.findById(userId);

    if (!user) {
      return res.status(400).send({
        error: "User not found in change coupon price",
        success: false,
      });
    }
    if (user.role === "Retailer") {
      return res.status(400).send({
        error: "Retailer can not change coupon price",
        success: false,
      });
    }
    if (user.actualPriceOfCoupon > newCouponPrice) {
      return res.status(401).send({
        error: "Coupon price can not be less than actual price",
        success: false,
      });
    }

    // Update user's coupon price
    const changedPrice = await newUserModel.findByIdAndUpdate(
      userId,
      {
        couponPrice: newCouponPrice,
      },
      { new: true }
    );

    if (!changedPrice) {
      return res.status(400).send({
        error: "Coupon price not updated",
        success: false,
      });
    }
    console.log(changedPrice);
    res.status(200).send({
      message: "Coupon price updated successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: "Internal Server Error",
      success: false,
    });
  }
};
const getCouponPrice = async (req, res) => {
  try {
    const user = await newUserModel.findById(req.body.userId);
    if (!user) {
      return res.status(404).send({
        error: "User not found in get coupon price",
        success: false,
      });
    }
    const { couponPrice, actualPriceOfCoupon } = user;
    const data = {
      couponPrice,
      actualPriceOfCoupon,
    };
    res.status(200).send({
      data: data,
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: "Internal Server Error",
      success: false,
    });
  }
};
const getUserCommission = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await newUserModel.findById(userId);

    if (!user) {
      return res.status(404).send({
        error: "User not found in get user commission",
        success: false,
      });
    }
    const { commissionEarned } = user;

    res.status(200).send({
      data: commissionEarned,
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: "Internal Server Error",
      success: false,
    });
  }
};
const setAccountDetails = async (req, res) => {
  try {
    const { userId, accountNumber, bankName, accountHolderName, ifscCode } =
      req.body;

    const duplicate = await AccountDetails.findOne({ accountNumber });
    if (duplicate) {
      return res.status(400).send({
        error: "Account Number already exists",
        success: false,
      });
    }

    const accountDetails = new AccountDetails({
      userId,
      accountNumber,
      ifscCode,
      bankName,
      accountHolderName,
    });

    await accountDetails.save();
    return res.status(200).send({
      message: "Account details added successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: "Internal Server Error",
      success: false,
    });
  }
};
const withdrawCommissionRequest = async (req, res) => {
  try {
    const { uniqueId, amount, bankName } = req.body;
    const user = await newUserModel.findOne({ uniqueId });
    if (!user) {
      return res.status(404).send({
        message: "User not found in withdraw commission request",
        success: false,
      });
    }
    if (user.totalCommissionEarned < amount) {
      return res.status(404).send({
        error: "Insufficient balance",
        success: false,
      });
    }

    const data = {
      uniqueId,
      bankName,
      amount,
      userId: user._id,
    };
    const reqForWithdrawal = await withdrawalHistory.create(data);
    if (!reqForWithdrawal) {
      return res.status(404).send({
        error: "Something went wrong",
        success: false,
      });
    }
    user.totalCommissionEarned = user.totalCommissionEarned - amount;
    await user.save();
    await reqForWithdrawal.save();
    if (reqForWithdrawal) {
      return res.status(200).send({
        message: "Withdrawal request sent successfully",
        success: true,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: "Internal Server Error",
      success: false,
    });
  }
};
const getWithdrawalHistory = async (req, res) => {
  try {
    const { uniqueId } = req.body;

    const getAllWithdrawal = await withdrawalHistory.find({ uniqueId });

    if (!getAllWithdrawal) {
      return res.status(404).send({
        error: "Withdrawal history not found",
        success: false,
      });
    }
    if (getAllWithdrawal.length === 0) {
      return res.status(200).send({
        error: "No withdrawal history not found",
        success: true,
      });
    }

    res.status(200).send({
      data: getAllWithdrawal,
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: "Internal Server Error",
      success: false,
    });
  }
};
const getAccountDetails = async (req, res) => {
  try {
    const { uniqueId } = req.body;
    console.log(req.body);
    const accDetails = await AccountDetails.find({ userId: uniqueId });
    console.log(accDetails);
    if (accDetails.length === 0) {
      return res.status(200).send({
        error: "No account details found",
        success: false,
      });
    }
    return res.status(200).send({
      data: accDetails,
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: "Internal Server Error",
      success: false,
    });
  }
};
const getBankName = async (req, res) => {
  try {
    const { uniqueId } = req.body;
    const bankName = await AccountDetails.find({ userId: uniqueId }).select(
      "bankName -_id ifscCode"
    );

    if (bankName.length === 0) {
      return res.status(200).send({
        error: "No bank name found",
        success: false,
      });
    }
    return res.status(200).send({
      data: bankName,
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: "Internal server error",
      success: false,
    });
  }
};
const initiateAddMoneyToWallet = async (req, res) => {
  try {
    const { userId, amount, transactionId } = req.body;
    const user = await newUserModel.findById(userId);
    if (!user) {
      return res.status(404).send({
        error: "User not found in initiate add money to wallet",
        success: false,
      });
    }
    const reqForAddMoney = new addToWalletHistory({
      userId,
      amount,
      transactionId,
    });
    await reqForAddMoney.save();
    if (!reqForAddMoney) {
      return res.status(404).send({
        error: "Something went wrong",
        success: false,
      });
    }
    return res.status(200).send({
      message: "Add money request sent successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: "Internal Server Error",
      success: false,
    });
  }
};
// not using this
const getCreatedPartners = async (req, res) => {
  try {
    const { uniqueId } = req.body;
    const user = await newUserModel.findOne({ uniqueId });
    if (!user) {
      return res.status(404).send({
        error: "User not found  in get created partners",
        success: false,
      });
    }

    const { partners } = user;
    const allPartners = [];
    if (!partners) {
      return res.status(404).send({
        error: "No partners found",
        success: true,
        data: [],
      });
    }
    if (partners.length === 0) {
      return res.status(200).send({
        error: "No partners found",
        success: true,
        data: [],
      });
    }
    for (let i = 0; i < partners.length; i++) {
      const partnerDetails = await newUserModel.findById(partners[i]);
      allPartners.push(partnerDetails);
    }

    return res.status(200).send({
      data: allPartners,
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: "Internal Server Error",
      success: false,
    });
  }
};
const getAllPartnersCreatedByUser = async (req, res) => {
  try {
    const { uniqueId } = req.body;

    // Find the user who created partners based on uniqueId
    const user = await newUserModel
      .findOne({ uniqueId })
      .select("uniqueId role name panCard aadharCard createdBy mobileNumber)");

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const partners = await newUserModel
      .find({ createdBy: user.uniqueId })
      .select("-password -v -_id)");

    if (!partners) {
      return res
        .status(404)
        .json({ success: false, message: "No partners found" });
    }
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};
    results.totalCount = partners.length;
    results.totalPages = Math.ceil(partners.length / limit);
    if (endIndex < partners.length) {
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
    results.results = partners.slice(startIndex, endIndex);
    if (!partners) {
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
    console.error("Error in getAllPartnersCreatedByUser:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
const getAllPartnersCreatedByEmp = async (req, res) => {
  try {
    const { uniqueId } = req.body;

    // Find the user who created partners based on uniqueId
    const user = await EmployeeModel
      .findOne({ uniqueId })
      .select("uniqueId role name panCard aadharCard createdBy mobileNumber)");

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const partners = await newUserModel
      .find({ createdBy: user.uniqueId })
      .select("-password -v -_id)");

    if (!partners) {
      return res
        .status(404)
        .json({ success: false, message: "No partners found" });
    }
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};
    results.totalCount = partners.length;
    results.totalPages = Math.ceil(partners.length / limit);
    if (endIndex < partners.length) {
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
    results.results = partners.slice(startIndex, endIndex);
    if (!partners) {
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
    console.error("Error in getAllPartnersCreatedByUser:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};


const getAddMoneyToWalletHistory = async (req, res) => {
  try {
    const { userId } = req.body;
    const history = await addToWalletHistory.find({ userId });
    if (!history) {
      return res.status(404).send({
        error: "No history found",
        success: false,
      });
    }
    return res.status(200).send({
      data: history,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: "Internal Server Error",
      success: false,
    });
  }
};
const generateNextTicketId = async () => {
  const lastComplaint = await complaintModel.findOne().sort({ date: "desc" });

  if (lastComplaint) {
    const lastTicketId = lastComplaint.ticketId;
    const lastTicketIdNumber = parseInt(lastTicketId, 10);

    // Generate the next serial number and format it with leading zeros
    const nextTicketIdNumber = lastTicketIdNumber + 1;
    const nextTicketId = String(nextTicketIdNumber).padStart(
      lastTicketId.length,
      "0"
    );

    return nextTicketId;
  }

  // If no previous complaints, start with "0001" or any preferred format
  return "00001";
};

const createComplaint = async (req, res) => {
  try {
    const {
      userId,
      complaintTitle,
      complaintMessage,
      mobile,
      firstName,
      lastName,
      email,
      screenshot,
    } = req.body;
    const user = await newUserModel.findOne({ uniqueId: userId });
    if (!user) {
      return res.status(404).send({
        error: "User not found in create complaint",
        success: false,
      });
    }

    // Generate the next ticket ID
    const ticketId = await generateNextTicketId();

    const complaintData = {
      userId,
      complaintTitle,
      complaintMessage,
      mobile,
      firstName,
      lastName,
      email,
      ticketId,
      screenshot,
    };
    const newComplaint = await complaintModel.create(complaintData);

    if (!newComplaint) {
      return res.status(400).send({
        error: "Something went wrong",
        success: false,
      });
    }
    await newComplaint.save();

    return res.status(200).send({
      message: "Complaint filed successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getComplaints = async (req, res) => {
  try {
    const { userId } = req.body;
    const complaint = await complaintModel.find({ userId });
    if (!complaint) {
      return res.status(404).send({
        error: "No complaints found",
        success: false,
      });
    }
    return res.status(200).send({
      data: complaint,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: "Internal Server Error",
      success: false,
    });
  }
};
const authController = async (req, res) => {
  try {
    const user = await newUserModel.findById({ _id: req.body._id });
    const employee = await EmployeeModel.findById({ _id: req.body._id });
    if (!user && !employee) {
      return res.status(404).send({
        message: "user not found in auth controller",
        success: false,
      });
    }
    if (user) {
      user.password = undefined;
      return res.status(200).send({
        success: true,
        data: user,
      });
    }
    if (employee) {
      employee.password = undefined;
      return res.status(200).send({
        success: true,
        data: employee,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "auth error",
      success: false,
      error,
    });
  }
};
const transfertoUser = async (req, res) => {
  try {
    const { uniqueId, amount, senderId } = req.body;
    const user = await newUserModel.findOne({ uniqueId });
    const sender = await newUserModel.findOne({ uniqueId: senderId });
    if (!user) {
      return res.status(404).send({
        message: "Receiver Id is not valid",
        success: false,
      });
    }
    if (!sender) {
      return res.status(404).send({
        message: "Sender Id is not valid",
        success: false,
      });
    }
    if (user) {
      user.walletBalance = user.walletBalance + amount;
      await user.save();
      sender.walletBalance = sender.walletBalance - amount;
      await sender.save();
      return res.status(200).send({
        success: true,
        message: "Amount transfered successfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "auth error",
      success: false,
      error,
    });
  }
};

const getCouponPriceOfEmp = async (req, res) => {
  try {
    const { empId } = req.body;
    const couponPrice = await EmployeeModel.findOne({ uniqueId: empId }).select(
      "couponPrice actualPriceOfCoupon"
    );
    if (!couponPrice) {
      return res.status(404).send({
        message: "Coupon Price not found",
        success: false,
      });
    }
    return res.status(200).send({
      success: true,
      data: couponPrice,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "auth error",
      success: false,
      error,
    });
  }
};
const changeCouponPriceofEmp = async (req, res) => {
  try {
    const { userId, newCouponPrice } = req.body;
    const changedPrice = await EmployeeModel.findOne({ uniqueId: userId });
    if (!changedPrice) {
      return res.status(404).send({
        message: "Coupon Price not found",
        success: false,
      });
    }
    changedPrice.couponPrice = newCouponPrice;
    await changedPrice.save();
    return res.status(200).send({
      success: true,
      message: "Coupon Price updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "auth error",
      success: false,
      error,
    });
  }
};
const getPsaDetails = async (req, res) => {
  try {
    const { uniqueId } = req.body;
    const user = await PSAModelRetailer.findOne({ uniqueId });
    if (!user) {
      return res.status(404).send({
        message: "No PSA found",
        success: false,
      });
    }
    return res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal Server Error",
      success: false,
      error,
    });
  }
};

module.exports = {
  login, // All Users
  createUser, // Every user can create a user except Retailer
  requestForApproval,
  changeCouponPrice, // Every user can change coupon price except Retailer
  fetchUserRolePrice,
  getUserCommission,
  setAccountDetails,
  withdrawCommissionRequest,
  getWithdrawalHistory,
  getAccountDetails,
  initiateAddMoneyToWallet,
  getCreatedPartners,
  authController,
  createComplaint,
  getCouponPrice,
  getAllPartnersCreatedByUser,
  fetchTransactionId,
  getBankName,
  getAddMoneyToWalletHistory,
  getComplaints,
  getPsaDetails,
  registerUserViaSite,
  transfertoUser,
  getCouponPriceOfEmp,
  changeCouponPriceofEmp,
  createUserByEmp,
  getAllPartnersCreatedByEmp,
};
/* Works Perfectly fine

const calculateCommission = async (userId, couponPrice, quantity) => {
    try {
        const user = await newUserModel.findById(userId);

        if (!user) {
            return 0;
        }

        // Calculate commission for the current user
        const commission = (user.couponPrice - user.actualPriceOfCoupon) * quantity;

        // Update the user's commission fields
        user.totalCommissionEarned += commission;
        user.currentCommission = user.commissionOfCreatedByUser;

        // Save the user's changes
        await user.save();

        // Check if createdBy user and commissionOfcreatedPartners are defined
        if (user.createdBy && user.createdBy.commissionOfcreatedPartners) {
            user.createdBy.commissionOfcreatedPartners.push({ commission, user: userId });
            await user.createdBy.save();
        }

        // Update the commissionEarned array with the commission record
        user.commissionEarned.push({ commission, user: userId });
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
        const { userId, singleCouponPrice, quantity, totalCouponPrice } = req.body;

        // Find the user who is purchasing the coupon
        const user = await newUserModel.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const couponPurchase = await CouponPurchased.findOne({ userId });

        if (!couponPurchase) {
            return res.status(404).json({ error: 'Coupon purchase request not found' });
        }

        // Verify the transaction with the provided transactionId (you can implement your verification logic here)

        // If the transaction is verified, update the coupon purchase status to 'approved'
        couponPurchase.status = 'approved';
        await couponPurchase.save();

        // Calculate total commission based on the single coupon price and quantity
        const totalCommission = (singleCouponPrice - user.actualPriceOfCoupon) * quantity;

        // Update the user's couponPrice, currentCommission, totalCommissionEarned, and commissionOfCreatedByUser
        user.couponPrice = singleCouponPrice;
        user.commissionOfCreatedByUser += totalCommission;
        user.totalCommissionEarned += totalCommission;
        user.currentCommission = user.commissionOfCreatedByUser;
        await user.save();

        // Create a new CouponPurchased entry to store the purchase details
        const couponPurchased = new CouponPurchased({
            retailerId: userId,
            quantity,
            totalPrice: totalCouponPrice,
        });
        await couponPurchased.save();

        // Calculate and update commission hierarchy recursively
        await calculateCommission(userId, singleCouponPrice, quantity);

        res.status(200).json({ message: 'Coupon purchased successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
*/
