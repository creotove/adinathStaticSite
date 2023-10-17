const express = require("express");
const router = express.Router();

const { approveUser, rejectUser, purchaseCouponNew, rejectCouponPurchase, getUserForApproval, getRetailerForApproval, getMasterDistributorForApproval, getDistributorForApproval, getAdminForApproval } = require("../controllers/MasterAdminCtrl");


// Approve a user by ID
router.patch('/approveUser', approveUser);

// Reject a user by ID
router.patch('/rejectUser', rejectUser);


// Purchase a coupon Approval
router.post('/approveCouponPurchase', purchaseCouponNew);

// Reject a coupon purchase request
router.post('/rejectCouponPurchase', rejectCouponPurchase);

// Get all users for approval
router.get('/getUserForApproval', getUserForApproval);

//Get Retailer for Approval
router.get('/getRetailerForApproval', getRetailerForApproval);

//Get Master Distributor for Approval
router.get('/getMasterDistributorForApproval', getMasterDistributorForApproval);

//Get Distributor for Approval
router.get('/getDistributorForApproval', getDistributorForApproval);

//GET Admin for Approval
router.get('/getAdminForApproval', getAdminForApproval);


module.exports = router;

