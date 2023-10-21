const express = require("express");
const router = express.Router();

const {
  approveUser,
  rejectUser,
  getAllMasterAdmins,
  getAllAdmins,
  getAllMasterDistributor,
  getAllDistributor,
  getAllRetailer,
  rejectCouponPurchase,
  getCouponRequests,
  getUserForApproval,
  getRetailerForApproval,
  getMasterDistributorForApproval,
  getDistributorForApproval,
  getAdminForApproval,
  getAddMoneyToWalletRequests,
  approveAddMoneyToWalletRequest,
  rejectAddMoneyToWalletRequest,
  getWalletWithdrawalRequest,
  approveWalletWithdrawalRequest,
  rejectWalletWithdrawalRequest,
  calculateAndAssignCommissions,
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
} = require("../controllers/MasterAdminCtrl");

// router.get("/masterAdmin", getAllMasterAdmins);
router.get("/admin", getAllAdmins);
router.get("/masterDistributor", getAllMasterDistributor);
router.get("/distributor", getAllDistributor);
router.get("/retailer", getAllRetailer);
router.get("/allUsers", getAlLusers);
// Approve a user by ID
router.patch("/approveUser", approveUser);

// Reject a user by ID
router.patch("/rejectUser", rejectUser);

// Purchase a coupon Approval
// router.post('/approveCouponPurchase', purchaseCouponNew);
router.post("/calculateAndAssignCommissions", calculateAndAssignCommissions);

// Reject a coupon purchase request
router.post("/rejectCouponPurchase", rejectCouponPurchase);

// Get all users for approval
router.get("/getUserForApproval", getUserForApproval);

//Get Retailer for Approval
router.get("/getRetailerForApproval", getRetailerForApproval);

//Get Master Distributor for Approval
router.get("/getMasterDistributorForApproval", getMasterDistributorForApproval);

//Get Distributor for Approval
router.get("/getDistributorForApproval", getDistributorForApproval);

//GET Admin for Approval
router.get("/getAdminForApproval", getAdminForApproval);

//GET Coupon Purchase Requests
router.get("/getCouponRequests", getCouponRequests);

router.get("/getAddMoneyToWalletRequests", getAddMoneyToWalletRequests);

router.patch(
  "/approveAddMoneyToWalletRequest/:id",
  approveAddMoneyToWalletRequest
);

router.patch(
  "/rejectAddMoneyToWalletRequest/:id",
  rejectAddMoneyToWalletRequest
);

router.get("/getWalletWithdrawalRequest", getWalletWithdrawalRequest);

router.patch(
  "/approveWalletWithdrawalRequest/:id",
  approveWalletWithdrawalRequest
);

router.patch(
  "/rejectWalletWithdrawalRequest/:id",
  rejectWalletWithdrawalRequest
);

router.get("/getUserNotPaidJoiningFee", getUserNotPaidJoiningFee);

// Only user details
router.get("/getUserDetails", getUserDetails);

//try route
router.get("/getCountForMasterAdminPanel", getCountForMasterAdminPanel);

//Create alert
router.patch("/changeAlert", changeAlert);
router.get("/getAlert", getAlert);

//POST || Create Employee
router.post("/add-employee", createEmployee);
//GET || Get Employee
router.get("/get-employee", getEmployee);

//GET || Pending retailer for PSA
router.get("/getUserPendingForPsa", getUserPendingForPsa);

//POST || Add PSA for retailer
router.post("/addPSA", addPSA);

module.exports = router;
