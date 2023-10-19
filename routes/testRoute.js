const express = require("express");
const { purchaseCouponNew } = require("../controllers/testController");
const router = express.Router();

router.post('/calculateAndAssignCommissions', purchaseCouponNew);

module.exports = router;


