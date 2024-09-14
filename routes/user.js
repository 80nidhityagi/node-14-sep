const express = require('express');
const router = express.Router();
const usercontroller = require('../controller/usercontroller')

router.get('/user',(req,res)=>{
    usercontroller.getAllUsers(req,res);
  
})
router.get('/user/:id',(req,res)=>{
    usercontroller.getUser(req,res);
  
})
module.exports = router;