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
// SELECT idStage, nameStage, nameChar FROM Items
//     JOIN Stages ON Stages.idStage = Items.fkStage
//         JOIN Characters ON Characters.idChar = Stages.fkChar
//             WHERE fkPlayer = ${idPlayer};

// function editarList(idUsuario) {
//     console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", idUsuario);
//     var instrucao = `
//             SELECT
//             Comum.idUsuario as idUser,
//             Comum.nomeUsuario,
//             Comum.email,
//             Comum.senha,
//             Comum.cargo
//         FROM Usuario as Comum
//         WHERE Comum.idUsuario = ${idUsuario};
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

// function editarUpdate(idUsuario, nome, email, senha, cargo) {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idUsuario, nome, email, senha, cargo);
//     var instrucao = `
//         UPDATE usuario SET 
//         nomeUsuario = '${nome}', 
//         email = '${email}', 
//         senha = '${senha}', 
//         cargo = '${cargo}' 
//         WHERE idUsuario = ${idUsuario};
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

// function deletar(idUsuario) {
//     console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idUsuario);
//     var instrucao = `
        
//         DELETE FROM Usuario WHERE idUsuario = ${idUsuario};
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }
// UPDATE Usuario SET fkAdmin = null WHERE idUsuario = ${idUsuario};
module.exports = {
    listChar,
    listStage,
    setBattleChar,
    // editarList,
    // editarUpdate,
    // deletar
}
