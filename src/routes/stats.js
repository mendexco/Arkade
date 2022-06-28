var express = require("express");
var router = express.Router();

var statController = require("../controllers/statController");

router.post("/charDetails", function (req, res) {
    statController.charStats(req, res);
});

module.exports = router;