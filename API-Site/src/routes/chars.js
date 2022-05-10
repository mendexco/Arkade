var express = require("express");
var router = express.Router();

var charController = require("../controllers/charController");

router.get("/listChars/", function (req, res) {
    charController.listCharacters(req, res);
});

router.get("/editarList/:idUsuario", function (req, res) {
    avisoController.editarList(req, res);
});

router.put("/editarUpdate/:idUsuario", function (req, res) {
    avisoController.editarUpdate(req, res);
});

router.delete("/deletar/:idUsuario", function (req, res) {
    avisoController.deletar(req, res);
});

module.exports = router;