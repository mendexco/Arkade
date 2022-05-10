// sessionStorage.PLAYER_MAXWIDTH_IDLE = 1920;
// sessionStorage.PLAYER_MAXWIDTH_WIN = 7040;
// sessionStorage.PLAYER_SPEED_IDLE = 80;
// sessionStorage.PLAYER_SPEED_WIN = 100;
// sessionStorage.PLAYER_NAME = "Ryu";
// sessionStorage.PLAYER_WIDTH = 16;
// sessionStorage.PLAYER_HEIGHT = 50;
// sessionStorage.PLAYER_LIFE = 100;
// sessionStorage.PLAYER_ATTACK = 20;
// sessionStorage.PLAYER_NAME_M1 = "";
// sessionStorage.PLAYER_DMG_M1 = 15;
// sessionStorage.PLAYER_NAME_M2 = "";
// sessionStorage.PLAYER_DMG_M2 = 20;
// sessionStorage.PLAYER_NAME_M3 = "";
// sessionStorage.PLAYER_DMG_M3 = 30;
// sessionStorage.PLAYER_PR = 30;
// sessionStorage.PLAYER_MR = 20;
// sessionStorage.PLAYER_SPECIAL = 3600;

// sessionStorage.ENEMY_MAXWIDTH_IDLE = 2730;
// sessionStorage.ENEMY_MAXWIDTH_WIN = 1092;
// sessionStorage.ENEMY_SPEED_IDLE = 70;
// sessionStorage.ENEMY_SPEED_WIN = 200;
// sessionStorage.ENEMY_NAME = "Sagat";
// sessionStorage.ENEMY_WIDTH = 18;
// sessionStorage.ENEMY_HEIGHT = 60;
// sessionStorage.ENEMY_LIFE = 95;
// sessionStorage.ENEMY_ATTACK = 22;
// sessionStorage.ENEMY_NAME_M1 = "";
// sessionStorage.ENEMY_DMG_M1 = 15;
// sessionStorage.ENEMY_NAME_M2 = "";
// sessionStorage.ENEMY_DMG_M2 = 20;
// sessionStorage.ENEMY_NAME_M3 = "";
// sessionStorage.ENEMY_DMG_M3 = 30;
// sessionStorage.ENEMY_PR = 40;
// sessionStorage.ENEMY_MR = 15;
// sessionStorage.ENEMY_SPECIAL = 1600;
// setup all necessary variables to the code
// dice and roll vars
var rollAction = 0;
var diceSides = 0;

sessionStorage.PLAYER_ATK_S = 1050;
sessionStorage.PLAYER_ATK_W = 33;
sessionStorage.PLAYER_ATK_H = 58;
sessionStorage.PLAYER_SP1_S = 1920;
sessionStorage.PLAYER_SP1_W = 34;
sessionStorage.PLAYER_SP1_H = 68;
sessionStorage.PLAYER_SP2_S = 820;
sessionStorage.PLAYER_SP2_W = 57;
sessionStorage.PLAYER_SP2_H = 57;
sessionStorage.PLAYER_SP3_S = 1980;
sessionStorage.PLAYER_SP3_W = 34;
sessionStorage.PLAYER_SP3_H = 55;

sessionStorage.ENEMY_ATK_S = 640;
sessionStorage.ENEMY_ATK_W = 26;
sessionStorage.ENEMY_ATK_H = 52;
sessionStorage.ENEMY_SP1_S = 1190;
sessionStorage.ENEMY_SP1_W = 20;
sessionStorage.ENEMY_SP1_H = 100;
sessionStorage.ENEMY_SP2_S = 1620;
sessionStorage.ENEMY_SP2_W = 30;
sessionStorage.ENEMY_SP2_H = 72;
sessionStorage.ENEMY_SP3_S = 3540;
sessionStorage.ENEMY_SP3_W = 34;
sessionStorage.ENEMY_SP3_H = 55;

// FIGHTERS
// player vars ------
var playerName = sessionStorage.PLAYER_NAME;
var playerWidth = sessionStorage.PLAYER_WIDTH;
var playerHeight = sessionStorage.PLAYER_HEIGHT;
var playerLifeTotal = sessionStorage.PLAYER_LIFE;
var playerLifeNow = playerLifeTotal;
var playerPercentLife = 100;
var playerAttack = sessionStorage.PLAYER_ATTACK;
var pATKspeed = sessionStorage.PLAYER_ATK_S;
var pATKwidth = sessionStorage.PLAYER_ATK_W;
var pATKheight = sessionStorage.PLAYER_ATK_H;
var playerGauge = 1;
var playerNameM1 = sessionStorage.PLAYER_NAME_M1;
var playerDmgM1 = sessionStorage.PLAYER_DMG_M1;
var pSP1speed = sessionStorage.PLAYER_SP1_S;
var pSP1width = sessionStorage.PLAYER_SP1_W;
var pSP1height = sessionStorage.PLAYER_SP1_H;
var playerNameM2 = sessionStorage.PLAYER_NAME_M2;
var playerDmgM2 = sessionStorage.PLAYER_DMG_M2;
var pSP2speed = sessionStorage.PLAYER_SP2_S;
var pSP2width = sessionStorage.PLAYER_SP2_W;
var pSP2height = sessionStorage.PLAYER_SP2_H;
var playerNameM3 = sessionStorage.PLAYER_NAME_M3;
var playerDmgM3 = sessionStorage.PLAYER_DMG_M3;
var pSP3speed = sessionStorage.PLAYER_SP3_S;
var pSP3width = sessionStorage.PLAYER_SP3_W;
var pSP3height = sessionStorage.PLAYER_SP3_H;
var playerPR = sessionStorage.PLAYER_PR;
var playerMR = sessionStorage.PLAYER_MR;
var playerSpecial = sessionStorage.PLAYER_SPECIAL;
// opponent vars ------
var enemyName = sessionStorage.ENEMY_NAME;
var enemyWidth = sessionStorage.ENEMY_WIDTH;
var enemyHeight = sessionStorage.ENEMY_HEIGHT;
var enemyLifeTotal = sessionStorage.ENEMY_LIFE;
var enemyLifeNow = enemyLifeTotal;
var enemyPercentLife = 100;
var enemyAttack = sessionStorage.ENEMY_ATTACK;
var eATKspeed = sessionStorage.ENEMY_ATK_S;
var eATKwidth = sessionStorage.ENEMY_ATK_W;
var eATKheight = sessionStorage.ENEMY_ATK_H;
var enemyGauge = 1;
var enemyNameM1 = sessionStorage.ENEMY_NAME_M1;
var enemyDmgM1 = sessionStorage.ENEMY_DMG_M1;
var eSP1speed = sessionStorage.ENEMY_SP1_S;
var eSP1width = sessionStorage.ENEMY_SP1_W;
var eSP1height = sessionStorage.ENEMY_SP1_H;
var enemyNameM2 = sessionStorage.ENEMY_NAME_M2;
var enemyDmgM2 = sessionStorage.ENEMY_DMG_M2;
var eSP2speed = sessionStorage.ENEMY_SP2_S;
var eSP2width = sessionStorage.ENEMY_SP2_W;
var eSP2height = sessionStorage.ENEMY_SP2_H;
var enemyNameM3 = sessionStorage.ENEMY_NAME_M3;
var enemyDmgM3 = sessionStorage.ENEMY_DMG_M3;
var eSP3speed = sessionStorage.ENEMY_SP3_S;
var eSP3width = sessionStorage.ENEMY_SP3_W;
var eSP3height = sessionStorage.ENEMY_SP3_H;
var enemyPR = sessionStorage.ENEMY_PR;
var enemyMR = sessionStorage.ENEMY_MR;
var enemySpecial = sessionStorage.ENEMY_SPECIAL;

// FIGHT FLOW
// turn vars
var turnCounter = 1;
var turnOwner = "player"; //first turn definitions
p_turn.innerHTML = `${turnCounter}`;
var turnTimeout = 0;
var turnChanger = 1000;

// round vars
var roundNow = 1;
var playerRounds = 0;
var enemyRounds = 0;
var roundTimer = 0;
var roundSeconds = 99;

// additional vars
var gaugeColor = "rgb(58, 58, 245)";
var playerDefending = 0;
var enemyDefending = 0;
var defending = false;

// -----------------------------------------------------------------------------------------------------------------------------

// other essecial setus
setupEssencials();
function setupEssencials() {
  // setting stage
  div_stage.style.backgroundImage = `url(../assets/imgs/stages/stage_${playerName}.gif)`;
  // gif of each fighter
  player_sprite.style.backgroundImage = `url(assets/imgs/chars/${playerName}/Idle.gif)`;
  player_sprite.style.width = `${playerWidth}vw`;
  player_sprite.style.height = `${playerHeight}vh`;
  enemy_sprite.style.backgroundImage = `url(assets/imgs/chars/${enemyName}/Idle.gif)`;
  enemy_sprite.style.width = `${enemyWidth}vw`;
  enemy_sprite.style.height = `${enemyHeight}vh`;
  enemy_sprite.style.transform = "scale(-1,1)";
  // name of each character
  name_player.innerHTML = playerName;
  name_enemy.innerHTML = enemyName;
  // portrait of each character
  player_portrait.style.backgroundImage = `url(../assets/imgs/chars/${playerName}/PORTRAIT.png)`;
  enemy_portrait.style.backgroundImage = `url(../assets/imgs/chars/${enemyName}/PORTRAIT.png)`;
  // character magicks
  btn_m1.innerHTML = `${playerNameM1} <b>1</b>`;
  btn_m2.innerHTML = `${playerNameM2} <b>2</b>`;
  btn_m3.innerHTML = `${playerNameM3} <b>3</b>`;
  // visibility of magic options screen
  div_actions.style.display = "flex";
  div_magicks.style.display = "none";

  // start timer
  //   waitTimer(0.3);
  fillGauge();
}

// verify who will lead the next turn
// also redirects to the updateMenu() and buttonStatus() functions
function changeTurn() {
  p_turn.innerHTML = `${turnCounter}`;
  if (turnOwner == "player") {
    // next turn is opponent's one
    turnOwner = "enemy";
    enemy_sprite.style.backgroundImage = `url(assets/imgs/chars/${enemyName}/Idle.gif)`;
    console.log("Now it's opponent's turn!");
    buttonStatus("enemy");
    typeAI();
  } else {
    // next turn is player's one
    turnOwner = "player";
    player_sprite.style.backgroundImage = `url(assets/imgs/chars/${playerName}/Idle.gif)`;
    console.log("Now it's player's turn!");
    buttonStatus("player");
  }
}

function disableButtons() {
  btn_attack.disabled = true;
  btn_defend.disabled = true;
  btn_powers.disabled = true;
}

// enable or disable options buttons
function buttonStatus(playing) {
  if (playing == "player") {
    // enable buttons for player's turn
    btn_attack.disabled = false;
    btn_defend.disabled = false;
    btn_powers.disabled = false;
    console.log("enabling buttons... -------------------------");
  } else {
    // disable buttons for opponent's turn
    btn_attack.disabled = true;
    btn_defend.disabled = true;
    btn_powers.disabled = true;
    console.log("desabling buttons... -------------------------");
  }

  if (playerGauge == 0) {
    btn_powers.disabled = true;
  }
}

// enable a future possibility to BLOCK the attack at 'attackModifier()'
// also increase +1 mana gauge and change turnOwner
function defend() {
  disableButtons();
  setTimeout(changeTurn, turnChanger);

  if (turnOwner == "player") {
    playerDefending++;
    player_sprite.style.backgroundImage = `url(assets/imgs/chars/${playerName}/Defending.gif)`;
  } else {
    enemyDefending++;
    enemy_sprite.style.backgroundImage = `url(assets/imgs/chars/${enemyName}/Defending.gif)`;
  }
  defending = true;
  console.log(`${turnOwner.toUpperCase()} IS DEFENDING!...`);
  increaseGauge();
  turnCounter++;
  //   changeTurn();
}

// increase 1 gauge bar
// limit the gauge bars to 3
function increaseGauge() {
  // PLAYER POINTS
  if (turnOwner == "player") {
    playerGauge++;
    if (playerGauge > 3) {
      playerGauge--;
    }
  } else {
    // ENEMY POINTS
    if (turnOwner == "enemy") {
      enemyGauge++;
      if (enemyGauge > 3) {
        enemyGauge--;
      }
    }
  }
  fillGauge();
}

// update visually the gauge bars
// paint bars accordingly to the character gauge
function fillGauge() {
  // PLAYER GAUGE BAR
  if (playerGauge == 1) {
    player_gauge1.style.backgroundColor = `${gaugeColor}`;
    player_gauge2.style.backgroundColor = "transparent";
    player_gauge3.style.backgroundColor = "transparent";
    player_EX.style.backgroundColor = `rgba(107, 16, 47, 0.6)`;
    player_gauge1.style.boxShadow = ``;
    player_gauge2.style.boxShadow = ``;
    player_gauge3.style.boxShadow = ``;
  } else if (playerGauge == 2) {
    player_gauge1.style.backgroundColor = `${gaugeColor}`;
    player_gauge2.style.backgroundColor = `${gaugeColor}`;
    player_gauge3.style.backgroundColor = "transparent";
    player_EX.style.backgroundColor = `rgba(107, 16, 47, 0.6)`;
    player_gauge1.style.boxShadow = ``;
    player_gauge2.style.boxShadow = ``;
    player_gauge3.style.boxShadow = ``;
  } else if (playerGauge == 3) {
    player_gauge1.style.backgroundColor = `#ed145b`;
    player_gauge2.style.backgroundColor = `#ed145b`;
    player_gauge3.style.backgroundColor = `#ed145b`;
    player_EX.style.backgroundColor = `rgba(237, 20, 91,1)`;
    player_gauge1.style.boxShadow = `0px 0px 50px #ed145b`;
    player_gauge2.style.boxShadow = `0px 0px 50px #ed145b`;
    player_gauge3.style.boxShadow = `0px 0px 50px #ed145b`;
  } else {
    player_gauge1.style.backgroundColor = "transparent";
    player_gauge2.style.backgroundColor = "transparent";
    player_gauge3.style.backgroundColor = "transparent";
    player_EX.style.backgroundColor = `rgba(107, 16, 47, 0.6)`;
    player_gauge1.style.boxShadow = ``;
    player_gauge2.style.boxShadow = ``;
    player_gauge3.style.boxShadow = ``;
  }
  // ENEMY GAUGE BAR
  if (enemyGauge == 1) {
    enemy_gauge1.style.backgroundColor = `${gaugeColor}`;
    enemy_gauge2.style.backgroundColor = "transparent";
    enemy_gauge3.style.backgroundColor = "transparent";
    enemy_EX.style.backgroundColor = `rgba(107, 16, 47, 0.6)`;
    enemy_gauge1.style.boxShadow = ``;
    enemy_gauge2.style.boxShadow = ``;
    enemy_gauge3.style.boxShadow = ``;
  } else if (enemyGauge == 2) {
    enemy_gauge1.style.backgroundColor = `${gaugeColor}`;
    enemy_gauge2.style.backgroundColor = `${gaugeColor}`;
    enemy_gauge3.style.backgroundColor = "transparent";
    enemy_EX.style.backgroundColor = `rgba(107, 16, 47, 0.6)`;
    enemy_gauge1.style.boxShadow = ``;
    enemy_gauge2.style.boxShadow = ``;
    enemy_gauge3.style.boxShadow = ``;
  } else if (enemyGauge == 3) {
    enemy_gauge1.style.backgroundColor = `#ed145b`;
    enemy_gauge2.style.backgroundColor = `#ed145b`;
    enemy_gauge3.style.backgroundColor = `#ed145b`;
    enemy_gauge1.style.boxShadow = `0px 0px 50px #ed145b`;
    enemy_EX.style.backgroundColor = `rgba(237, 20, 91,1)`;
    enemy_gauge2.style.boxShadow = `0px 0px 50px #ed145b`;
    enemy_gauge3.style.boxShadow = `0px 0px 50px #ed145b`;
  } else {
    enemy_gauge1.style.backgroundColor = "transparent";
    enemy_gauge2.style.backgroundColor = "transparent";
    enemy_gauge3.style.backgroundColor = "transparent";
    enemy_EX.style.backgroundColor = `rgba(107, 16, 47, 0.6)`;
    enemy_gauge1.style.boxShadow = ``;
    enemy_gauge2.style.boxShadow = ``;
    enemy_gauge3.style.boxShadow = ``;
  }
}

// return the player menu to the action options
// enable or disable the powers option
function updateMenu() {
  div_magicks.style.display = "none";
  div_actions.style.display = "flex";
}

// show all the 3 powers of each character
// block power buttons that requires more mana than the current
function showPowers() {
  var m1 = document.getElementById("btn_m1");
  var m2 = document.getElementById("btn_m2");
  var m3 = document.getElementById("btn_m3");
  if (playerGauge == 3) {
    div_magicks.style.display = "flex";
    div_actions.style.display = "none";
    m1.disabled = false;
    m2.disabled = false;
    m3.disabled = false;
  } else if (playerGauge == 2) {
    div_magicks.style.display = "flex";
    div_actions.style.display = "none";
    m1.disabled = false;
    m2.disabled = false;
    m3.disabled = true;
  } else if (playerGauge == 1) {
    div_magicks.style.display = "flex";
    div_actions.style.display = "none";
    m1.disabled = false;
    m2.disabled = true;
    m3.disabled = true;
  } else {
    m1.disabled = true;
    m2.disabled = true;
    m3.disabled = true;
  }
}

// identify what level of the magical attack was selected
function magicHit(level, typePARAM) {
  disableButtons();
  updateMenu();
  var hitStatus = "";
  if (level == "m1") {
    hitStatus = "m1";
    usingMagic = "m1";
  } else if (level == "m2") {
    hitStatus = "m2";
    usingMagic = "m2";
  } else {
    hitStatus = "m3";
    usingMagic = "m3";
  }

  var typeRoll = typePARAM;
  lifeReduce(hitStatus, typeRoll);
}

// direct de dice rolled to a hit status
// identify what level of the physical attack was selected
function rollHit(typePARAM) {
  disableButtons();

  diceSides = 20;
  var diceNumber = randomizeRoll(diceSides);
  var hitStatus = "";
  var toMiss = 4;
  var toClose = 10;
  var toHit = 18;

  if (diceNumber < toMiss) {
    console.log(`=> miss hit!`);
    hitStatus = "miss";
  } else if (diceNumber < toClose) {
    console.log(`=> close hit!`);
    hitStatus = "close";
  } else if (diceNumber < toHit) {
    console.log(`=> full hit!`);
    hitStatus = "hit";
  } else {
    console.log(`=> crit hit!`);
    hitStatus = "critic";
  }

  var typeRoll = typePARAM;
  lifeReduce(hitStatus, typeRoll);
}

// randomize enemy's action
// block magic attacks if enemy has no mana gauge
// regulates defense actions according to the enemy's defense VAR
function typeAI() {
  disableButtons();
  toPA = 8;
  toMA = 14;

  toPA += enemyDefending;
  toMA += enemyDefending;
  console.log(`${toPA} - ${toMA}`);

  diceSides = 20;
  var diceNumber = randomizeRoll(diceSides);
  // diceNumber = 7;
  console.log(diceNumber);
  if (diceNumber < 8) {
    console.log("ENEMY IS USING PHYSICAL ATTACK");
    rollHit("PA");
  } else if (diceNumber < 14) {
    if (enemyGauge > 0) {
      console.log("ENEMY IS USING MAGICAL ATTACK");
      magicAI();
    } else {
      console.log("ENEMY IS USING PHYSICAL ATTACK");
      rollHit("PA");
    }
  } else {
    console.log("AAAAAA");
    defend();
  }
}

// randomize enemy's magic select using VECTOR
function magicAI() {
  var magics = ["m1", "m2", "m3"];
  var magicLevel = "";
  if (enemyGauge == 3) {
    diceSides = 3;
  } else if (enemyGauge == 2) {
    diceSides = 2;
  } else {
    diceSides = 1;
  }
  var diceMagic = randomizeRoll(diceSides) - 1;
  magicLevel = magics[diceMagic];
  magicHit(magicLevel, "MA");
}

// play a dice to randomiz a number
// dice number of sides is given in the function's parameter
function randomizeRoll(sides) {
  var randomRoll = Math.floor(Math.random() * sides) + 1;
  console.log(`Dice: ${randomRoll}`);
  return randomRoll;
}

// collect and fix the final damage accordingly with:
// - type of attack (physical(PA) or magical(MA))
// - if PHYSICAL: type of hit (miss, close, hit, crit)
// - if MAGICAL: reduce the mana gauge
// - opponent resistance
// - canceled or not through defense instance
function attackModifier(hitStatus, type) {
  var attack = 0;
  var PR = 0;
  var MR = 0;
  var M1 = 0;
  var M2 = 0;
  var M3 = 0;
  // get correct character's attack
  if (turnOwner == "player") {
    attack = sessionStorage.PLAYER_ATTACK;
    PR = 1 - playerPR / 100;
    MR = 1 - playerMR / 100;
    M1 = playerDmgM1;
    M3 = playerDmgM3;
    M2 = playerDmgM2;
  } else {
    attack = sessionStorage.ENEMY_ATTACK;
    PR = 1 - enemyPR / 100;
    MR = 1 - enemyMR / 100;
    M1 = enemyDmgM1;
    M2 = enemyDmgM2;
    M3 = enemyDmgM3;
  }
  console.log(hitStatus);
  if (type == "PA") {
    //MODIFYING
    // hit modifiers
    if (hitStatus == "miss") {
      attack *= 0;
    } else if (hitStatus == "close") {
      attack *= 0.5;
    } else if (hitStatus == "hit") {
      attack *= 1;
    } else {
      attack *= 1.5;
    }
    // applying physics resistance
    console.log(`ATTACK: ${attack} X PR: ${PR}`);
    attack *= PR;
  } else {
    if (hitStatus == "m1") {
      attack = M1;
      if (turnOwner == "player") {
        playerGauge -= 1;
      } else {
        enemyGauge -= 1;
      }
    } else if (hitStatus == "m2") {
      attack = M2;
      if (turnOwner == "player") {
        playerGauge -= 2;
      } else {
        enemyGauge -= 2;
      }
    } else {
      attack = M3;
      if (turnOwner == "player") {
        playerGauge -= 3;
      } else {
        enemyGauge -= 3;
      }
    }
    fillGauge();
    // applying magic resistance
    console.log(`ATTACK: ${attack} X MR: ${MR}`);
    attack *= MR;
  }

  // defending modifier
  if (defending == true) {
    var defenseFails = 5;
    if (turnOwner == "player") {
      defenseFails = 5 + enemyDefending;
      enemy_sprite.style.backgroundImage = `url(assets/imgs/chars/${enemyName}/Idle.gif)`;
    } else {
      defenseFails = 5 + playerDefending;
      player_sprite.style.backgroundImage = `url(assets/imgs/chars/${playerName}/Idle.gif)`;
    }
    diceSides = 20;
    var diceNumber = randomizeRoll(diceSides);
    console.log(`--------------------------
    DADO DEFESA: ${diceNumber}
    DEFENSE FAILS: ${defenseFails}
    PLAYER: ${playerDefending}
    ENEMY: ${enemyDefending}`);
    if (diceNumber >= 19) {
      attack *= 1.5;
      console.log("... reflected!");
    } else if (diceNumber <= defenseFails) {
      attack *= 2;
      playerDefending = 0;
      enemyDefending = 0;
      console.log("... defense fails");
    } else {
      attack = 0;
      console.log("... defended!");
    }
  }
  logBox(attack, hitStatus);
  return attack;
}

// reduce life bar - damage
// finish defense instance
// if NO ONE dies: change turn and continue round flow
// if SOMEONE dies: end the round and redirect to the endRound() function
// zero the attack var
function lifeReduce(hitStatus, typePARAM) {
  var typeAttack = typePARAM;
  var attack = attackModifier(hitStatus, typeAttack);

  // APPLY DAMAGE
  if (turnOwner == "player") {
    animateAction(turnOwner, typePARAM);
    console.log(`
      Past Life: ${enemyLifeNow}
      Damage: ${attack}
      Actual Life: ${enemyLifeNow - attack}
      `);
    enemyLifeNow -= attack;
    enemyPercentLife = (100 * enemyLifeNow) / enemyLifeTotal;
    if (enemyPercentLife > 0) {
      enemy_hp.style.width = `${enemyPercentLife}%`;
      // continue round
      defending = false;
      turnCounter++;
    } else {
      enemy_hp.style.width = `0%`;
      endRound("player");
    }
  } else {
    animateAction(turnOwner, typePARAM);
    console.log(`
      Past Life: ${playerLifeNow}
      Damage: ${attack}
      Actual Life: ${playerLifeNow - attack}
      DIV Percentage: ${(100 * (playerLifeNow - attack)) / playerLifeTotal}%
      `);
    playerLifeNow -= attack;
    playerPercentLife = (100 * playerLifeNow) / playerLifeTotal;
    if (playerPercentLife > 0) {
      player_hp.style.width = `${playerPercentLife}%`;
      // continue round
      defending = false;
      turnCounter++;
    } else {
      player_hp.style.width = `0%`;
      endRound("enemy");
    }
  }
  attack = 0;
}

function timeoutRound() {
  if (playerPercentLife >= enemyPercentLife) {
    endRound("player");
  } else {
    endRound("enemy");
  }
}

// increase the round count
// verify who won the round
// change box image of round victory
// reset fighter's health
// if someone win 2 times, redirect to endGame() function
function endRound(roundWinner) {
  clearTimeout(turnTimeout);
  var gameState = "continue";
  var gameWinner = "";
  updateMenu();
  roundNow++;
  if (roundWinner == "player") {
    if (playerRounds < 1) {
      turnTimeout = setTimeout(changeTurn, Number(playerSpecial) + 500);
      playerRounds++;
      player_roundBOX1.src = "assets/imgs/battle/roundBoxON.png";
      player_roundBOX1.style.boxShadow = "0px 0px 10px #ed145b";
    } else {
      player_roundBOX2.src = "assets/imgs/battle/roundBoxON.png";
      player_roundBOX2.style.boxShadow = "0px 0px 10px #ed145b";
      gameState = "finished";
      gameWinner = "Player";
    }
  } else {
    if (enemyRounds < 1) {
      turnTimeout = setTimeout(changeTurn, Number(enemySpecial) + 500);
      enemyRounds++;
      enemy_roundBOX1.src = "assets/imgs/battle/roundBoxON.png";
      enemy_roundBOX1.style.boxShadow = "0px 0px 10px #ed145b";
    } else {
      enemy_roundBOX2.src = "assets/imgs/battle/roundBoxON.png";
      enemy_roundBOX2.style.boxShadow = "0px 0px 10px #ed145b";
      gameState = "finished";
      gameWinner = "Enemy";
    }
  }

  animateRound(roundWinner);

  if (gameState == "continue") {
    console.log(`ROUND FINISHED: ${roundWinner} WINS!`);
    turnOwner = roundWinner;
    // RESETING ALL
    // player health
    player_hp.style.width = `100%`;
    playerLifeNow = 100;
    playerPercentLife = 100;
    // enemy health
    enemy_hp.style.width = `100%`;
    enemyLifeNow = 100;
    enemyPercentLife = 100;
    // game settings
    turnCounter = 0;
    roundSeconds = 99;
    // waitTimer(1);
  } else {
    endGame(gameWinner);
  }
}

var timeoutSpecial = "";
function animateRound(char, time) {
  clearTimeout(timeoutSpecial);
  div_special.style.display = "flex";
  if (char == "player") {
    time = playerSpecial;
    img_special.src = `assets/imgs/chars/${playerName}/RoundWin.gif`;
    enemy_sprite.style.backgroundImage = `url(assets/imgs/chars/${enemyName}/Lose.gif)`;
    div_attacks.style.transform = "scaleX(+1)";
  } else {
    time = enemySpecial;
    img_special.src = `assets/imgs/chars/${enemyName}/RoundWin.gif`;
    enemy_sprite.style.backgroundImage = `url(assets/imgs/chars/${playerName}/Lose.gif)`;
    div_attacks.style.transform = "scaleX(-1)";
  }

  timeoutSpecial = setTimeout(function () {
    div_attacks.style.display = "none";
    img_special.src = "";
    clearTimeout(timeoutSpecial);
  }, time);
}

function endGame(winner) {
  disableButtons();
  console.log("desabling buttons...");
  console.log(`${winner} is the winner`);
}

// logBox();
function logBox(attack, hitStatus) {
  div_log.style.display = "flex";
  if (turnOwner == "player") {
    div_log.style.left = "115vh";
  } else {
    div_log.style.left = "77vh";
  }

  div_log.innerHTML = attack;
  if (hitStatus == "miss") {
    div_log.style.color = "blue";
  } else if (hitStatus == "close") {
    div_log.style.color = "yellow";
  } else if (hitStatus == "hit") {
    div_log.style.color = "white";
  } else if (hitStatus == "critic") {
    div_log.style.color = "red";
  }
}

var usingMagic = "";
function animateAction(char, typeAction) {
  var anmDuration = 0;
  if (typeAction == "PA") {
    if (char == "player") {
      player_sprite.style.backgroundImage = `url(assets/imgs/chars/${playerName}/Attack.gif)`;
      player_sprite.style.width = `${pATKwidth}vw`;
      player_sprite.style.height = `${pATKheight}vh`;
      anmDuration = pATKspeed;
    } else {
      enemy_sprite.style.backgroundImage = `url(assets/imgs/chars/${enemyName}/Attack.gif)`;
      enemy_sprite.style.width = `${eATKwidth}vw`;
      enemy_sprite.style.height = `${eATKheight}vh`;
      anmDuration = eATKspeed;
    }
  } else {
    if (usingMagic == "m1") {
      if (char == "player") {
        player_sprite.style.backgroundImage = `url(assets/imgs/chars/${playerName}/SP1.gif)`;
        player_sprite.style.width = `${pSP1width}vw`;
        player_sprite.style.height = `${pSP1height}vh`;
        anmDuration = pSP1speed;
      } else {
        enemy_sprite.style.backgroundImage = `url(assets/imgs/chars/${enemyName}/SP1.gif)`;
        enemy_sprite.style.width = `${eSP1width}vw`;
        enemy_sprite.style.height = `${eSP1height}vh`;
        anmDuration = eSP1speed;
      }
    } else if (usingMagic == "m2") {
      if (char == "player") {
        player_sprite.style.backgroundImage = `url(assets/imgs/chars/${playerName}/SP2.gif)`;
        player_sprite.style.width = `${pSP2width}vw`;
        player_sprite.style.height = `${pSP2height}vh`;
        anmDuration = pSP2speed;
      } else {
        enemy_sprite.style.backgroundImage = `url(assets/imgs/chars/${enemyName}/SP2.gif)`;
        enemy_sprite.style.width = `${eSP2width}vw`;
        enemy_sprite.style.height = `${eSP2height}vh`;
        anmDuration = eSP2speed;
      }
    } else {
      if (char == "player") {
        player_sprite.style.backgroundImage = `url(assets/imgs/chars/${playerName}/SP3.gif)`;
        player_sprite.style.width = `${pSP3width}vw`;
        player_sprite.style.height = `${pSP3height}vh`;
        anmDuration = pSP3speed;
      } else {
        enemy_sprite.style.backgroundImage = `url(assets/imgs/chars/${enemyName}/SP3.gif)`;
        enemy_sprite.style.width = `${eSP3width}vw`;
        enemy_sprite.style.height = `${eSP3height}vh`;
        anmDuration = eSP3speed;
      }
    }
  }
  turnTimeout = setTimeout(function () {
    if (char == "player") {
      player_sprite.style.backgroundImage = `url(assets/imgs/chars/${playerName}/Idle.gif)`;
      player_sprite.style.width = `${playerWidth}vw`;
      player_sprite.style.height = `${playerHeight}vh`;
    } else {
      enemy_sprite.style.backgroundImage = `url(assets/imgs/chars/${enemyName}/Idle.gif)`;
      enemy_sprite.style.width = `${enemyWidth}vw`;
      enemy_sprite.style.height = `${enemyHeight}vh`;
    }
    changeTurn();
  }, anmDuration);
}

function waitTimer(waitTime) {
  waitTime *= 1000;
  setTimeout(function () {
    roundTimer = setInterval(battleTimer, 30);
  }, waitTime);
}

function battleTimer() {
  if (roundSeconds > 0) {
    p_timer.innerHTML = roundSeconds;
    roundSeconds--;
    console.log("vai");
  } else {
    p_timer.innerHTML = "0";
    clearInterval(roundTimer);
    timeoutRound();
    console.log("paro");
  }
}
