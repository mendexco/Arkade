const database = require("../database/config");

function listChar(idPlayer) {
    console.log("ACCESSING CHARS MODEL \n \n\t\t >> If error de 'Error: connect ECONNREFUSED',\n \t\t >> verify your credentials to access at database\n \t\t >> and if your database is running properly. \n\n function listChar()");
    let instruction = `
    SELECT idPlayer, namePlayer, idChar, nameChar FROM Player 
        JOIN Items ON idPlayer = fkPlayer
            RIGHT JOIN Characters ON idChar = fkChar
                WHERE idPlayer = ${idPlayer};
    `;
    console.log("Executing the SQL Query: \n" + instruction);
    return database.execute(instruction);
}

function listStage(idPlayer) {
    console.log("ACCESSING CHARS MODEL \n \n\t\t >> If error de 'Error: connect ECONNREFUSED',\n \t\t >> verify your credentials to access at database\n \t\t >> and if your database is running properly. \n\n function listStage()");
    let instruction = `
    SELECT idStage, nameStage, nameChar FROM Items
	    JOIN Stages ON Stages.idStage = Items.fkStage		
	    	JOIN Characters ON Characters.idChar = Stages.fkChar
	    		WHERE fkPlayer = ${idPlayer};
    `;
    console.log("Executing the SQL Query: \n" + instruction);
    return database.execute(instruction);
}

function setBattleChar(idChar) {
    console.log("ACCESSING CHARS MODEL \n \n\t\t >> If error de 'Error: connect ECONNREFUSED',\n \t\t >> verify your credentials to access at database\n \t\t >> and if your database is running properly. \n\n function setBattleChar(): ", idChar)
    let instruction = `
    SELECT * FROM Characters 
	    JOIN BasicMetrics ON idBasic = fkBasic
		    JOIN AdvancedMetrics ON idAdvanced = fkAdvanced
			    WHERE idChar = ${idChar};
    `;
    console.log("Executing the SQL Query: \n" + instruction);
    return database.execute(instruction);
}
module.exports = {
    listChar,
    listStage,
    setBattleChar,
}
