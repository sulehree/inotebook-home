const express = require("express");
const User= require("../models/users.model")
const router = express.Router(); 


// an endpoint /auth for users creation
router.get('/', (req,res) => {
    
    const user = User(req.body);
    res.send(user);
    user.save();
    console.log(req.body);

})

module.exports = router;