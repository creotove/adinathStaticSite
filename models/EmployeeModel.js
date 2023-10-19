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
    enum: ["isWalletApprover", "isCouponApprover", "allAccess"],
    required: true,
  },
  uniqueId: {
    type: String,
    unique: true,
    required: [true, "Unique Id is required"],
  },
  password:{
    type: String,
    required : [true, "password is required"]
  }
});
const EmployeeModel = mongoose.model("emplouee", employeeSchema);
module.exports = EmployeeModel;
