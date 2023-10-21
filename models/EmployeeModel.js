const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  mobileNumber: {
    type: String,
    required: [true, "Mobile Number is required"],
  },
  perms: {
    type: String,
    enum: [
      "isWalletApprover",
      "isCouponApprover",
      "isUserApprover",
      "allAccess",
    ],
    required: true,
  },
  actualPriceOfCoupon: {
    type: Number,
    default: 100,
  },
  couponPrice: {
    type: Number,
    default: 0,
  },
  uniqueId: {
    type: String,
    unique: true,
    required: [true, "Unique Id is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
});
const EmployeeModel = mongoose.model("emplouee", employeeSchema);
module.exports = EmployeeModel;
