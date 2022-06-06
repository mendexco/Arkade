var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
  console.log("ENTRAMOS NA usuarioController");
  res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
  var fkEmpresa = req.body.empresaServer;

  if (fkEmpresa == undefined) {
    res.status(400).send("Sua empresa está undefined!");
  } else {
    usuarioModel
      .listar()
      .then(function (resultado) {
        if (resultado.length > 0) {
          res.status(200).json(resultado);
        } else {
          res.status(204).send("Nenhum resultado encontrado!");
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "Houve um erro ao realizar a consulta! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function entrar(req, res) {
  let email = req.body.emailServer;
  let password = req.body.passwordServer;

  if (email == undefined) {
    res.status(400).send("Email is undefined!");
  } else if (password == undefined) {
    res.status(400).send("Password is undefined!");
  } else {
    usuarioModel
      .entrar(email, password)
      .then(function (resultado) {
        console.log(`\nResultados encontrados: ${resultado.length}`);
        console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

        if (resultado.length == 1) {
          console.log(resultado);
          res.json(resultado[0]);
        } else if (resultado.length == 0) {
          res.status(403).send("Email e/ou senha inválido(s)");
        } else {
          res.status(403).send("Mais de um usuário com o mesmo login e senha!");
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o login! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function cadastrar(req, res) {
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
    usuarioModel
      .cadastrar(name, email, password, icon)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nThere was an error during signup (CONTROLLER)! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function listRank(req, res) {
  usuarioModel
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
      console.log("An error occurred while searching players: ", erro.sqlMessage);
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

  usuarioModel
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
    usuarioModel
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
  entrar,
  cadastrar,
  listRank,
  updatePlayerArk,
  registerItem,
  listar,
  testar,
};
