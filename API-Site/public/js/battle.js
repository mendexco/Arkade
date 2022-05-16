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
// sessionStorage.PLAYER_ATK_S = 1050;
// sessionStorage.PLAYER_ATK_W = 33;
// sessionStorage.PLAYER_ATK_H = 58;
// sessionStorage.PLAYER_SP1_S = 1920;
// sessionStorage.PLAYER_SP1_W = 34;
// sessionStorage.PLAYER_SP1_H = 68;
// sessionStorage.PLAYER_SP2_S = 820;
// sessionStorage.PLAYER_SP2_W = 66;
// sessionStorage.PLAYER_SP2_H = 57;
// sessionStorage.PLAYER_SP3_S = 1620;
// sessionStorage.PLAYER_SP3_W = 46;
// sessionStorage.PLAYER_SP3_H = 114;

// sessionStorage.ENEMY_ATK_S = 640;
// sessionStorage.ENEMY_ATK_W = 26;
// sessionStorage.ENEMY_ATK_H = 52;
// sessionStorage.ENEMY_SP1_S = 1190;
// sessionStorage.ENEMY_SP1_W = 20;
// sessionStorage.ENEMY_SP1_H = 100;
// sessionStorage.ENEMY_SP2_S = 1620;
// sessionStorage.ENEMY_SP2_W = 30;
// sessionStorage.ENEMY_SP2_H = 72;
// sessionStorage.ENEMY_SP3_S = 3540;
// sessionStorage.ENEMY_SP3_W = 34;
// sessionStorage.ENEMY_SP3_H = 55;

// // PLAYER
// sessionStorage.PLAYER_IDLE_TOP = 39;
// sessionStorage.PLAYER_IDLE_SIDE = 26;
// sessionStorage.PLAYER_ENTRY_SPEED = 2180;
// sessionStorage.PLAYER_ENTRY_WIDTH = 18;
// sessionStorage.PLAYER_ENTRY_HEIGHT = 52;
// sessionStorage.PLAYER_ENTRY_TOP = 38;
// sessionStorage.PLAYER_ENTRY_SIDE = 26;
// sessionStorage.PLAYER_DEFEND_WIDTH = 18;
// sessionStorage.PLAYER_DEFEND_HEIGHT = 52;
// sessionStorage.PLAYER_DEFEND_TOP = 38;
// sessionStorage.PLAYER_DEFEND_SIDE = 30;
// sessionStorage.PLAYER_LOSE_WIDTH = 35;
// sessionStorage.PLAYER_LOSE_HEIGHT = 53;
// sessionStorage.PLAYER_LOSE_TOP = 38;
// sessionStorage.PLAYER_LOSE_SIDE = 20;

// sessionStorage.PLAYER_ATK_TOP = 39;
// sessionStorage.PLAYER_ATK_SIDE = 39;
// sessionStorage.PLAYER_SP1_TOP = -8;
// sessionStorage.PLAYER_SP1_SIDE = 47;
// sessionStorage.PLAYER_SP2_TOP = 19;
// sessionStorage.PLAYER_SP2_SIDE = 40;
// sessionStorage.PLAYER_SP3_TOP = 34;
// sessionStorage.PLAYER_SP3_SIDE = 26;
// sessionStorage.PLAYER_SP3_SPEED = 3540;

// // ENEMY
// sessionStorage.ENEMY_IDLE_TOP = 39;
// sessionStorage.ENEMY_IDLE_SIDE = 26;
// sessionStorage.ENEMY_ENTRY_WIDTH = 24;
// sessionStorage.ENEMY_ENTRY_HEIGHT = 52;
// sessionStorage.ENEMY_ENTRY_TOP = 39;
// sessionStorage.ENEMY_ENTRY_SIDE = 26;
// sessionStorage.ENEMY_DEFEND_WIDTH = 18;
// sessionStorage.ENEMY_DEFEND_HEIGHT = 52;
// sessionStorage.ENEMY_DEFEND_TOP = 39;
// sessionStorage.ENEMY_DEFEND_SIDE = 30;
// sessionStorage.ENEMY_LOSE_WIDTH = 34;
// sessionStorage.ENEMY_LOSE_HEIGHT = 52;
// sessionStorage.ENEMY_LOSE_TOP = 39;
// sessionStorage.ENEMY_LOSE_SIDE = 18;

// sessionStorage.ENEMY_ATK_TOP = 31
// sessionStorage.ENEMY_ATK_SIDE = 31
// sessionStorage.ENEMY_SP1_TOP = 23
// sessionStorage.ENEMY_SP1_SIDE = 38
// sessionStorage.ENEMY_SP2_TOP = 35
// sessionStorage.ENEMY_SP2_SIDE = 19
// sessionStorage.ENEMY_SP3_TOP = -32
// sessionStorage.ENEMY_SP3_SIDE = 32


// setup all necessary variables to the code
// dice and roll vars
var rollAction = 0;
var diceSides = 0;

// FIGHTERS
// player vars ------
// chars table
var playerName = sessionStorage.PLAYER_NAME;
var playerLifeTotal = sessionStorage.PLAYER_LIFE;
var playerLifeNow = playerLifeTotal;
var playerPercentLife = 100;
var playerGauge = 1;
var playerAttack = sessionStorage.PLAYER_ATTACK;
var playerNameM1 = sessionStorage.PLAYER_NAME_M1;
var playerDmgM1 = sessionStorage.PLAYER_DMG_M1;
var playerNameM2 = sessionStorage.PLAYER_NAME_M2;
var playerDmgM2 = sessionStorage.PLAYER_DMG_M2;
var playerNameM3 = sessionStorage.PLAYER_NAME_M3;
var playerDmgM3 = sessionStorage.PLAYER_DMG_M3;
var playerPR = sessionStorage.PLAYER_PR;
var playerMR = sessionStorage.PLAYER_MR;
// basic metrics
var playerWidth = sessionStorage.PLAYER_WIDTH;
var playerHeight = sessionStorage.PLAYER_HEIGHT;
var pIDLETop = sessionStorage.PLAYER_IDLE_TOP;
var pIDLESide = sessionStorage.PLAYER_IDLE_SIDE;
var pEntryWidth = sessionStorage.PLAYER_ENTRY_WIDTH;
var pEntryHeight = sessionStorage.PLAYER_ENTRY_HEIGHT;
var pEntryTop = sessionStorage.PLAYER_ENTRY_TOP;
var pEntrySide = sessionStorage.PLAYER_ENTRY_SIDE;
var pDefendWidth = sessionStorage.PLAYER_DEFEND_WIDTH;
var pDefendHeight = sessionStorage.PLAYER_DEFEND_HEIGHT;
var pDefendTop = sessionStorage.PLAYER_DEFEND_TOP;
var pDefendSide = sessionStorage.PLAYER_DEFEND_SIDE;
var pLoseWidth = sessionStorage.PLAYER_LOSE_WIDTH;
var pLoseHeight = sessionStorage.PLAYER_LOSE_HEIGHT;
var pLoseTop = sessionStorage.PLAYER_LOSE_TOP;
var pLoseSide = sessionStorage.PLAYER_LOSE_SIDE;
// advanced metrics
var pATKspeed = sessionStorage.PLAYER_ATK_SPEED;
var pATKwidth = sessionStorage.PLAYER_ATK_WIDTH;
var pATKheight = sessionStorage.PLAYER_ATK_HEIGHT;
var pATKTop = sessionStorage.PLAYER_ATK_TOP;
var pATKSide = sessionStorage.PLAYER_ATK_SIDE;
var pSP1speed = sessionStorage.PLAYER_SP1_SPEED;
var pSP1width = sessionStorage.PLAYER_SP1_WIDTH;
var pSP1height = sessionStorage.PLAYER_SP1_HEIGHT;
var pSP1Top = sessionStorage.PLAYER_SP1_TOP;
var pSP1Side = sessionStorage.PLAYER_SP1_SIDE;
var pSP2speed = sessionStorage.PLAYER_SP2_SPEED;
var pSP2width = sessionStorage.PLAYER_SP2_WIDTH;
var pSP2height = sessionStorage.PLAYER_SP2_HEIGHT;
var pSP2Top = sessionStorage.PLAYER_SP2_TOP;
var pSP2Side = sessionStorage.PLAYER_SP2_SIDE;
var pSP3speed = sessionStorage.PLAYER_SP3_SPEED;
var pSP3width = sessionStorage.PLAYER_SP3_WIDTH;
var pSP3height = sessionStorage.PLAYER_SP3_HEIGHT;
var pSP3Top = sessionStorage.PLAYER_SP3_TOP;
var pSP3Side = sessionStorage.PLAYER_SP3_SIDE;

// opponent vars ------
// chars table
var enemyName = sessionStorage.ENEMY_NAME;
var enemyLifeTotal = sessionStorage.ENEMY_LIFE;
var enemyLifeNow = enemyLifeTotal;
var enemyPercentLife = 100;
var enemyGauge = 1;
var enemyAttack = sessionStorage.ENEMY_ATTACK;
var enemyNameM1 = sessionStorage.ENEMY_NAME_M1;
var enemyDmgM1 = sessionStorage.ENEMY_DMG_M1;
var enemyNameM2 = sessionStorage.ENEMY_NAME_M2;
var enemyDmgM2 = sessionStorage.ENEMY_DMG_M2;
var enemyNameM3 = sessionStorage.ENEMY_NAME_M3;
var enemyDmgM3 = sessionStorage.ENEMY_DMG_M3;
var enemyPR = sessionStorage.ENEMY_PR;
var enemyMR = sessionStorage.ENEMY_MR;
// basic metrics
var enemyWidth = sessionStorage.ENEMY_WIDTH;
var enemyHeight = sessionStorage.ENEMY_HEIGHT;
var eIDLETop = sessionStorage.ENEMY_IDLE_TOP;
var eIDLESide = sessionStorage.ENEMY_IDLE_SIDE;
var eEntryWidth = sessionStorage.ENEMY_ENTRY_WIDTH;
var eEntryHeight = sessionStorage.ENEMY_ENTRY_HEIGHT;
var eEntryTop = sessionStorage.ENEMY_ENTRY_TOP;
var eEntrySide = sessionStorage.ENEMY_ENTRY_SIDE;
var eDefendWidth = sessionStorage.ENEMY_DEFEND_WIDTH;
var eDefendHeight = sessionStorage.ENEMY_DEFEND_HEIGHT;
var eDefendTop = sessionStorage.ENEMY_DEFEND_TOP;
var eDefendSide = sessionStorage.ENEMY_DEFEND_SIDE;
var eLoseWidth = sessionStorage.ENEMY_LOSE_WIDTH;
var eLoseHeight = sessionStorage.ENEMY_LOSE_HEIGHT;
var eLoseTop = sessionStorage.ENEMY_LOSE_TOP;
var eLoseSide = sessionStorage.ENEMY_LOSE_SIDE;
// advanced metrics
var eATKspeed = sessionStorage.ENEMY_ATK_SPEED;
var eATKwidth = sessionStorage.ENEMY_ATK_WIDTH;
var eATKheight = sessionStorage.ENEMY_ATK_HEIGHT;
var eATKTop = sessionStorage.ENEMY_ATK_TOP;
var eATKSide = sessionStorage.ENEMY_ATK_SIDE;
var eSP1speed = sessionStorage.ENEMY_SP1_SPEED;
var eSP1width = sessionStorage.ENEMY_SP1_WIDTH;
var eSP1height = sessionStorage.ENEMY_SP1_HEIGHT;
var eSP1Top = sessionStorage.ENEMY_SP1_TOP;
var eSP1Side = sessionStorage.ENEMY_SP1_SIDE;
var eSP2speed = sessionStorage.ENEMY_SP2_SPEED;
var eSP2width = sessionStorage.ENEMY_SP2_WIDTH;
var eSP2height = sessionStorage.ENEMY_SP2_HEIGHT;
var eSP2Top = sessionStorage.ENEMY_SP2_TOP;
var eSP2Side = sessionStorage.ENEMY_SP2_SIDE;
var eSP3speed = sessionStorage.ENEMY_SP3_SPEED;
var eSP3width = sessionStorage.ENEMY_SP3_WIDTH;
var eSP3height = sessionStorage.ENEMY_SP3_HEIGHT;
var eSP3Top = sessionStorage.ENEMY_SP3_TOP;
var eSP3Side = sessionStorage.ENEMY_SP3_SIDE;

// FIGHT FLOW
// turn vars
var turnCounter = 1;
var turnOwner = "player"; //first turn definitions
var turnTimeout = 0;
var turnChanger = 1000;

// round vars
var roundNow = 1;
var playerRounds = 0;
var enemyRounds = 0;

// additional vars
var gaugeColor = "rgb(58, 58, 245)";
var playerDefending = 0;
var enemyDefending = 0;
var defending = false;
var defenseStatus = "";
var attackStatus = "";

// -----------------------------------------------------------------------------------------------------------------------------

// other essecial setus
setupEssencials();
function setupEssencials() {
  // setting stage
  div_stage.style.backgroundImage = `url(../assets/imgs/stages/stage_${sessionStorage.STAGE}.gif)`;
  // setting sfx
  stage_music.src = `assets/audios/musics/${sessionStorage.STAGE}Theme.mp3`;
  stage_music.volume = 0.05;
  // gif of each fighter
  player_sprite.style.backgroundImage = `url(assets/imgs/chars/${playerName}/Idle.gif)`;
  player_sprite.style.width = `${playerWidth}vw`;
  player_sprite.style.height = `${playerHeight}vh`;
  player_sprite.style.top = `${pIDLETop}vh`;
  player_sprite.style.left = `${pIDLESide}vw`;
  enemy_sprite.style.backgroundImage = `url(assets/imgs/chars/${enemyName}/Idle.gif)`;
  enemy_sprite.style.width = `${enemyWidth}vw`;
  enemy_sprite.style.height = `${enemyHeight}vh`;
  enemy_sprite.style.top = `${eIDLETop}vh`;
  enemy_sprite.style.right = `${eIDLESide}vw`;
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

  disableButtons();
  screenMessage(`Round${roundNow}`);
  setTimeout(function() {
    fillGauge();
    turnTimer();
    if (randomizeRoll(2) == 1) {
      turnOwner = "enemy";
      changeTurn();
    } else {
      turnOwner = "player";
      changeTurn();
    }
  }, 3000);
}

function screenMessage(gifName) {
  img_roundScreen.style.display = "flex";
  img_roundScreen.style.pointerEvents = "all";
  img_roundScreen.style.opacity = "1";
  img_roundScreen.src = `assets/imgs/battle/${gifName}.gif`;
  setTimeout(function () {
    img_roundScreen.style.pointerEvents = "none";
    img_roundScreen.style.opacity = "0";
    img_roundScreen.src = ``;
    img_roundScreen.style.display = "none";
  }, 2700);
}

var turnSeconds = 3;
var turnInterval;
function turnTimer() {
  clearInterval(turnInterval);
  turnSeconds = 3;
  turnInterval = setInterval(function() {
    // console.log(turnSeconds);
    if (turnSeconds < 0) {
      changeTurn();
    }
    p_turn.innerHTML = turnSeconds;
    turnSeconds--;
    p_turn.style.fontSize = "2.5vw";
    p_turn.style.opacity = "1";
    div_turn.style.filter = "drop-shadow(0.2vw 0.4vw 0.6vw #ed145b)";
    setTimeout(function() {
      p_turn.style.fontSize = "2vw";
      p_turn.style.opacity = "0";
      div_turn.style.filter = "drop-shadow(0.0vw 0.1vw 1vw #ed145b)";
    }, 500)
  }, 1000);
}

// verify who will lead the next turn
// also redirects to the updateMenu() and buttonStatus() functions
function changeTurn() {
  turnTimer();
  if (turnOwner == "player") {
    // next turn is opponent's one
    timer = randomizeRoll(3) * 1000;
    console.log(timer);
    setTimeout(function () {
      turnOwner = "enemy";
      enemy_sprite.style.backgroundImage = `url(assets/imgs/chars/${enemyName}/Idle.gif)`;
      enemy_sprite.style.width = `${enemyWidth}vw`;
      enemy_sprite.style.height = `${enemyHeight}vh`;
      enemy_sprite.style.top = `${eIDLETop}vh`;
      enemy_sprite.style.right = `${eIDLESide}vw`;
      console.log("Now it's opponent's turn!");
      buttonStatus("enemy");
      typeAI();
    }, timer);
  } else {
    // next turn is player's one
    turnOwner = "player";
    player_sprite.style.backgroundImage = `url(assets/imgs/chars/${playerName}/Idle.gif)`;
    player_sprite.style.width = `${playerWidth}vw`;
    player_sprite.style.height = `${playerHeight}vh`;
    player_sprite.style.top = `${pIDLETop}vh`;
    player_sprite.style.left = `${pIDLESide}vw`;
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
  clearInterval(turnInterval);
  disableButtons();
  setTimeout(changeTurn, turnChanger);
  if (turnOwner == "player") {
    playerDefending++;
    player_sprite.style.backgroundImage = `url(assets/imgs/chars/${playerName}/Defending.gif)`;
    player_sprite.style.width = `${pDefendWidth}vw`;
    player_sprite.style.height = `${pDefendHeight}vh`;
    player_sprite.style.top = `${pDefendTop}vh`;
    player_sprite.style.left = `${pDefendSide}vw`;
  } else {
    enemyDefending++;
    enemy_sprite.style.backgroundImage = `url(assets/imgs/chars/${enemyName}/Defending.gif)`;
    enemy_sprite.style.width = `${eDefendWidth}vw`;
    enemy_sprite.style.height = `${eDefendHeight}vh`;
    enemy_sprite.style.top = `${eDefendTop}vh`;
    enemy_sprite.style.right = `${eDefendSide}vw`;
  }
  defending = true;
  console.log(`${turnOwner.toUpperCase()} IS DEFENDING!...`);
  increaseGauge();
  turnCounter++;
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
  clearInterval(turnInterval);
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
  clearInterval(turnInterval);
  disableButtons();

  diceSides = 20;
  var diceNumber = randomizeRoll(diceSides);
  var hitStatus = "";
  var toMiss = 6;
  var toHit = 17;

  // diceNumber = 18;
  if (diceNumber < toMiss) {
    console.log(`=> miss hit!`);
    hitStatus = "miss";
    if (turnOwner == "player") {
      logStatus("enemy", "evade");
    } else {
      logStatus("player", "evade");
    }
  } else if (diceNumber < toHit) {
    console.log(`=> full hit!`);
    hitStatus = "hit";
  } else {
    console.log(`=> crit hit!`);
    hitStatus = "critic";
    if (turnOwner == "player") {
      logStatus("player", "crit");
    } else {
      logStatus("enemy", "crit");
    }
  }

  var typeRoll = typePARAM;
  lifeReduce(hitStatus, typeRoll);
}

// randomize enemy's action
// block magic attacks if enemy has no mana gauge
// regulates defense actions according to the enemy's defense VAR
function typeAI() {
  disableButtons();
  toPA = 6;
  toMA = 14;

  toPA += enemyDefending;
  toMA += enemyDefending;
  toMA += enemyGauge;
  // console.log(`${toPA} - ${toMA}`);

  diceSides = 20;
  var diceNumber = randomizeRoll(diceSides);
  // diceNumber = 7;
  if (diceNumber < toPA) {
    console.log("ENEMY IS USING PHYSICAL ATTACK");
    rollHit("PA");
  } else if (diceNumber < toMA) {
    if (enemyGauge > 0) {
      console.log("ENEMY IS USING MAGICAL ATTACK");
      magicAI();
    } else {
      var diceNumber2 = randomizeRoll(diceSides);
      if (diceNumber2 > 10) {
        console.log("ENEMY IS USING PHYSICAL ATTACK");
        rollHit("PA");
      } else {
        defend();
      }
    }
  } else {
    // console.log("Enemy defending");
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
    // hitStatus = "";
    if (hitStatus == "miss") {
      attack *= 0;
      defenseStatus = "miss";
    } else if (hitStatus == "hit") {
      attack *= 1;
    } else {
      attack *= 1.5;
      attackStatus = "crit";
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
    // diceNumber = 5;
    if (hitStatus == "miss") {
      if (turnOwner == "player") {
        logStatus("enemy", "evade");
      } else {
        logStatus("player", "evade");
      }
      defenseStatus = "miss";
    } else if (diceNumber <= defenseFails) {
      attack *= 2;
      playerDefending = 0;
      enemyDefending = 0;
      if (turnOwner == "player") {
        logStatus("player", "broke");
      } else {
        logStatus("enemy", "broke");
      }
      console.log("... defense fails");
      defenseStatus = "broke";
    } else {
      attack = 0;
      if (turnOwner == "player") {
        logStatus("enemy", "defended");
      } else {
        logStatus("player", "defended");
      }
      console.log("... defended!");
      defenseStatus = "defended";
    }
  }
  animateDefense();
  return attack;
}

function logStatus(char, divLog) {
  // console.log(char);
  // console.log(divLog);
  var log = document.getElementById(`${char}_${divLog}`);
  log.style.filter = "brightness(1)";
  log.style.opacity = "1";
  log.style.position = "absolute";
  var logTimeout = setTimeout(function () {
    log.style.filter = "brightness(15)";
    log.style.opacity = "0";
  }, 2000);
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
      animateAction(turnOwner, typePARAM, false);
    } else {
      enemy_hp.style.width = `0%`;
      endRound(turnOwner, typePARAM);
    }
  } else {
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
      animateAction(turnOwner, typePARAM, false);
    } else {
      player_hp.style.width = `0%`;
      endRound(turnOwner, typePARAM);
    }
  }
  attack = 0;
}

function animateDefense() {
  var defenseChar = "";
  if (turnOwner == "player") {
    defenseChar = "enemy";
  } else {
    defenseChar = "player";
  }
  var char = document.getElementById(`${defenseChar}_sprite`);
  // console.log(char);
  // defenseStatus = "";
  if (defenseStatus == "defended") {
      char.style.filter = "drop-shadow(0.8vw 1vw 1vw #ffd700ad) brightness(1.25)";
      if (defenseChar == "enemy") {
        char.style.transform = "scale(-1.05, 1.05)";
        char.style.backgroundImage = `url(assets/imgs/chars/${enemyName}/Defending.gif)`;
        enemy_sprite.style.width = `${eDefendWidth}vw`;
        enemy_sprite.style.height = `${eDefendHeight}vh`;
        enemy_sprite.style.top = `${eDefendTop}vh`;
        enemy_sprite.style.right = `${eDefendSide}vw`;
      } else {
        char.style.transform = "scale(1.05, 1.05)";
        char.style.backgroundImage = `url(assets/imgs/chars/${playerName}/Defending.gif)`;
        player_sprite.style.width = `${pDefendWidth}vw`;
        player_sprite.style.height = `${pDefendHeight}vh`;
        player_sprite.style.top = `${pDefendTop}vh`;
        player_sprite.style.right = `${pDefendSide}vw`;
      }
      setTimeout(function () {
        char.style.filter = "drop-shadow(0.6vw 0.6vw 1vw black) brightness(1)";
        if (defenseChar == "enemy") {
          char.style.backgroundImage = `url(assets/imgs/chars/${enemyName}/Idle.gif)`;
          enemy_sprite.style.width = `${enemyWidth}vw`;
          enemy_sprite.style.height = `${enemyHeight}vh`;
          enemy_sprite.style.top = `${eIDLETop}vh`;
          enemy_sprite.style.right = `${eIDLESide}vw`;
          char.style.transform = "scale(-1, 1)";
        } else {
          char.style.transform = "scale(1, 1)";
          char.style.backgroundImage = `url(assets/imgs/chars/${playerName}/Idle.gif)`;
          player_sprite.style.width = `${playerWidth}vw`;
          player_sprite.style.height = `${playerHeight}vh`;
          player_sprite.style.top = `${pIDLETop}vh`;
          player_sprite.style.left = `${pIDLESide}vw`;
        }
      }, 900);
    defenseStatus = "";
  } else if (defenseStatus == "miss") {
    if (turnOwner == "player") {
      char.style.filter = "drop-shadow(0.4vw 0vw 0.4vw #0084ff)";
      char.style.transform = "scale(-1,1) skew(10deg) translateX(-3vw)";
      enemy_sprite.style.width = `${enemyWidth}vw`;
      enemy_sprite.style.height = `${enemyHeight}vh`;
      enemy_sprite.style.top = `${eIDLETop}vh`;
      setTimeout(function () {
        char.style.transform = "scale(-1,1)";
        char.style.filter = "drop-shadow(0.6vw 0.6vw 1vw black)";
        enemy_sprite.style.width = `${enemyWidth}vw`;
        enemy_sprite.style.height = `${enemyHeight}vh`;
        enemy_sprite.style.top = `${eIDLETop}vh`;
        enemy_sprite.style.right = `${eIDLESide}vw`;
      }, 800);
    } else {
      char.style.filter = "drop-shadow(0.4vw 0vw 0.4vw #0084ff)";
      char.style.transform = "skew(10deg) translateX(-3vw)";
      player_sprite.style.width = `${playerWidth}vw`;
      player_sprite.style.height = `${playerHeight}vh`;
      player_sprite.style.top = `${pIDLETop}vh`;
      setTimeout(function () {
        char.style.transform = "";
        char.style.filter = "drop-shadow(0.6vw 0.6vw 1vw black)";
        player_sprite.style.width = `${playerWidth}vw`;
        player_sprite.style.height = `${playerHeight}vh`;
        player_sprite.style.top = `${pIDLETop}vh`;
        player_sprite.style.left = `${pIDLESide}vw`;
      }, 800);
    }
    defenseStatus = "";
  } else if (defenseStatus == "broke") {
    if (turnOwner == "player") {
      char.style.filter = "grayscale(0.7) invert(1)";
      char.style.transform = "scale(-1,1) rotate(-10deg)";
      enemy_sprite.style.width = `${enemyWidth}vw`;
      enemy_sprite.style.height = `${enemyHeight}vh`;
      enemy_sprite.style.top = `${eIDLETop}vh`;
      setTimeout(function () {
        char.style.transform = "scale(-1,1)";
        char.style.filter = "drop-shadow(0.6vw 0.6vw 1vw black)";
        enemy_sprite.style.width = `${enemyWidth}vw`;
        enemy_sprite.style.height = `${enemyHeight}vh`;
        enemy_sprite.style.top = `${eIDLETop}vh`;
        enemy_sprite.style.right = `${eIDLESide}vw`;
      }, 200);
    } else {
      char.style.filter = "grayscale(0.7) invert(1)";
      char.style.transform = "rotate(-10deg)";
      player_sprite.style.width = `${playerWidth}vw`;
      player_sprite.style.height = `${playerHeight}vh`;
      player_sprite.style.top = `${pIDLETop}vh`;
      setTimeout(function () {
        char.style.transform = "";
        char.style.filter = "drop-shadow(0.6vw 0.6vw 1vw black)";
        player_sprite.style.width = `${playerWidth}vw`;
        player_sprite.style.height = `${playerHeight}vh`;
        player_sprite.style.top = `${pIDLETop}vh`;
        player_sprite.style.left = `${pIDLESide}vw`;
      }, 200);
    }
    defenseStatus = "";
  } else {
    if (turnOwner == "player") {
      char.style.filter = "brightness(0) invert(1)";
      char.style.transform = "scale(-1,1) rotate(-10deg)";
      setTimeout(function () {
        char.style.transform = "scale(-1,1)";
        char.style.filter = "drop-shadow(0.6vw 0.6vw 1vw black)";
        enemy_sprite.style.top = `${eIDLETop}vh`;
        enemy_sprite.style.right = `${eIDLESide}vw`;
      }, 150);
    } else {
      char.style.filter = "brightness(0) invert(1)";
      char.style.transform = "rotate(-10deg)";
      setTimeout(function () {
        char.style.transform = "";
        char.style.filter = "drop-shadow(0.6vw 0.6vw 1vw black)";
        player_sprite.style.top = `${pIDLETop}vh`;
        player_sprite.style.right = `${pIDLESide}vw`;
      }, 150);
    }
    defenseStatus = "";
  }
}

var usingMagic = "";
var anmDuration = 0;
function animateAction(char, typeAction, roundPass) {
  var charShadow = document.getElementById(`${char}_sprite`);
  console.log(typeAction);
  if (typeAction == "PA") {
    if (char == "player") {
      player_sprite.style.zIndex = "4";
      player_sprite.style.backgroundImage = `url(assets/imgs/chars/${playerName}/Attack.gif)`;
      player_sprite.style.width = `${pATKwidth}vw`;
      player_sprite.style.height = `${pATKheight}vh`;
      player_sprite.style.top = `${pATKTop}vh`;
      player_sprite.style.left = `${pATKSide}vw`;
      anmDuration = pATKspeed;
    } else {
      enemy_sprite.style.zIndex = "4";
      enemy_sprite.style.backgroundImage = `url(assets/imgs/chars/${enemyName}/Attack.gif)`;
      enemy_sprite.style.width = `${eATKwidth}vw`;
      enemy_sprite.style.height = `${eATKheight}vh`;
      enemy_sprite.style.top = `${eATKTop}vh`;
      enemy_sprite.style.right = `${eATKSide}vw`;
      anmDuration = eATKspeed;
    }
  } else {
    if (usingMagic == "m1") {
      if (char == "player") {
        player_sprite.style.zIndex = "4";
        player_sprite.style.backgroundImage = `url(assets/imgs/chars/${playerName}/SP1.gif)`;
        player_sprite.style.width = `${pSP1width}vw`;
        player_sprite.style.height = `${pSP1height}vh`;
        player_sprite.style.top = `${pSP1Top}vh`;
        player_sprite.style.left = `${pSP1Side}vw`;
        anmDuration = pSP1speed;
      } else {
        enemy_sprite.style.zIndex = "4";
        enemy_sprite.style.backgroundImage = `url(assets/imgs/chars/${enemyName}/SP1.gif)`;
        enemy_sprite.style.width = `${eSP1width}vw`;
        enemy_sprite.style.height = `${eSP1height}vh`;
        enemy_sprite.style.top = `${eSP1Top}vh`;
        enemy_sprite.style.right = `${eSP1Side}vw`;
        anmDuration = eSP1speed;
      }
    } else if (usingMagic == "m2") {
      if (char == "player") {
        player_sprite.style.zIndex = "4";
        player_sprite.style.backgroundImage = `url(assets/imgs/chars/${playerName}/SP2.gif)`;
        player_sprite.style.width = `${pSP2width}vw`;
        player_sprite.style.height = `${pSP2height}vh`;
        player_sprite.style.top = `${pSP2Top}vh`;
        player_sprite.style.left = `${pSP2Side}vw`;
        anmDuration = pSP2speed;
      } else {
        enemy_sprite.style.zIndex = "4";
        enemy_sprite.style.backgroundImage = `url(assets/imgs/chars/${enemyName}/SP2.gif)`;
        enemy_sprite.style.width = `${eSP2width}vw`;
        enemy_sprite.style.height = `${eSP2height}vh`;
        enemy_sprite.style.top = `${eSP2Top}vh`;
        enemy_sprite.style.right = `${eSP2Side}vw`;
        anmDuration = eSP2speed;
      }
    } else {
      if (char == "player") {
        player_sprite.style.zIndex = "4";
        player_sprite.style.backgroundImage = `url(assets/imgs/chars/${playerName}/SP3.gif)`;
        player_sprite.style.width = `${pSP3width}vw`;
        player_sprite.style.height = `${pSP3height}vh`;
        player_sprite.style.top = `${pSP3Top}vh`;
        player_sprite.style.left = `${pSP3Side}vw`;
        anmDuration = pSP3speed;
      } else {
        enemy_sprite.style.zIndex = "4";
        enemy_sprite.style.backgroundImage = `url(assets/imgs/chars/${enemyName}/SP3.gif)`;
        enemy_sprite.style.width = `${eSP3width}vw`;
        enemy_sprite.style.height = `${eSP3height}vh`;
        enemy_sprite.style.top = `${eSP3Top}vh`;
        enemy_sprite.style.right = `${eSP3Side}vw`;
        anmDuration = eSP3speed;
      }
    }
  }

  // attackStatus = "crit";
  if (attackStatus == "crit") {
    charShadow.style.filter = "drop-shadow(0.8vw 1vw 1vw #a50404)";    
  }

  if (roundPass == true) {
    setTimeout(function () {
      screenMessage("KO");
      animateRound(turnOwner);
    }, anmDuration);
  } else {
    turnTimeout = setTimeout(function () {
      if (char == "player") {
        player_sprite.style.zIndex = "0";
        player_sprite.style.backgroundImage = `url(assets/imgs/chars/${playerName}/Idle.gif)`;
        player_sprite.style.width = `${playerWidth}vw`;
        player_sprite.style.height = `${playerHeight}vh`;
        player_sprite.style.top = `${pIDLETop}vh`;
        player_sprite.style.left = `${pIDLESide}vw`;
      } else {
        enemy_sprite.style.zIndex = "0";
        enemy_sprite.style.backgroundImage = `url(assets/imgs/chars/${enemyName}/Idle.gif)`;
        enemy_sprite.style.width = `${enemyWidth}vw`;
        enemy_sprite.style.height = `${enemyHeight}vh`;
        enemy_sprite.style.top = `${eIDLETop}vh`;
        enemy_sprite.style.right = `${eIDLESide}vw`;
      }
      charShadow.style.filter = "drop-shadow(0.6vw 0.6vw 1vw black)";
      attackStatus = "";
      changeTurn();
    }, anmDuration);
  }
}

// increase the round count
// verify who won the round
// change box image of round victory
// reset fighter's health
// if someone win 2 times, redirect to endGame() function
var intervalRound;
var gameState = "continue";
function endRound(roundWinner, attackType) {
  updateMenu();
  if (roundWinner == "player") {
    if (playerRounds < 1) {
      animateAction(roundWinner, attackType, true);
      intervalRound = setInterval(function () {
        playerRounds++;
        player_roundBOX1.src = "assets/imgs/battle/roundBoxON.png";
        player_roundBOX1.style.boxShadow = "0px 0px 10px #ed145b";
        // verifyEnd(gameState, roundWinner);
      }, anmDuration);
    } else {
      gameState = "finished";
      animateAction(roundWinner, attackType, true);
      intervalRound = setInterval(function () {
        player_roundBOX2.src = "assets/imgs/battle/roundBoxON.png";
        player_roundBOX2.style.boxShadow = "0px 0px 10px #ed145b";
        // verifyEnd(gameState, roundWinner);
      }, anmDuration);
    }
  } else {
    if (enemyRounds < 1) {
      animateAction(roundWinner, attackType, true);
      intervalRound = setInterval(function () {
        enemyRounds++;
        enemy_roundBOX1.src = "assets/imgs/battle/roundBoxON.png";
        enemy_roundBOX1.style.boxShadow = "0px 0px 10px #ed145b";
        // verifyEnd(gameState, roundWinner);
      }, anmDuration);
    } else {
      gameState = "finished";
      animateAction(roundWinner, attackType, true);
      intervalRound = setInterval(function () {
        enemy_roundBOX2.src = "assets/imgs/battle/roundBoxON.png";
        enemy_roundBOX2.style.boxShadow = "0px 0px 10px #ed145b";
        // verifyEnd(gameState, roundWinner);
      }, anmDuration);
    }
  }
}

function animateRound(char) {
  var charShadow = document.getElementById(`${char}_sprite`);
  if (char == "player") {
    player_sprite.style.backgroundImage = `url(assets/imgs/chars/${playerName}/Entry.gif)`;
    player_sprite.style.width = `${pEntryWidth}vw`;
    player_sprite.style.height = `${pEntryHeight}vh`;
    player_sprite.style.top = `${pEntryTop}vh`;
    player_sprite.style.left = `${pEntrySide}vw`;
    enemy_sprite.style.backgroundImage = `url(assets/imgs/chars/${enemyName}/Lose.png)`;
    enemy_sprite.style.width = `${eLoseWidth}vw`;
    enemy_sprite.style.height = `${eLoseHeight}vh`;
    enemy_sprite.style.top = `${eLoseTop}vh`;
    enemy_sprite.style.right = `${eLoseSide}vw`;
  } else {
    enemy_sprite.style.backgroundImage = `url(assets/imgs/chars/${enemyName}/Entry.gif)`;
    enemy_sprite.style.width = `${eEntryWidth}vw`;
    enemy_sprite.style.height = `${eEntryHeight}vh`;
    enemy_sprite.style.top = `${eEntryTop}vh`;
    // enemy_sprite.style.right = `${eEntrySide}vw`;
    enemy_sprite.style.right = `${eEntrySide}vw`;
    player_sprite.style.backgroundImage = `url(assets/imgs/chars/${playerName}/Lose.png)`;
    player_sprite.style.width = `${pLoseWidth}vw`;
    player_sprite.style.height = `${pLoseHeight}vh`;
    player_sprite.style.top = `${pLoseTop}vh`;
    player_sprite.style.left = `${pLoseSide}vw`;
  }
  charShadow.style.filter = "drop-shadow(0.6vw 0.6vw 1vw black)";
  attackStatus = "";
  setTimeout(function () {
    verifyEnd(gameState, char);
  }, 2000);
}

function verifyEnd(gameState, roundWinner) {
  setTimeout(function () {
    if (gameState == "continue") {
      clearInterval(intervalRound);
      console.log(`ROUND FINISHED: ${roundWinner} WINS!`);
      turnOwner = roundWinner;
      // RESETING ALL
      // fighters metrics
      player_sprite.style.zIndex = "0";
      player_sprite.style.backgroundImage = `url(assets/imgs/chars/${playerName}/Idle.gif)`;
      player_sprite.style.width = `${playerWidth}vw`;
      player_sprite.style.height = `${playerHeight}vh`;
      player_sprite.style.top = `${pIDLETop}vh`;
      player_sprite.style.left = `${pIDLESide}vw`;
      enemy_sprite.style.zIndex = "0";
      enemy_sprite.style.backgroundImage = `url(assets/imgs/chars/${enemyName}/Idle.gif)`;
      enemy_sprite.style.width = `${enemyWidth}vw`;
      enemy_sprite.style.height = `${enemyHeight}vh`;
      enemy_sprite.style.top = `${eIDLETop}vh`;
      enemy_sprite.style.right = `${eIDLESide}vw`;
      // player health
      player_hp.style.width = `100%`;
      playerLifeNow = playerLifeTotal;
      playerPercentLife = 100;
      // enemy health
      enemy_hp.style.width = `100%`;
      enemyLifeNow = enemyLifeTotal;
      enemyPercentLife = 100;
      // game settings
      playerDefending = 0;
      enemyDefending = 0;
      defending = false;
      turnCounter = 0;
      roundNow++;
      screenMessage(`Round${roundNow}`);
      setTimeout(function () {
        changeTurn();
      }, 3000);
    } else {
      endGame(roundWinner);
    }
  }, 2000);
}

function endGame(winner) {
  disableButtons();
  console.log("desabling buttons...");
  console.log(`${winner} is the winner`);
  window.location = `index.html`;
}
