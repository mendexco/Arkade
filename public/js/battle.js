// setup all necessary variables to the code
// dice and roll vars
let rollAction = 0;
let diceSides = 0;

// FIGHTERS
// player vars ------
// chars table
const playerObj = JSON.parse(sessionStorage.PLAYER_CHAR);

let playerLifeNow = playerObj.life;
let playerPercentLife = 100;
let playerGauge = 1;

// opponent vars ------
// chars table
const enemyObj = JSON.parse(sessionStorage.ENEMY_CHAR);

let enemyLifeNow = enemyObj.life;
let enemyPercentLife = 100;
let enemyGauge = 1;

// FIGHT FLOW
// turn vars
let turnCounter = 1;
let turnOwner = "player"; //first turn definitions
let turnTimeout = 0;
const turnChanger = 1000;

// round vars
let roundNow = 1;
let playerRounds = 0;
let enemyRounds = 0;

// additional vars
const gaugeColor = "rgb(58, 58, 245)";
let defending = false;
let defenseStatus = "";
let attackStatus = "";
const gamemode = sessionStorage.GAMEMODE;
// -----------------------------------------------------------------------------------------------------------------------------
// other essecial setus
setupEssencials();
function setupEssencials() {
  // setting stage
  if (gamemode == "arcade") {
    sessionStorage.STAGE = enemyObj.nameChar;
  }
  div_stage.style.backgroundImage = `url(../assets/imgs/stages/stage_${sessionStorage.STAGE}.gif)`;
  // setting sfx
  stage_music.src = `assets/audios/musics/${sessionStorage.STAGE}Theme.mp3`;
  stage_music.volume = 0.05;
  // gif of each fighter
  player_sprite.style.width = `${playerObj.width}vw`;
  player_sprite.style.height = `${playerObj.height}vh`;
  player_sprite.style.top = `${playerObj.top}vh`;
  player_sprite.style.left = `${playerObj.side}vw`;
  player_sprite.src = `assets/imgs/chars/${playerObj.nameChar}/Idle.gif`;
  player_portrait.style.backgroundColor = "transparent";
  enemy_sprite.style.width = `${enemyObj.width}vw`;
  enemy_sprite.style.height = `${enemyObj.height}vh`;
  enemy_sprite.style.top = `${enemyObj.top}vh`;
  enemy_sprite.style.right = `${enemyObj.side}vw`;
  enemy_sprite.style.transform = "scale(-1,1)";
  enemy_sprite.src = `assets/imgs/chars/${enemyObj.nameChar}/Idle.gif`;
  enemy_portrait.style.backgroundColor = "transparent";
  // name of each character
  name_player.innerHTML = playerObj.nameChar;
  name_enemy.innerHTML = enemyObj.nameChar;
  // portrait of each character
  player_portrait.style.backgroundImage = `url(../assets/imgs/chars/${playerObj.nameChar}/SplashMIN.png)`;
  enemy_portrait.style.backgroundImage = `url(../assets/imgs/chars/${enemyObj.nameChar}/SplashMIN.png)`;
  // defense bar
  player_defenseBAR.style.width = "0vw";
  enemy_defenseBAR.style.width = "0vw";
  // character magicks
  btn_m1.innerHTML = `${playerObj.magicName1} <b>1</b>`;
  btn_m2.innerHTML = `${playerObj.magicName2} <b>2</b>`;
  btn_m3.innerHTML = `${playerObj.magicName3} <b>3</b>`;
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

let turnSeconds = 3;
let turnInterval;
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
      enemy_sprite.style.width = `${enemyObj.width}vw`;
      enemy_sprite.style.height = `${enemyObj.height}vh`;
      enemy_sprite.style.top = `${enemyObj.top}vh`;
      enemy_sprite.style.right = `${enemyObj.side}vw`;
      enemy_sprite.src = `assets/imgs/chars/${enemyObj.nameChar}/Idle.gif`;
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
    player_sprite.style.width = `${playerObj.width}vw`;
    player_sprite.style.height = `${playerObj.height}vh`;
    player_sprite.style.top = `${playerObj.top}vh`;
    player_sprite.style.left = `${playerObj.side}vw`;
    player_sprite.src = `assets/imgs/chars/${playerObj.nameChar}/Idle.gif`;
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
    player_sprite.style.width = `${playerObj.defendWidth}vw`;
    player_sprite.style.height = `${playerObj.defendHeight}vh`;
    player_sprite.style.top = `${playerObj.defendTop}vh`;
    player_sprite.style.left = `${playerObj.defendSide}vw`;
    player_sprite.src = `assets/imgs/chars/${playerObj.nameChar}/Defending.gif`;
  } else {
    enemy_sprite.style.width = `${enemyObj.defendWidth}vw`;
    enemy_sprite.style.height = `${enemyObj.defendHeight}vh`;
    enemy_sprite.style.top = `${enemyObj.defendTop}vh`;
    enemy_sprite.style.right = `${enemyObj.defendSide}vw`;
    enemy_sprite.src = `assets/imgs/chars/${enemyObj.nameChar}/Defending.gif`;
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
  const m1 = document.getElementById("btn_m1");
  const m2 = document.getElementById("btn_m2");
  const m3 = document.getElementById("btn_m3");
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
  let hitStatus = "";
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

  let typeRoll = typePARAM;
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

  let typeRoll = typePARAM;
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
  let magicLevel = "";
  if (enemyGauge == 3) {
    diceSides = 2;
  } else if (enemyGauge == 2) {
    diceSides = 2;
  } else {
    diceSides = 1;
  }
  let diceMagic = 0;
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
    attack = playerObj.attack;
    PR = 1 - playerObj.physical_resistance / 100;
    MR = 1 - playerObj.magical_resistance / 100;
    M1 = playerObj.magicDmg1;
    M3 = playerObj.magicDmg3;
    M2 = playerObj.magicDmg2;
  } else {
    attack = enemyObj.attack;
    PR = 1 - enemyObj.physical_resistance / 100;
    MR = 1 - enemyObj.magical_resistance / 100;
    M1 = enemyObj.magicDmg1;
    M2 = enemyObj.magicDmg2;
    M3 = enemyObj.magicDmg3;
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
  let log = document.getElementById(`${char}_${divLog}`);
  log.style.filter = "brightness(1)";
  log.style.opacity = "1";
  log.style.position = "absolute";
  let logTimeout = setTimeout(function () {
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
  let typeAttack = typePARAM;
  let attack = attackModifier(hitStatus, typeAttack);
  // APPLY DAMAGE
  if (turnOwner == "player") {
    console.log(`
        Past Life: ${enemyLifeNow}
        Damage: ${attack}
        Actual Life: ${enemyLifeNow - attack}
        `);
    enemyLifeNow -= attack;
    enemyPercentLife = (100 * enemyLifeNow) / enemyObj.life;
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
      DIV Percentage: ${(100 * (playerLifeNow - attack)) / playerObj.life}%
      `);
    playerLifeNow -= attack;
    playerPercentLife = (100 * playerLifeNow) / playerObj.life;
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
    attack = 0;
  }
}

function animateDefense() {
  let defenseChar = "";
  if (turnOwner == "player") {
    defenseChar = "enemy";
  } else {
    defenseChar = "player";
  }
  let char = document.getElementById(`${defenseChar}_sprite`);
  // console.log(char);
  // defenseStatus = "";
  if (defenseStatus == "defended") {
    char.style.filter = "drop-shadow(0.8vw 1vw 1vw #ffd700ad) brightness(1.25)";
    if (defenseChar == "enemy") {
      char.style.transform = "scale(-1.05, 1.05)";
      enemy_sprite.style.width = `${enemyObj.defendWidth}vw`;
      enemy_sprite.style.height = `${enemyObj.defendHeight}vh`;
      enemy_sprite.style.top = `${enemyObj.defendTop}vh`;
      enemy_sprite.style.right = `${enemyObj.defendSide}vw`;
      char.src = `assets/imgs/chars/${enemyObj.nameChar}/Defending.gif`;
    } else {
      char.style.transform = "scale(1.05, 1.05)";
      player_sprite.style.width = `${playerObj.defendWidth}vw`;
      player_sprite.style.height = `${playerObj.defendHeight}vh`;
      player_sprite.style.top = `${playerObj.defendTop}vh`;
      player_sprite.style.right = `${playerObj.defendSide}vw`;
      char.src = `assets/imgs/chars/${playerObj.nameChar}/Defending.gif`;
    }
    setTimeout(function () {
      char.style.filter = "drop-shadow(0.6vw 0.6vw 1vw black) brightness(1)";
      if (defenseChar == "enemy") {
        enemy_sprite.style.width = `${enemyObj.width}vw`;
        enemy_sprite.style.height = `${enemyObj.height}vh`;
        enemy_sprite.style.top = `${enemyObj.top}vh`;
        enemy_sprite.style.right = `${enemyObj.side}vw`;
        char.style.transform = "scale(-1, 1)";
        char.src = `assets/imgs/chars/${enemyObj.nameChar}/Idle.gif`;
      } else {
        char.style.transform = "scale(1, 1)";
        player_sprite.style.width = `${playerObj.width}vw`;
        player_sprite.style.height = `${playerObj.height}vh`;
        player_sprite.style.top = `${playerObj.top}vh`;
        player_sprite.style.left = `${playerObj.side}vw`;
        char.src = `assets/imgs/chars/${playerObj.nameChar}/Idle.gif`;
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
      enemy_sprite.src = `assets/imgs/chars/${enemyObj.nameChar}/Idle.gif`;
      enemy_sprite.style.width = `${enemyObj.width}vw`;
      enemy_sprite.style.height = `${enemyObj.height}vh`;
      enemy_sprite.style.top = `${enemyObj.top}vh`;
      setTimeout(function () {
        char.style.transform = "scale(-1,1)";
        char.style.filter = "drop-shadow(0.6vw 0.6vw 1vw black)";
        enemy_sprite.style.right = `${enemyObj.side}vw`;
      }, 400);
    } else {
      char.style.filter = "grayscale(0.7) invert(1)";
      char.style.transform = "rotate(-10deg)";
      player_sprite.src = `assets/imgs/chars/${playerObj.nameChar}/Idle.gif`;
      player_sprite.style.width = `${playerObj.width}vw`;
      player_sprite.style.height = `${playerObj.height}vh`;
      player_sprite.style.top = `${playerObj.top}vh`;
      setTimeout(function () {
        char.style.transform = "";
        char.style.filter = "drop-shadow(0.6vw 0.6vw 1vw black)";
        player_sprite.style.left = `${playerObj.side}vw`;
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
        enemy_sprite.style.top = `${enemyObj.top}vh`;
        enemy_sprite.style.right = `${enemyObj.side}vw`;
      }, 150);
    } else {
      char.style.filter = "brightness(0) invert(1)";
      char.style.transform = "rotate(-10deg)";
      setTimeout(function () {
        char.style.transform = "";
        char.style.filter = "drop-shadow(0.6vw 0.6vw 1vw black)";
        player_sprite.style.top = `${playerObj.top}vh`;
        player_sprite.style.right = `${playerObj.side}vw`;
      }, 150);
    }
    defenseStatus = "";
  }
}

let usingMagic = "";
let anmDuration = 0;
function animateAction(char, typeAction, roundPass) {
  let charShadow = document.getElementById(`${char}_sprite`);
  player_arrow.style.display = "none";
  enemy_arrow.style.display = "none";
  console.log(typeAction);
  if (typeAction == "PA") {
    if (char == "player") {
      player_sprite.style.zIndex = "2";
      player_sprite.style.width = `${playerObj.atkWidth}vw`;
      player_sprite.style.height = `${playerObj.atkHeight}vh`;
      player_sprite.style.top = `${playerObj.atkTop}vh`;
      player_sprite.style.left = `${playerObj.atkSide}vw`;
      player_sprite.src = `assets/imgs/chars/${playerObj.nameChar}/Attack.gif`;
      anmDuration = playerObj.atkSpeed;
    } else {
      enemy_sprite.style.zIndex = "2";
      enemy_sprite.style.width = `${enemyObj.atkWidth}vw`;
      enemy_sprite.style.height = `${enemyObj.atkHeight}vh`;
      enemy_sprite.style.top = `${enemyObj.atkTop}vh`;
      enemy_sprite.style.right = `${enemyObj.atkSide}vw`;
      enemy_sprite.src = `assets/imgs/chars/${enemyObj.nameChar}/Attack.gif`;
      anmDuration = enemyObj.atkSpeed;
    }
  } else {
    if (usingMagic == "m1") {
      if (char == "player") {
        player_sprite.style.zIndex = "2";
        player_sprite.style.width = `${playerObj.sp1Width}vw`;
        player_sprite.style.height = `${playerObj.sp1Height}vh`;
        player_sprite.style.top = `${playerObj.sp1Top}vh`;
        player_sprite.style.left = `${playerObj.sp1Side}vw`;
        player_sprite.src = `assets/imgs/chars/${playerObj.nameChar}/SP1.gif`;
        anmDuration = playerObj.sp1Speed;
      } else {
        enemy_sprite.style.zIndex = "2";
        enemy_sprite.style.width = `${enemyObj.sp1Width}vw`;
        enemy_sprite.style.height = `${enemyObj.sp1Height}vh`;
        enemy_sprite.style.top = `${enemyObj.sp1Top}vh`;
        enemy_sprite.style.right = `${enemyObj.sp1Side}vw`;
        enemy_sprite.src = `assets/imgs/chars/${enemyObj.nameChar}/SP1.gif`;
        anmDuration = enemyObj.sp1Speed;
      }
    } else if (usingMagic == "m2") {
      if (char == "player") {
        player_sprite.style.zIndex = "2";
        player_sprite.style.width = `${playerObj.sp2Width}vw`;
        player_sprite.style.height = `${playerObj.sp2Height}vh`;
        player_sprite.style.top = `${playerObj.sp2Top}vh`;
        player_sprite.style.left = `${playerObj.sp2Side}vw`;
        player_sprite.src = `assets/imgs/chars/${playerObj.nameChar}/SP2.gif`;
        anmDuration = playerObj.sp2Speed;
      } else {
        enemy_sprite.style.zIndex = "2";
        enemy_sprite.style.width = `${enemyObj.sp2Width}vw`;
        enemy_sprite.style.height = `${enemyObj.sp2Height}vh`;
        enemy_sprite.style.top = `${enemyObj.sp2Top}vh`;
        enemy_sprite.style.right = `${enemyObj.sp2Side}vw`;
        enemy_sprite.src = `assets/imgs/chars/${enemyObj.nameChar}/SP2.gif`;
        anmDuration = enemyObj.sp2Speed;
      }
    } else {
      if (char == "player") {
        player_sprite.style.zIndex = "2";
        player_sprite.style.width = `${playerObj.sp3Width}vw`;
        player_sprite.style.height = `${playerObj.sp3Height}vh`;
        player_sprite.style.top = `${playerObj.sp3Top}vh`;
        player_sprite.style.left = `${playerObj.sp3Side}vw`;
        player_sprite.src = `assets/imgs/chars/${playerObj.nameChar}/SP3.gif`;
        anmDuration = playerObj.sp3Speed;
      } else {
        enemy_sprite.style.zIndex = "2";
        enemy_sprite.style.width = `${enemyObj.sp3Width}vw`;
        enemy_sprite.style.height = `${enemyObj.sp3Height}vh`;
        enemy_sprite.style.top = `${enemyObj.sp3Top}vh`;
        enemy_sprite.style.right = `${enemyObj.sp3Side}vw`;
        enemy_sprite.src = `assets/imgs/chars/${enemyObj.nameChar}/SP3.gif`;
        anmDuration = enemyObj.sp3Speed;
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
        player_sprite.style.width = `${playerObj.width}vw`;
        player_sprite.style.height = `${playerObj.height}vh`;
        player_sprite.style.top = `${playerObj.top}vh`;
        player_sprite.style.left = `${playerObj.side}vw`;
        player_sprite.src = `assets/imgs/chars/${playerObj.nameChar}/Idle.gif`;
      } else {
        enemy_sprite.style.zIndex = "0";
        enemy_sprite.style.width = `${enemyObj.width}vw`;
        enemy_sprite.style.height = `${enemyObj.height}vh`;
        enemy_sprite.style.top = `${enemyObj.top}vh`;
        enemy_sprite.style.right = `${enemyObj.side}vw`;
        enemy_sprite.src = `assets/imgs/chars/${enemyObj.nameChar}/Idle.gif`;
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
    player_sprite.style.width = `${playerObj.entryWidth}vw`;
    player_sprite.style.height = `${playerObj.entryHeight}vh`;
    player_sprite.style.top = `${playerObj.entryTop}vh`;
    player_sprite.style.left = `${playerObj.entrySide}vw`;
    player_sprite.src = `assets/imgs/chars/${playerObj.nameChar}/Entry.gif`;
    enemy_sprite.style.width = `${enemyObj.loseWidth}vw`;
    enemy_sprite.style.height = `${enemyObj.loseHeight}vh`;
    enemy_sprite.style.top = `${enemyObj.loseTop}vh`;
    enemy_sprite.style.right = `${enemyObj.loseSide}vw`;
    enemy_sprite.src = `assets/imgs/chars/${enemyObj.nameChar}/Lose.png`;
  } else {
    enemy_sprite.style.width = `${enemyObj.entryWidth}vw`;
    enemy_sprite.style.height = `${enemyObj.entryHeight}vh`;
    enemy_sprite.style.top = `${enemyObj.entryTop}vh`;
    enemy_sprite.style.right = `${enemyObj.entrySide}vw`;
    enemy_sprite.src = `assets/imgs/chars/${enemyObj.nameChar}/Entry.gif`;
    player_sprite.style.width = `${playerObj.loseWidth}vw`;
    player_sprite.style.height = `${playerObj.loseHeight}vh`;
    player_sprite.style.top = `${playerObj.loseTop}vh`;
    player_sprite.style.left = `${playerObj.loseSide}vw`;
    player_sprite.src = `assets/imgs/chars/${playerObj.nameChar}/Lose.png`;
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
      player_sprite.style.width = `${playerObj.width}vw`;
      player_sprite.style.height = `${playerObj.height}vh`;
      player_sprite.style.top = `${playerObj.top}vh`;
      player_sprite.style.left = `${playerObj.side}vw`;
      player_sprite.src = `assets/imgs/chars/${playerObj.nameChar}/Idle.gif`;
      enemy_sprite.style.zIndex = "0";
      enemy_sprite.style.width = `${enemyObj.width}vw`;
      enemy_sprite.style.height = `${enemyObj.height}vh`;
      enemy_sprite.style.top = `${enemyObj.top}vh`;
      enemy_sprite.style.right = `${enemyObj.side}vw`;
      enemy_sprite.src = `assets/imgs/chars/${enemyObj.nameChar}/Idle.gif`;
      // player health
      player_hp.style.width = `100%`;
      playerLifeNow = playerObj.life;
      playerPercentLife = 100;
      // enemy health
      enemy_hp.style.width = `100%`;
      enemyLifeNow = enemyObj.life;
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

// endGame("player");
function endGame(winner) {
  disableButtons();
  console.log("desabling buttons...");
  console.log(`${winner} is the winner`);
  hidden_result.style.zIndex = "10";
  hidden_result.style.opacity = "1";
  if (gamemode == "arcade") {
    title_result.innerHTML = `STAGE ${sessionStorage.STAGECOUNT}`;
    btn_result.setAttribute("onclick", "resultButton('battle')");
    btn_result.innerHTML = "NEXT";
  }
  let imgS = `
  <img
  src="assets/imgs/ArkadeScore.png"
  alt="AC-Icon"
  draggable="false"
  />
  `;
  let imgC = `
  <img
  src="assets/imgs/ArkadeKoins.png"
  alt="AC-Icon"
  draggable="false"
  />
  `;
  if (winner == "enemy") {
    log_result.innerHTML = "DEFEAT";
    log_result.style.color = "#FF0000";
    if (gamemode == "arcade") {
      btn_result.disabled = "true";
      addArk(-800, 40, 1, 0, 1);
      user_arkScore.innerHTML = `${imgS}-800`;
      user_arkCoin.innerHTML = `${imgC}+40`;
    } else if (gamemode == "versus") {
      addArk(0, 0, 1, 0, 1);
      user_arkScore.innerHTML = `${imgS}+0`;
      user_arkCoin.innerHTML = `${imgC}+0`;
    }
  } else {
    log_result.innerHTML = "VICTORY";
    log_result.style.color = "#ed145b";
    if (gamemode == "arcade") {
      let bonus = 9 - arrayArcade.length;
      if (enemyID >= 10) {
        btn_result.disabled = "true";
      }
      let score = 1000 + bonus * 120;
      let coins = 120 + bonus * 12;
      addArk(score, coins, 1, 1, 0);
      user_arkScore.innerHTML = `${imgS}+${score}`;
      user_arkCoin.innerHTML = `${imgC}+${coins}`;
    } else if (gamemode == "versus") {
      addArk(0, 60, 1, 1, 0);
      user_arkScore.innerHTML = `${imgS}+0`;
      user_arkCoin.innerHTML = `${imgC}+60`;
    }
  }
}

function addArk(arkScore, arkCoins, fights, wins, loss) {
  let scoreVar = Number(sessionStorage.PLAYER_ARKSCORE) + arkScore;
  let coinsVar = Number(sessionStorage.PLAYER_ARKCOIN) + arkCoins;
  let fightsVar = Number(sessionStorage.PLAYER_FIGHTS) + fights;
  let winsVar = Number(sessionStorage.PLAYER_WINS) + wins;
  let lossVar = Number(sessionStorage.PLAYER_LOSS) + loss;
  let typeVar = "all";
  fetch(`/users/updatePlayer/${sessionStorage.PLAYER_ID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      scoreServer: scoreVar,
      coinsServer: coinsVar,
      fightsServer: fightsVar,
      winsServer: winsVar,
      lossServer: lossVar,
      typeServer: typeVar,
    }),
  })
    .then(function (response) {
      console.log("response: ", response);
      if (response.ok) {
        sessionStorage.PLAYER_ARKSCORE = scoreVar;
        sessionStorage.PLAYER_ARKCOIN = coinsVar;
        sessionStorage.PLAYER_FIGHTS = fightsVar;
        sessionStorage.PLAYER_WINS = winsVar;
        sessionStorage.PLAYER_LOSS = lossVar;
      } else {
        throw "There was an error changing the Player status!";
      }
    })
    .catch(function (response) {
      console.log(`#ERRO: ${response}`);
    });
}

function resultButton(page) {
  if (page != "battle") {
    window.location = `${page}.html`;
  } else {
    nextEnemy();
  }
}

let arrayArcade = [];
if (gamemode == "arcade") {
  arrayArcade = JSON.parse(sessionStorage.ARCADE);
}
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
    .then(function (response) {
      console.log("IN THEN OF nextEnemy()!");
      if (response.ok) {
        console.log(response);
        response.json().then((json) => {
          sessionStorage.ENEMY_CHAR = JSON.stringify(json);
          sessionStorage.STAGECOUNT++;
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
