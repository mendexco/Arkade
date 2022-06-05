var database = require("../database/config")

function listar(fkEmpresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", fkEmpresa);
    var instrucao = `
        SELECT fkAdmin, nomeUsuario, email, cargo, dtCadastro FROM usuario WHERE fkEmpresa = ${fkEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(emailPlayer, password) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", emailPlayer, password)
    let instrucao = `
        SELECT * FROM Player 
            WHERE emailPlayer = '${emailPlayer}'
                AND password = AES_ENCRYPT('${password}', 'arkcrypt');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(name, email, password) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", name, email, 'AES_ENCRYPT(password)');
    let instrucao = `
        INSERT INTO Player (namePlayer, emailPlayer, password) VALUES 
        ('${name}', '${email}', AES_ENCRYPT('${password}', 'arkcrypt'));
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function updatePlayer(idPlayer, arkScore, arkCoins, typeArk) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idPlayer, arkScore, arkCoins, typeArk );
    let instrucao = "";
    if (typeArk == "both") {
        instrucao = `
        UPDATE Player SET 
        arkScore = ${arkScore},
        arkCoin = ${arkCoins} 
        WHERE idPlayer = ${idPlayer};
        `;
    } else {
        instrucao = `
        UPDATE Player SET 
        ${typeArk} = ${arkCoins} 
        WHERE idPlayer = ${idPlayer};
        `;
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function settingItem(fkPlayer, fkType, itemID) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fkPlayer, fkType, itemID);
    let instrucao = "";
    if (fkType == "Initial") {
        instrucao = `
        INSERT INTO Items (fkPlayer, fkChar, fkStage) VALUES 
        (${fkPlayer}, ${itemID}, ${itemID});
    `;
    } else {
        instrucao = `
        INSERT INTO Items (fkPlayer, fk${fkType}) VALUES 
        (${fkPlayer}, ${itemID});
        `;
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    updatePlayer,
    settingItem,
    listar,
};