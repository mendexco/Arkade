// setup all necessary variables to the code
// dice and roll vars
var rollAction = 0;
var diceSides = 0;

// FIGHTERS
// player vars ------
// chars table
var playerObj = JSON.parse(sessionStorage.PLAYER_CHAR);

var playerID = playerObj.idChar;
var playerName = playerObj.nameChar;
var playerLifeTotal = playerObj.life;
var playerLifeNow = playerLifeTotal;
var playerPercentLife = 100;
var playerGauge = 1;
var playerAttack = playerObj.attack;
var playerNameM1 = playerObj.magicName1;
var playerDmgM1 = playerObj.magicDmg1;
var playerNameM2 = playerObj.magicName2;
var playerDmgM2 = playerObj.magicDmg2;
var playerNameM3 = playerObj.magicName3;
var playerDmgM3 = playerObj.magicDmg3;
var playerPR = playerObj.physical_resistance;
var playerMR = playerObj.magical_resistance;
// basic metrics
var playerWidth = playerObj.width;
var playerHeight = playerObj.height;
var pIDLETop = playerObj.top;
var pIDLESide = playerObj.side;
var pEntryWidth = playerObj.entryWidth;
var pEntryHeight = playerObj.entryHeight;
var pEntryTop = playerObj.entryTop;
var pEntrySide = playerObj.entrySide;
var pDefendWidth = playerObj.defendWidth;
var pDefendHeight = playerObj.defendHeight;
var pDefendTop = playerObj.defendTop;
var pDefendSide = playerObj.defendSide;
var pLoseWidth = playerObj.loseWidth;
var pLoseHeight = playerObj.loseHeight;
var pLoseTop = playerObj.loseTop;
var pLoseSide = playerObj.loseSide;
// advanced metrics
var pATKspeed = playerObj.atkSpeed;
var pATKwidth = playerObj.atkWidth;
var pATKheight = playerObj.atkHeight;
var pATKTop = playerObj.atkTop;
var pATKSide = playerObj.atkSide;
var pSP1speed = playerObj.sp1Speed;
var pSP1width = playerObj.sp1Width;
var pSP1height = playerObj.sp1Height;
var pSP1Top = playerObj.sp1Top;
var pSP1Side = playerObj.sp1Side;
var pSP2speed = playerObj.sp2Speed;
var pSP2width = playerObj.sp2Width;
var pSP2height = playerObj.sp2Height;
var pSP2Top = playerObj.sp2Top;
var pSP2Side = playerObj.sp2Side;
var pSP3speed = playerObj.sp3Speed;
var pSP3width = playerObj.sp3Width;
var pSP3height = playerObj.sp3Height;
var pSP3Top = playerObj.sp3Top;
var pSP3Side = playerObj.sp3Side;

// opponent vars ------
// chars table
var enemyObj = JSON.parse(sessionStorage.ENEMY_CHAR);

var enemyID = enemyObj.idChar;
var enemyName = enemyObj.nameChar;
var enemyLifeTotal = enemyObj.life;
var enemyLifeNow = enemyLifeTotal;
var enemyPercentLife = 100;
var enemyGauge = 1;
var enemyAttack = enemyObj.attack;
var enemyNameM1 = enemyObj.magicName1;
var enemyDmgM1 = enemyObj.magicDmg1;
var enemyNameM2 = enemyObj.magicName2;
var enemyDmgM2 = enemyObj.magicDmg2;
var enemyNameM3 = enemyObj.magicName3;
var enemyDmgM3 = enemyObj.magicDmg3;
var enemyPR = enemyObj.physical_resistance;
var enemyMR = enemyObj.magical_resistance;
// basic metrics
var enemyWidth = enemyObj.width;
var enemyHeight = enemyObj.height;
var eIDLETop = enemyObj.top;
var eIDLESide = enemyObj.side;
var eEntryWidth = enemyObj.entryWidth;
var eEntryHeight = enemyObj.entryHeight;
var eEntryTop = enemyObj.entryTop;
var eEntrySide = enemyObj.entrySide;
var eDefendWidth = enemyObj.defendWidth;
var eDefendHeight = enemyObj.defendHeight;
var eDefendTop = enemyObj.defendTop;
var eDefendSide = enemyObj.defendSide;
var eLoseWidth = enemyObj.loseWidth;
var eLoseHeight = enemyObj.loseHeight;
var eLoseTop = enemyObj.loseTop;
var eLoseSide = enemyObj.loseSide;
// advanced metrics
var eATKspeed = enemyObj.atkSpeed;
var eATKwidth = enemyObj.atkWidth;
var eATKheight = enemyObj.atkHeight;
var eATKTop = enemyObj.atkTop;
var eATKSide = enemyObj.atkSide;
var eSP1speed = enemyObj.sp1Speed;
var eSP1width = enemyObj.sp1Width;
var eSP1height = enemyObj.sp1Height;
var eSP1Top = enemyObj.sp1Top;
var eSP1Side = enemyObj.sp1Side;
var eSP2speed = enemyObj.sp2Speed;
var eSP2width = enemyObj.sp2Width;
var eSP2height = enemyObj.sp2Height;
var eSP2Top = enemyObj.sp2Top;
var eSP2Side = enemyObj.sp2Side;
var eSP3speed = enemyObj.sp3Speed;
var eSP3width = enemyObj.sp3Width;
var eSP3height = enemyObj.sp3Height;
var eSP3Top = enemyObj.sp3Top;
var eSP3Side = enemyObj.sp3Side;

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
var defending = false;
var defenseStatus = "";
var attackStatus = "";
const gamemode = sessionStorage.GAMEMODE;
// -----------------------------------------------------------------------------------------------------------------------------

// other essecial setus
setupEssencials();
function setupEssencials() {
  // setting stage
  if (gamemode == "arcade") {
    sessionStorage.STAGE = enemyName;
  }
  div_stage.style.backgroundImage = `url(../assets/imgs/stages/stage_${sessionStorage.STAGE}.gif)`;
  // setting sfx
  stage_music.src = `assets/audios/musics/${sessionStorage.STAGE}Theme.mp3`;
  stage_music.volume = 0.05;
  // gif of each fighter
  player_sprite.style.width = `${playerWidth}vw`;
  player_sprite.style.height = `${playerHeight}vh`;
  player_sprite.style.top = `${pIDLETop}vh`;
  player_sprite.style.left = `${pIDLESide}vw`;
  player_sprite.src = `assets/imgs/chars/${playerName}/Idle.gif`;
  player_portrait.style.backgroundColor = "transparent";
  enemy_sprite.style.width = `${enemyWidth}vw`;
  enemy_sprite.style.height = `${enemyHeight}vh`;
  enemy_sprite.style.top = `${eIDLETop}vh`;
  enemy_sprite.style.right = `${eIDLESide}vw`;
  enemy_sprite.style.transform = "scale(-1,1)";
  enemy_sprite.src = `assets/imgs/chars/${enemyName}/Idle.gif`;
  enemy_portrait.style.backgroundColor = "transparent";
  // name of each character
  name_player.innerHTML = playerName;
  name_enemy.innerHTML = enemyName;
  // portrait of each character
  player_portrait.style.backgroundImage = `url(../assets/imgs/chars/${playerName}/PORTRAIT.png)`;
  enemy_portrait.style.backgroundImage = `url(../assets/imgs/chars/${enemyName}/PORTRAIT.png)`;
  // defense bar
  player_defenseBAR.style.width = "0vw";
  enemy_defenseBAR.style.width = "0vw";
  // character magicks
  btn_m1.innerHTML = `${playerNameM1} <b>1</b>`;
  btn_m2.innerHTML = `${playerNameM2} <b>2</b>`;
  btn_m3.innerHTML = `${playerNameM3} <b>3</b>`;
  // visibility of magic options screen
  div_actions.style.display = "flex";
  div_magicks.style.display = "none";

  // DEBUG COMMENT
  disableButtons();
  screenMessage(`Round${roundNow}`);
  setTimeout(function () {
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
  turnInterval = setInterval(function () {
    // console.log(turnSeconds);
    if (turnSeconds == 0) {
      disableButtons();
    }
    if (turnSeconds < 0) {
      changeTurn();
    }
    p_turn.innerHTML = turnSeconds;
    turnSeconds--;
    p_turn.style.fontSize = "2.5vw";
    p_turn.style.opacity = "1";
    div_turn.style.filter = "drop-shadow(0.2vw 0.4vw 0.6vw #ed145b)";
    setTimeout(function () {
      p_turn.style.fontSize = "2vw";
      p_turn.style.opacity = "0";
      div_turn.style.filter = "drop-shadow(0.0vw 0.1vw 1vw #ed145b)";
    }, 500);
  }, 1000);
}

// verify who will lead the next turn
// also redirects to the updateMenu() and buttonStatus() functions
function changeTurn() {
  turnTimer();
  if (turnOwner == "player") {
    player_arrow.style.display = "none";
    player_portrait.style.backgroundColor = "transparent";
    // next turn is opponent's one
    enemy_arrow.style.display = "flex";
    enemy_portrait.style.backgroundColor = "#ed145b";
    enemy_sprite.style.transition = "all 1s cubic-bezier(0, 1.08, 0.25, 1) 0s";
    timer = randomizeRoll(3) * 1000;
    console.log(timer);
    setTimeout(function () {
      turnOwner = "enemy";
      enemy_sprite.style.width = `${enemyWidth}vw`;
      enemy_sprite.style.height = `${enemyHeight}vh`;
      enemy_sprite.style.top = `${eIDLETop}vh`;
      enemy_sprite.style.right = `${eIDLESide}vw`;
      enemy_sprite.src = `assets/imgs/chars/${enemyName}/Idle.gif`;
      console.log("Now it's opponent's turn!");
      buttonStatus("enemy");
      typeAI();
    }, timer);
  } else {
    enemy_arrow.style.display = "none";
    enemy_portrait.style.backgroundColor = "transparent";
    // next turn is player's one
    player_sprite.style.transition = "all 1s cubic-bezier(0, 1.08, 0.25, 1) 0s";
    player_arrow.style.display = "flex";
    player_portrait.style.backgroundColor = "#ed145b";
    turnOwner = "player";
    player_sprite.style.width = `${playerWidth}vw`;
    player_sprite.style.height = `${playerHeight}vh`;
    player_sprite.style.top = `${pIDLETop}vh`;
    player_sprite.style.left = `${pIDLESide}vw`;
    player_sprite.src = `assets/imgs/chars/${playerName}/Idle.gif`;
    console.log("Now it's player's turn!");
    buttonStatus("player");
  }
}

document.addEventListener("keypress", function (event) {
  if (btn_attack.disabled == false) {
    if (event.code == "KeyA" && div_actions.style.display == "flex") {
      rollHit("PA");
    } else if (event.code == "KeyD" && div_actions.style.display == "flex") {
      defend();
    } else if (event.code == "KeyS" && div_actions.style.display == "flex") {
      showPowers();
    } else if (
      (event.code == "Digit1" || event.code == "Numpad1") &&
      playerGauge >= 1
    ) {
      magicHit("m1", "MA");
    } else if (
      (event.code == "Digit2" || event.code == "Numpad2") &&
      playerGauge >= 2
    ) {
      magicHit("m2", "MA");
    } else if (
      (event.code == "Digit3" || event.code == "Numpad3") &&
      playerGauge >= 3
    ) {
      magicHit("m3", "MA");
    }
  }
});
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
  player_arrow.style.display = "none";
  player_portrait.style.backgroundColor = "transparent";
  enemy_arrow.style.display = "none";
  enemy_portrait.style.backgroundColor = "transparent";
  setTimeout(changeTurn, turnChanger);
  if (turnOwner == "player") {
    player_sprite.style.width = `${pDefendWidth}vw`;
    player_sprite.style.height = `${pDefendHeight}vh`;
    player_sprite.style.top = `${pDefendTop}vh`;
    player_sprite.style.left = `${pDefendSide}vw`;
    player_sprite.src = `assets/imgs/chars/${playerName}/Defending.gif`;
  } else {
    enemy_sprite.style.width = `${eDefendWidth}vw`;
    enemy_sprite.style.height = `${eDefendHeight}vh`;
    enemy_sprite.style.top = `${eDefendTop}vh`;
    enemy_sprite.style.right = `${eDefendSide}vw`;
    enemy_sprite.src = `assets/imgs/chars/${enemyName}/Defending.gif`;
  }
  defending = true;
  console.log(`${turnOwner.toUpperCase()} IS DEFENDING!...`);
  increaseGauge(turnOwner);
  turnCounter++;
}

// increase 1 gauge bar
// limit the gauge bars to 3
function increaseGauge(charIncreasing) {
  // PLAYER POINTS
  if (charIncreasing == "player") {
    playerGauge++;
    if (playerGauge > 3) {
      playerGauge--;
    }
  } else {
    // ENEMY POINTS
    if (charIncreasing == "enemy") {
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
  let diceNumber = randomizeRoll(diceSides);
  let hitStatus = "";
  const toMiss = 2;
  const toHit = 17;

  // diceNumber = 16;
  if (diceNumber < toMiss) {
    console.log(`=> miss hit!`);
    hitStatus = "miss";
    if (turnOwner == "player") {
      logStatus("enemy", "evade");
      increaseGauge("enemy");
    } else {
      logStatus("player", "evade");
      increaseGauge("player");
    }
    fillGauge();
    // increaseGauge();
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

  toMA += enemyGauge;
  toPA += enemyGauge;

  diceSides = 20;
  let diceNumber = randomizeRoll(diceSides);
  // diceNumber = 20;
  if (diceNumber < toPA) {
    console.log("ENEMY IS USING PHYSICAL ATTACK");
    rollHit("PA");
  } else if (diceNumber < toMA) {
    if (enemyGauge > 0) {
      console.log("ENEMY IS USING MAGICAL ATTACK");
      magicAI();
    } else {
      let diceNumber2 = randomizeRoll(diceSides);
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
  const magics = ["m1", "m2", "m3"];
  var magicLevel = "";
  if (enemyGauge == 3) {
    diceSides = 2;
  } else if (enemyGauge == 2) {
    diceSides = 2;
  } else {
    diceSides = 1;
  }
  var diceMagic = 0;
  if (enemyGauge == 3) {
    diceMagic = randomizeRoll(diceSides);
  } else {
    diceMagic = randomizeRoll(diceSides) - 1;
  }
  magicLevel = magics[diceMagic];
  magicHit(magicLevel, "MA");
}

// play a dice to randomiz a number
// dice number of sides is given in the function's parameter
function randomizeRoll(sides) {
  let randomRoll = Math.floor(Math.random() * sides) + 1;
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
  let attack = 0;
  let PR = 0;
  let MR = 0;
  let M1 = 0;
  let M2 = 0;
  let M3 = 0;
  let defenseDmg = 0;
  // get correct character's attack
  if (turnOwner == "player") {
    attack = playerAttack;
    PR = 1 - playerPR / 100;
    MR = 1 - playerMR / 100;
    M1 = playerDmgM1;
    M3 = playerDmgM3;
    M2 = playerDmgM2;
  } else {
    attack = enemyAttack;
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
      defenseDmg = 2;
    } else {
      attack *= 1.5;
      attackStatus = "crit";
      defenseDmg = 3;
    }
    // applying physics resistance
    console.log(`ATTACK: ${attack} X PR: ${PR}`);
    attack *= PR;
  } else {
    if (hitStatus == "m1") {
      attack = M1;
      defenseDmg = 4;
      if (turnOwner == "player") {
        playerGauge -= 1;
      } else {
        enemyGauge -= 1;
      }
    } else if (hitStatus == "m2") {
      attack = M2;
      defenseDmg = 6;
      if (turnOwner == "player") {
        playerGauge -= 2;
      } else {
        enemyGauge -= 2;
      }
    } else {
      attack = M3;
      defenseDmg = 10;
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
  // defending = true;
  if (defending == true) {
    if (hitStatus == "miss") {
      if (turnOwner == "player") {
        logStatus("enemy", "evade");
      } else {
        logStatus("player", "evade");
      }
      defenseStatus = "miss";
    } else if (
      (turnOwner == "enemy" && player_defenseBAR.style.width == "10vw") ||
      (turnOwner == "player" && enemy_defenseBAR.style.width == "10vw")
    ) {
      attack *= 1.5;
      if (turnOwner == "player") {
        logStatus("player", "broke");
        enemy_defenseBAR.style.width = `0vw`;
      } else {
        logStatus("enemy", "broke");
        player_defenseBAR.style.width = `0vw`;
      }
      console.log("... defense fails");
      defenseStatus = "broke";
    } else {
      if (turnOwner == "player") {
        attack *= reduceDefense("enemy", defenseDmg);
      } else {
        attack *= reduceDefense("player", defenseDmg);
      }
      console.log("... defended!");
      defenseStatus = "defended";
    }
  }
  animateDefense();
  return attack;
}

function reduceDefense(character, dmg) {
  let actualDefense = "";
  if (character == "player") {
    actualDefense = player_defenseBAR.style.width.replace("vw", "");
    if (dmg + Number(actualDefense) > 10) {
      logStatus("enemy", "broke");
      player_defenseBAR.style.width = `0vw`;
      return 1.2;
    } else {
      logStatus("player", "defended");
      dmg += Number(actualDefense);
      player_defenseBAR.style.width = `${dmg}vw`;
      return 0;
    }
  } else {
    actualDefense = enemy_defenseBAR.style.width.replace("vw", "");
    if (dmg + Number(actualDefense) > 10) {
      logStatus("player", "broke");
      enemy_defenseBAR.style.width = `0vw`;
      return 1.2;
    } else {
      logStatus("enemy", "defended");
      dmg += Number(actualDefense);
      enemy_defenseBAR.style.width = `${dmg}vw`;
      return 0;
    }
  }
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
      enemy_sprite.style.width = `${eDefendWidth}vw`;
      enemy_sprite.style.height = `${eDefendHeight}vh`;
      enemy_sprite.style.top = `${eDefendTop}vh`;
      enemy_sprite.style.right = `${eDefendSide}vw`;
      char.src = `assets/imgs/chars/${enemyName}/Defending.gif`;
    } else {
      char.style.transform = "scale(1.05, 1.05)";
      player_sprite.style.width = `${pDefendWidth}vw`;
      player_sprite.style.height = `${pDefendHeight}vh`;
      player_sprite.style.top = `${pDefendTop}vh`;
      player_sprite.style.right = `${pDefendSide}vw`;
      char.src = `assets/imgs/chars/${playerName}/Defending.gif`;
    }
    setTimeout(function () {
      char.style.filter = "drop-shadow(0.6vw 0.6vw 1vw black) brightness(1)";
      if (defenseChar == "enemy") {
        enemy_sprite.style.width = `${enemyWidth}vw`;
        enemy_sprite.style.height = `${enemyHeight}vh`;
        enemy_sprite.style.top = `${eIDLETop}vh`;
        enemy_sprite.style.right = `${eIDLESide}vw`;
        char.style.transform = "scale(-1, 1)";
        char.src = `assets/imgs/chars/${enemyName}/Idle.gif`;
      } else {
        char.style.transform = "scale(1, 1)";
        player_sprite.style.width = `${playerWidth}vw`;
        player_sprite.style.height = `${playerHeight}vh`;
        player_sprite.style.top = `${pIDLETop}vh`;
        player_sprite.style.left = `${pIDLESide}vw`;
        char.src = `assets/imgs/chars/${playerName}/Idle.gif`;
      }
    }, 900);
    defenseStatus = "";
  } else if (defenseStatus == "miss") {
    if (turnOwner == "player") {
      char.style.filter = "drop-shadow(0.4vw 0vw 0.4vw #0084ff)";
      char.style.transform = "scale(-1,1) skew(10deg) translateX(-3vw)";
      setTimeout(function () {
        char.style.transform = "scale(-1,1)";
        char.style.filter = "drop-shadow(0.6vw 0.6vw 1vw black)";
      }, 800);
    } else {
      char.style.filter = "drop-shadow(0.4vw 0vw 0.4vw #0084ff)";
      char.style.transform = "skew(10deg) translateX(-3vw)";
      setTimeout(function () {
        char.style.transform = "";
        char.style.filter = "drop-shadow(0.6vw 0.6vw 1vw black)";
      }, 800);
    }
    defenseStatus = "";
  } else if (defenseStatus == "broke") {
    if (turnOwner == "player") {
      char.style.filter = "grayscale(0.7) invert(1)";
      char.style.transform = "scale(-1,1) rotate(-10deg)";
      enemy_sprite.src = `assets/imgs/chars/${enemyName}/Idle.gif`;
      enemy_sprite.style.width = `${enemyWidth}vw`;
      enemy_sprite.style.height = `${enemyHeight}vh`;
      enemy_sprite.style.top = `${eIDLETop}vh`;
      setTimeout(function () {
        char.style.transform = "scale(-1,1)";
        char.style.filter = "drop-shadow(0.6vw 0.6vw 1vw black)";
        enemy_sprite.style.right = `${eIDLESide}vw`;
      }, 400);
    } else {
      char.style.filter = "grayscale(0.7) invert(1)";
      char.style.transform = "rotate(-10deg)";
      player_sprite.src = `assets/imgs/chars/${playerName}/Idle.gif`;
      player_sprite.style.width = `${playerWidth}vw`;
      player_sprite.style.height = `${playerHeight}vh`;
      player_sprite.style.top = `${pIDLETop}vh`;
      setTimeout(function () {
        char.style.transform = "";
        char.style.filter = "drop-shadow(0.6vw 0.6vw 1vw black)";
        player_sprite.style.left = `${pIDLESide}vw`;
      }, 400);
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

let usingMagic = "";
let anmDuration = 0;
function animateAction(char, typeAction, roundPass) {
  var charShadow = document.getElementById(`${char}_sprite`);
  player_arrow.style.display = "none";
  enemy_arrow.style.display = "none";
  console.log(typeAction);
  if (typeAction == "PA") {
    if (char == "player") {
      player_sprite.style.zIndex = "2";
      player_sprite.style.width = `${pATKwidth}vw`;
      player_sprite.style.height = `${pATKheight}vh`;
      player_sprite.style.top = `${pATKTop}vh`;
      player_sprite.style.left = `${pATKSide}vw`;
      player_sprite.src = `assets/imgs/chars/${playerName}/Attack.gif`;
      anmDuration = pATKspeed;
    } else {
      enemy_sprite.style.zIndex = "2";
      enemy_sprite.style.width = `${eATKwidth}vw`;
      enemy_sprite.style.height = `${eATKheight}vh`;
      enemy_sprite.style.top = `${eATKTop}vh`;
      enemy_sprite.style.right = `${eATKSide}vw`;
      enemy_sprite.src = `assets/imgs/chars/${enemyName}/Attack.gif`;
      anmDuration = eATKspeed;
    }
  } else {
    if (usingMagic == "m1") {
      if (char == "player") {
        player_sprite.style.zIndex = "2";
        player_sprite.style.width = `${pSP1width}vw`;
        player_sprite.style.height = `${pSP1height}vh`;
        player_sprite.style.top = `${pSP1Top}vh`;
        player_sprite.style.left = `${pSP1Side}vw`;
        player_sprite.src = `assets/imgs/chars/${playerName}/SP1.gif`;
        anmDuration = pSP1speed;
      } else {
        enemy_sprite.style.zIndex = "2";
        enemy_sprite.style.width = `${eSP1width}vw`;
        enemy_sprite.style.height = `${eSP1height}vh`;
        enemy_sprite.style.top = `${eSP1Top}vh`;
        enemy_sprite.style.right = `${eSP1Side}vw`;
        enemy_sprite.src = `assets/imgs/chars/${enemyName}/SP1.gif`;
        anmDuration = eSP1speed;
      }
    } else if (usingMagic == "m2") {
      if (char == "player") {
        player_sprite.style.zIndex = "2";
        player_sprite.style.width = `${pSP2width}vw`;
        player_sprite.style.height = `${pSP2height}vh`;
        player_sprite.style.top = `${pSP2Top}vh`;
        player_sprite.style.left = `${pSP2Side}vw`;
        player_sprite.src = `assets/imgs/chars/${playerName}/SP2.gif`;
        anmDuration = pSP2speed;
      } else {
        enemy_sprite.style.zIndex = "2";
        enemy_sprite.style.width = `${eSP2width}vw`;
        enemy_sprite.style.height = `${eSP2height}vh`;
        enemy_sprite.style.top = `${eSP2Top}vh`;
        enemy_sprite.style.right = `${eSP2Side}vw`;
        enemy_sprite.src = `assets/imgs/chars/${enemyName}/SP2.gif`;
        anmDuration = eSP2speed;
      }
    } else {
      if (char == "player") {
        player_sprite.style.zIndex = "2";
        player_sprite.style.width = `${pSP3width}vw`;
        player_sprite.style.height = `${pSP3height}vh`;
        player_sprite.style.top = `${pSP3Top}vh`;
        player_sprite.style.left = `${pSP3Side}vw`;
        player_sprite.src = `assets/imgs/chars/${playerName}/SP3.gif`;
        anmDuration = pSP3speed;
      } else {
        enemy_sprite.style.zIndex = "2";
        enemy_sprite.style.width = `${eSP3width}vw`;
        enemy_sprite.style.height = `${eSP3height}vh`;
        enemy_sprite.style.top = `${eSP3Top}vh`;
        enemy_sprite.style.right = `${eSP3Side}vw`;
        enemy_sprite.src = `assets/imgs/chars/${enemyName}/SP3.gif`;
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
      player_sprite.style.transition = "";
      enemy_sprite.style.transition = "";
      if (char == "player") {
        player_sprite.style.zIndex = "0";
        player_sprite.style.width = `${playerWidth}vw`;
        player_sprite.style.height = `${playerHeight}vh`;
        player_sprite.style.top = `${pIDLETop}vh`;
        player_sprite.style.left = `${pIDLESide}vw`;
        player_sprite.src = `assets/imgs/chars/${playerName}/Idle.gif`;
      } else {
        enemy_sprite.style.zIndex = "0";
        enemy_sprite.style.width = `${enemyWidth}vw`;
        enemy_sprite.style.height = `${enemyHeight}vh`;
        enemy_sprite.style.top = `${eIDLETop}vh`;
        enemy_sprite.style.right = `${eIDLESide}vw`;
        enemy_sprite.src = `assets/imgs/chars/${enemyName}/Idle.gif`;
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
let intervalRound;
let gameState = "continue";
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
  let charShadow = document.getElementById(`${char}_sprite`);
  if (char == "player") {
    player_sprite.style.width = `${pEntryWidth}vw`;
    player_sprite.style.height = `${pEntryHeight}vh`;
    player_sprite.style.top = `${pEntryTop}vh`;
    player_sprite.style.left = `${pEntrySide}vw`;
    player_sprite.src = `assets/imgs/chars/${playerName}/Entry.gif`;
    enemy_sprite.style.width = `${eLoseWidth}vw`;
    enemy_sprite.style.height = `${eLoseHeight}vh`;
    enemy_sprite.style.top = `${eLoseTop}vh`;
    enemy_sprite.style.right = `${eLoseSide}vw`;
    enemy_sprite.src = `assets/imgs/chars/${enemyName}/Lose.png`;
  } else {
    enemy_sprite.style.width = `${eEntryWidth}vw`;
    enemy_sprite.style.height = `${eEntryHeight}vh`;
    enemy_sprite.style.top = `${eEntryTop}vh`;
    enemy_sprite.style.right = `${eEntrySide}vw`;
    enemy_sprite.src = `assets/imgs/chars/${enemyName}/Entry.gif`;
    player_sprite.style.width = `${pLoseWidth}vw`;
    player_sprite.style.height = `${pLoseHeight}vh`;
    player_sprite.style.top = `${pLoseTop}vh`;
    player_sprite.style.left = `${pLoseSide}vw`;
    player_sprite.src = `assets/imgs/chars/${playerName}/Lose.png`;
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
      player_sprite.style.width = `${playerWidth}vw`;
      player_sprite.style.height = `${playerHeight}vh`;
      player_sprite.style.top = `${pIDLETop}vh`;
      player_sprite.style.left = `${pIDLESide}vw`;
      player_sprite.src = `assets/imgs/chars/${playerName}/Idle.gif`;
      enemy_sprite.style.zIndex = "0";
      enemy_sprite.style.width = `${enemyWidth}vw`;
      enemy_sprite.style.height = `${enemyHeight}vh`;
      enemy_sprite.style.top = `${eIDLETop}vh`;
      enemy_sprite.style.right = `${eIDLESide}vw`;
      enemy_sprite.src = `assets/imgs/chars/${enemyName}/Idle.gif`;
      // player health
      player_hp.style.width = `100%`;
      playerLifeNow = playerLifeTotal;
      playerPercentLife = 100;
      // enemy health
      enemy_hp.style.width = `100%`;
      enemyLifeNow = enemyLifeTotal;
      enemyPercentLife = 100;
      // game settings
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
  if (winner == "enemy") {
    window.location = `lobby.html`;
  } else {
    if (enemyID >= 10) {
      console.log("Cabo");
    } else {
      nextEnemy();
    }
  }
}

let arrayArcade = JSON.parse(sessionStorage.ARCADE);
console.log(arrayArcade);
function nextEnemy() {
  arrayArcade.shift();
  sessionStorage.ARCADE = JSON.stringify(arrayArcade);
  let idVar = arrayArcade[0];
  console.log("ID CHARACTER: ", idVar);
  fetch("/chars/setChar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idServer: idVar,
    }),
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN DO nextEnemy()!");
      if (resposta.ok) {
        console.log(resposta);
        resposta.json().then((json) => {
          console.log(sessionStorage.CHARS);
          sessionStorage.ENEMY_CHAR = JSON.stringify(json);
          window.location = "battle.html";
        });
      } else {
        console.log("There was an error while going to next enemy!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });

  return false;
}

