const database = require("../database/config");

function login(emailPlayer, password) {
  console.log(
    "ACCESSING USER MODEL \n \n\t\t >> If error de 'Error: connect ECONNREFUSED',\n \t\t >> verify your credentials to access at database\n \t\t >> and if your database is running properly. \n\n function entrar(): ",
    emailPlayer,
    password
  );
  let instruction = `
        SELECT * FROM Player 
            WHERE emailPlayer = '${emailPlayer}'
                AND password = AES_ENCRYPT('${password}', 'arkcrypt');
    `;
  console.log("Executing the SQL Query: \n" + instruction);
  return database.execute(instruction);
}

function signup(name, email, password, icon) {
  console.log(
    "ACCESSING USER MODEL \n \n\t\t >> If error de 'Error: connect ECONNREFUSED',\n \t\t >> verify your credentials to access at database\n \t\t >> and if your database is running properly. \n\n function cadastrar():",
    name,
    email,
    "AES_ENCRYPT(password)"
  );
  let instruction = `
        INSERT INTO Player (namePlayer, emailPlayer, password, iconPlayer) VALUES 
        ('${name}', '${email}', AES_ENCRYPT('${password}', 'arkcrypt'), '${icon}');
    `;
  console.log("Executing the SQL Query: \n" + instruction);
  return database.execute(instruction);
}

function ranking() {
  console.log(
    "ACCESSING USER MODEL \n \n\t\t >> If error de 'Error: connect ECONNREFUSED',\n \t\t >> verify your credentials to access at database\n \t\t >> and if your database is running properly. \n\n function ranking()"
  );
  let instruction = `
        SELECT * FROM Player
            ORDER BY arkScore DESC, register ASC;
    `;
  console.log("Executing the SQL Query: \n" + instruction);
  return database.execute(instruction);
}

function updatePlayer(idPlayer, arkScore, arkCoins, fights, wins, loss, typeArk) {
  console.log(
    "ACCESSING USER MODEL \n \n\t\t >> If error de 'Error: connect ECONNREFUSED',\n \t\t >> verify your credentials to access at database\n \t\t >> and if your database is running properly. \n\n function updatePlayer():",
    idPlayer,
    arkScore,
    arkCoins,
    fights,
    wins,
    loss,
    typeArk
  );
  let instruction = "";
  if (typeArk == "all") {
    instruction = `
        UPDATE Player SET 
        arkScore = ${arkScore},
        arkCoin = ${arkCoins},
        fights = ${fights},
        wins = ${wins},
        loss = ${loss}
        WHERE idPlayer = ${idPlayer};
        `;
  } else {
    instruction = `
        UPDATE Player SET 
        ${typeArk} = ${arkCoins} 
        WHERE idPlayer = ${idPlayer};
        `;
  }
  console.log("Executing the SQL Query: \n" + instruction);
  return database.execute(instruction);
}

function settingItem(fkPlayer, fkType, itemID) {
  console.log(
    "ACCESSING USER MODEL \n \n\t\t >> If error de 'Error: connect ECONNREFUSED',\n \t\t >> verify your credentials to access at database\n \t\t >> and if your database is running properly. \n\n function settingItem():",
    fkPlayer,
    fkType,
    itemID
  );
  let instruction = "";
  if (fkType == "Initial") {
    instruction = `
        INSERT INTO Items (fkPlayer, fkChar, fkStage) VALUES 
        (${fkPlayer}, ${itemID}, ${itemID});
    `;
  } else {
    instruction = `
        INSERT INTO Items (fkPlayer, fk${fkType}) VALUES 
        (${fkPlayer}, ${itemID});
        `;
  }
  console.log("Executing the SQL Query: \n" + instruction);
  return database.execute(instruction);
}

module.exports = {
  login,
  signup,
  ranking,
  updatePlayer,
  settingItem,
};
