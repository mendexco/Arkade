var medidaModel = require("../models/medidaModel");

function charStats(req, res) {
    let nameChar = req.body.nameServer;
  
    if (nameChar == undefined) {
        res.status(400).send("Character name is undefined!");
    } else {
        
        medidaModel.searchStats(nameChar)
            .then(
                function (resultado) {
                    console.log(`\nCharacter found: ${resultado.length}`);
                    console.log(`Results: ${JSON.stringify(resultado)}`);
  
                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Invalid name");
                    } else {
                        res.status(403).send("Error in controller");
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
    charStats,
}