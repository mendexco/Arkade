var database = require("../database/config");

function searchStats(nameChar) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function searchStats(): ", nameChar)
    var instrucao = `
    SELECT * FROM Characters 
        JOIN Stages ON idChar = fkChar
            WHERE nameChar = '${nameChar}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    searchStats,
}