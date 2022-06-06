var database = require("../database/config");

function listChar(idPlayer) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listChar()");
    var instrucao = `
    SELECT idPlayer, namePlayer, idChar, nameChar FROM Player 
        JOIN Items ON idPlayer = fkPlayer
            RIGHT JOIN Characters ON idChar = fkChar
                WHERE idPlayer = ${idPlayer};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
// SELECT idChar, nameChar FROM Characters;

function listStage(idPlayer) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listStage()");
    var instrucao = `
    SELECT idStage, nameStage, nameChar FROM Items
	    JOIN Stages ON Stages.idStage = Items.fkStage		
	    	JOIN Characters ON Characters.idChar = Stages.fkChar
	    		WHERE fkPlayer = ${idPlayer};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function setBattleChar(idChar) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function setBattleChar(): ", idChar)
    var instrucao = `
    SELECT * FROM Characters 
	    JOIN BasicMetrics ON idBasic = fkBasic
		    JOIN AdvancedMetrics ON idAdvanced = fkAdvanced
			    WHERE idChar = ${idChar};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    listChar,
    listStage,
    setBattleChar,
}
