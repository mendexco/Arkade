var charModel = require("../models/charModel");

function listCharacters(req, res) {
  charModel
    .listChar()
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

// function editarList(req, res) {
//   var idUsuario = req.params.idUsuario;
//   avisoModel
//     .editarList(idUsuario)
//     .then(function (resultado) {
//       if (resultado.length > 0) {
//         res.status(200).json(resultado);
//       } else {
//         res.status(204).send("Nenhum dado encontrado!");
//       }
//     })
//     .catch(function (erro) {
//       console.log(erro);
//       console.log("Houve um erro ao buscar o usuário: ", erro.sqlMessage);
//       res.status(500).json(erro.sqlMessage);
//     });
// }

// function editarUpdate(req, res) {
//   var idUsuario = req.params.idUsuario;
//   var nome = req.body.nomeServer;
//   var email = req.body.emailServer;
//   var senha = req.body.senhaServer;
//   var cargo = req.body.cargoServer;

//   avisoModel
//     .editarUpdate(idUsuario, nome, email, senha, cargo)
//     .then(function (resultado) {
//       res.json(resultado);
//     })
//     .catch(function (erro) {
//       console.log(erro);
//       console.log(
//         "\nHouve um erro ao realizar o update! Erro: ",
//         erro.sqlMessage
//       );
//       res.status(500).json(erro.sqlMessage);
//     });
// }

// function deletar(req, res) {
//   var idUsuario = req.params.idUsuario;

//   avisoModel
//     .deletar(idUsuario)
//     .then(function (resultado) {
//       res.json(resultado);
//     })
//     .catch(function (erro) {
//       console.log(erro);
//       console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
//       res.status(500).json(erro.sqlMessage);
//     });
// }

module.exports = {
  listCharacters,
  // editarList,
  // editarUpdate,
  // deletar,
};
