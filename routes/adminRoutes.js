const express = require("express");
const {
    
    searchUser,
    getUserFromQuery,
    getAllUsers
} = require("../controllers/AdminCtrl");
const router = express.Router();

// All User fetching 

router.get('/allUser',getAllUsers)


router.get('/search', searchUser); // User based on id fetching
router.get("/getUserFromQuery", getUserFromQuery) // User based on name fetching







module.exports = router;


