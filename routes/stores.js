const express = require('express');
const router = express.Router();

console.log("I can reach this point")

router.get('/', (req, res) => {
    console.log("I can not reach this point")
    res.render('app/about');
});

module.exports = router;