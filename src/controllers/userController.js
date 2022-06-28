var userModel = require("../models/userModel");

function login(req, res) {
  let email = req.body.emailServer;
  let password = req.body.passwordServer;

  if (email == undefined) {
    res.status(400).send("Email is undefined!");
  } else if (password == undefined) {
    res.status(400).send("Password is undefined!");
  } else {
    userModel
      .login(email, password)
      .then(function (resultado) {
        console.log(`\nResults found : ${resultado.length}`);
        console.log(`Results: ${JSON.stringify(resultado)}`); // transforma JSON em String

        if (resultado.length == 1) {
          console.log(resultado);
          res.json(resultado[0]);
        } else if (resultado.length == 0) {
          res.status(403).send("E-mail or password invalids (CONTROLLER)");
        } else {
          res.status(403).send("More than one user with the same E-mail and password (CONTROLLER)");
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nThere was an error while logging in! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function signup(req, res) {
  let name = req.body.nameServer;
  let email = req.body.emailServer;
  let password = req.body.passwordServer;
  let icon = req.body.iconServer;

  if (name == undefined) {
    res.status(400).send("Your name is undefined!");
  } else if (email == undefined) {
    res.status(400).send("Your e-mail is undefined!");
  } else if (password == undefined) {
    res.status(400).send("Your password is undefined!");
  } else if (icon == undefined) {
    res.status(400).send("Your icon is undefined!");
  } else {
    userModel
      .signup(name, email, password, icon)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nThere was an error signing up (CONTROLLER)! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function listRank(req, res) {
  userModel
    .ranking()
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("No players found!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("An error occurred while searching players (CONTROLLER): ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function updatePlayerArk(req, res) {
  let idPlayer = req.params.idPlayer;
  let arkScore = req.body.scoreServer;
  let arkCoins = req.body.coinsServer;
  let fights = req.body.fightsServer;
  let wins = req.body.winsServer;
  let loss = req.body.lossServer;
  let arkType = req.body.typeServer;

  if (arkScore < 0) {
    arkScore = 0;
  }

  userModel
    .updatePlayer(idPlayer, arkScore, arkCoins, fights, wins, loss, arkType)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nThere was an error updating (CONTROLLER)! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function registerItem(req, res) {
  let IDplayer = req.body.playerIDServer;
  let typeItem = req.body.itemTypeServer;
  let IDitem = req.body.itemIDServer;

  if (typeItem == "fighter") {
    typeItem = "char";
  }

  typeItem = typeItem.replace(typeItem[0], typeItem[0].toUpperCase());

  if (IDplayer == undefined) {
    res.status(400).send("Player ID is undefined!");
  } else if (typeItem == undefined) {
    res.status(400).send("Item TYPE is undefined!");
  } else if (IDitem == undefined) {
    res.status(400).send("Item ID is undefined!");
  } else {
    userModel
      .settingItem(IDplayer, typeItem, IDitem)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nThere was an error updating (CONTROLLER)! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  login,
  signup,
  listRank,
  updatePlayerArk,
  registerItem,
};
