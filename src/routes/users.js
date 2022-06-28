var express = require("express");
var router = express.Router();

var userController = require("../controllers/userController");

router.post("/signup", function (req, res) {
    userController.signup(req, res);
})

router.post("/login", function (req, res) {
    userController.login(req, res);
});

router.get("/rankList/", function (req, res) {
    userController.listRank(req, res);
  });

router.put("/updatePlayer/:idPlayer", function (req, res) {
    userController.updatePlayerArk(req, res);
});

router.post("/setItem", function (req, res) {
    userController.registerItem(req, res);
})

router.post("/setItem", function (req, res) {
    userController.setCharacter(req, res);
});

module.exports = router;