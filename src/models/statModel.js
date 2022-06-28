const database = require("../database/config");

function searchStats(nameChar) {
    console.log("ACCESSING STATS MODEL \n \n\t\t >> If error de 'Error: connect ECONNREFUSED',\n \t\t >> verify your credentials to access at database\n \t\t >> and if your database is running properly. \n\n function searchStats(): ", nameChar)
    let instruction = `
    SELECT * FROM Characters 
        JOIN Stages ON idChar = fkChar
            WHERE nameChar = '${nameChar}';
    `;
    console.log("Executing the SQL Query: \n" + instruction);
    return database.execute(instruction);
}
module.exports = {
    searchStats,
}