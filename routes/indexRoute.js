const express = require('express');
const { createUser } = require('../controllers/userController');
const { loginHandler } = require('../controllers/loginController');
const router =express.Router();

// Routes and their functions which is controllers
router.get("/", (req,res)=>{
    res.render("index.ejs");
});

router.get("/user/signup", (req,res)=>{
    res.render("./partials/registerForm.ejs");
});

router.post("/user/signup/newUser",createUser);

router.post("/user/login/",loginHandler);



module.exports = router;