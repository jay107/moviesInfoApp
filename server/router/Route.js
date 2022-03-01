const express = require("express");
const msg = require("")
const router = express.Router();

router.post("/contact", (req, res) => {
    const {name, email, message} = req.body;
    const msgData = new msg({name, email, message});

    msgData.save().then(() => {
        res.status(200).json({message: "save successfully..."})
    }).catch((error) => {
        res.status(404).json({error})
    });
})

module.exports = router;