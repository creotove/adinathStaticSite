const express = require("express");
const {
    initiateCouponPurchase, getPurchaseCouponHistory,
} = require("../controllers/retailerCtrl");
const router = express.Router()



router.post('/initiateCouponPurchase', initiateCouponPurchase);

router.post('/getPurchaseCouponHistory', getPurchaseCouponHistory)


module.exports = router;

