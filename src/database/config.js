// IF YOUR WORKBENCH RETURN THIS ERROR:
// "Client does not support authentication protocol requested by server; consider upgrading MySQL client"
// Execute the following query in MYSQL Workbench:
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
// flush privileges;
// ORIGINAL LINK WITH SOLUTION: https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server
var mysql = require("mysql2");
var sql = require('mssql');

// SQL SERVER - AZURE CONNECTION (CLOUD)
var sqlServerConfig = {
    user: "",
    password: "",
    database: "",
    server: "",
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure
    }
}

// MYSQL WORKBENCH CONNECTION (LOCAL)
var mySqlConfig = {
    host: "localhost",
    user: "root",
    database: "ARKADE",
    password: "YOUR PASSWORD",
};

function execute(instruction) {
    // VERIFY AMBIENT IN app.js
    if (process.env.PROCCESS_AMBIENT == "production") {
        return new Promise(function (resolve, reject) {
            sql.connect(sqlServerConfig).then(function () {
                return sql.query(instruction);
            }).then(function (results) {
                console.log(results);
                resolve(results.recordset);
            }).catch(function (erro) {
                reject(erro);
                console.log('ERRO: ', erro);
            });
            sql.on('error', function (erro) {
                return ("ERROR AT SQL SERVER (Azure): ", erro);
            });
        });
    } else if (process.env.PROCCESS_AMBIENT == "development") {
        return new Promise(function (resolve, reject) {
            var conexao = mysql.createConnection(mySqlConfig);
            conexao.connect();
            conexao.query(instruction, function (erro, results) {
                conexao.end();
                if (erro) {
                    reject(erro);
                }
                console.log(results);
                resolve(results);
            });
            conexao.on('error', function (erro) {
                return ("ERROR AT MySQL WORKBENCH (Local): ", erro.sqlMessage);
            });
        });
    } else {
        return new Promise(function (resolve, reject) {
            console.log("\nO AMBIENT (production OR development) WAS NOT DEFINED app.js\n");
            reject("NOT CONFIGURED AMBIENT IN app.js")
        });
    }
}

module.exports = {
    execute
}