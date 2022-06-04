var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.put("/updatePlayer/:idPlayer", function (req, res) {
    usuarioController.updatePlayerArk(req, res);
});

router.post("/setItem", function (req, res) {
    usuarioController.registerItem(req, res);
})

router.post("/setItem", function (req, res) {
    usuarioController.setCharacter(req, res);
});

module.exports = router;