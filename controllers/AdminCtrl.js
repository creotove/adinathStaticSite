const CouponPurchased = require("../models/couponPurchased");
const newUserModel = require("../models/newUserModel");


const searchUser = async (req, res) => {
    try {
        const { query } = req.query;

        // Search for a user by ID, mobile number, or email
        const user = await newUserModel.findOne({
            $or: [
                { _id: query },
                { mobile: query },
                { email: query },
            ],
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const getUserFromQuery = async (req, res) => {
    try {
        const { name } = req.query;

        // Search for users with the same name
        const usersWithSameName = await newUserModel.find({ name });

        if (!usersWithSameName || usersWithSameName.length === 0) {
            return res.status(404).json({ error: 'No users with the same name found' });
        }

        res.status(200).json({ users: usersWithSameName });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const getAllUsers = async (req,res)=>{
    try {
        const allUsers = await newUserModel.find();
    if(!allUsers)
    {
        return res.status(404).send({
            success : false,
            error : `No Users Found`
        })
    }
    return res.status(200).send({
        success : true,
        data : allUsers
    })
        
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success : false,
            message : "Something Went Wrong",
            error : `${error}`
        })
        
    }
    
}
module.exports = {
   
    searchUser,
    getUserFromQuery,
    getAllUsers,
}