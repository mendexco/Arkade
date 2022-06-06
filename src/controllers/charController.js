var charModel = require("../models/charModel");

function listCharacters(req, res) {
  var playerID = req.params.player;
  charModel
    .listChar(playerID)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("No character found!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("An error occurred while searching characters: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function listStages(req, res) {
  var playerID = req.params.player;
  charModel
    .listStage(playerID)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("No character found!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("An error occurred while searching characters: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function setCharacter(req, res) {
  var idCharacter = req.body.idServer;

  if (idCharacter == undefined) {
      res.status(400).send("idChar is undefined!");
  } else {
      
      charModel.setBattleChar(idCharacter)
          .then(
              function (resultado) {
                  console.log(`\nFound characters: ${resultado.length}`);
                  console.log(`Results: ${JSON.stringify(resultado)}`); // transforma JSON em String

                  if (resultado.length == 1) {
                      console.log(resultado);
                      res.json(resultado[0]);
                  } else if (resultado.length == 0) {
                      res.status(403).send("Email e/ou senha inválido(s)");
                  } else {
                      res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                  }
              }
          ).catch(
              function (erro) {
                  console.log(erro);
                  console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                  res.status(500).json(erro.sqlMessage);
              }
          );
  }

}

module.exports = {
  listCharacters,
  listStages,
  setCharacter,
};
