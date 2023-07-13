
const { json } = require("express");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const obj = {
        "id": 1,
        "name":"Muhammad Abbas"
    }
    
    res.json(obj);

});

module.exports = router;
