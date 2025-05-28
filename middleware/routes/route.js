const express = require('express')
const router = express.Router()

// middlewares
const auth = function (req, res, next) {
  console.log('Authenticating user...');

  // dummy user
     req.user = { id: 1, role:"student" };
     if (req.user){
       // if a valid user is there in req,then proceed to next middleware
       next();
     }
     else{
       // if not valid user, then send error response
       res.json({
           success: false,
           message: "Invalid user",
       })
    }
};

const isStudent = function (req, res, next) {
    console.log("i am inside student wala middleware");

     if (req.user.role === 'student') {
        next();
     }
     else {
        res.json({
            success: false,
            message: "You are not a student",
        })
     }
}

const isAdmin = function (req, res, next) {
    console.log("i am inside admin wala middleware");

     if (req.user.role === 'admin') {
        next();
     }
     else {
        res.json({
            success: false,
            message: "You are not an admin",
        })
     }
}

// route-specific middleware

// this route will only be accessible to authenticated admins
router.get('/admin', auth, isAdmin, (req, res) => {
    console.log("i am inside admin route");
    res.send("admin specific route ")
});


//ye student wala route sirf authenticated student ke liye hoga
router.get('/student', auth, isStudent, (req, res) => {
    console.log("i am inside student route");
    res.send("student specific route ")
});

module.exports = router
