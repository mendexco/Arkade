/* test */
sessionStorage.PLAYER_NAME = "Sagat";
sessionStorage.PLAYER_MAXWIDTH_IDLE = 1920;
sessionStorage.PLAYER_MAXWIDTH_WIN = 7040;
sessionStorage.PLAYER_WIDTH = 320;
sessionStorage.PLAYER_HEIGHT = 500;
sessionStorage.PLAYER_SPEED_IDLE = 80;
sessionStorage.PLAYER_SPEED_WIN = 100;
sessionStorage.PLAYER_LIFE = 100;
sessionStorage.PLAYER_ATTACK = 20;
sessionStorage.PLAYER_NAME_M1 = "";
sessionStorage.PLAYER_DMG_M1 = 15;
sessionStorage.PLAYER_NAME_M2 = "";
sessionStorage.PLAYER_DMG_M2 = 20;
sessionStorage.PLAYER_NAME_M3 = "";
sessionStorage.PLAYER_DMG_M3 = 30;
sessionStorage.PLAYER_PR = 30;
sessionStorage.PLAYER_MR = 20;
sessionStorage.PLAYER_SPECIAL = 3600;

sessionStorage.ENEMY_NAME = "Ken";
sessionStorage.ENEMY_MAXWIDTH_IDLE = 2730;
sessionStorage.ENEMY_MAXWIDTH_WIN = 1092;
sessionStorage.ENEMY_WIDTH = 273;
sessionStorage.ENEMY_HEIGHT = 388;
sessionStorage.ENEMY_SPEED_IDLE = 70;
sessionStorage.ENEMY_SPEED_WIN = 200;
sessionStorage.ENEMY_LIFE = 95;
sessionStorage.ENEMY_ATTACK = 22;
sessionStorage.ENEMY_NAME_M1 = "";
sessionStorage.ENEMY_DMG_M1 = 15;
sessionStorage.ENEMY_NAME_M2 = "";
sessionStorage.ENEMY_DMG_M2 = 20;
sessionStorage.ENEMY_NAME_M3 = "";
sessionStorage.ENEMY_DMG_M3 = 30;
sessionStorage.ENEMY_PR = 40;
sessionStorage.ENEMY_MR = 15;
sessionStorage.ENEMY_SPECIAL = 1600;

var animIDPLAYER; // necessary var to stop player's animation
var animIDENEMY; // necessary var to stop enemy's animation
var playerName = sessionStorage.PLAYER_NAME;
var playerMaxWidth = sessionStorage.PLAYER_MAXWIDTH_IDLE;
var playerWidth = sessionStorage.PLAYER_WIDTH;
var playerHeight = sessionStorage.PLAYER_HEIGHT;
var playerSpeed = sessionStorage.PLAYER_SPEED_IDLE;
player_sprite.style.backgroundImage = `url(assets/imgs/chars/Sagat.gif)`;
player_sprite.style.width = `${playerWidth}px`;
player_sprite.style.height = `${playerHeight}px`;
player_group.style.height = `${playerHeight}px`;
// animatePlayerScript(playerMaxWidth, playerWidth, playerSpeed);
var enemyName = sessionStorage.ENEMY_NAME;
var enemyMaxWidth = sessionStorage.ENEMY_MAXWIDTH_IDLE;
var enemyWidth = sessionStorage.ENEMY_WIDTH;
var enemyHeight = sessionStorage.ENEMY_HEIGHT;
var enemySpeed = sessionStorage.ENEMY_SPEED_IDLE;
// enemy_sprite.style.backgroundImage = `url(assets/imgs/chars/${enemyName}Idle.png)`;
enemy_sprite.style.width = `${enemyWidth}px`;
enemy_sprite.style.height = `${enemyHeight}px`;
enemy_group.style.height = `${enemyHeight}px`;
// animateEnemyScript(enemyMaxWidth, enemyWidth, enemySpeed);

function animatePlayerScript(maxWidth, minWidth, speed) {
  maxWidth = Number(maxWidth);
  minWidth = Number(minWidth);
  speed = Number(speed);
  var position = minWidth; //start position for the image slicer
  const interval = speed; // interval for the setInterval(), frame by frame
  const diff = minWidth; //diff as a variable for position offset
  animIDPLAYER = setInterval(() => {
    var pageZoom = sessionStorage.PAGE_ZOOM / 100;
    player_group.style.zoom = pageZoom;
    player_sprite.style.backgroundPosition = `-${position}px 0px`;
    
    // increment position by frame width each time
    if (position < maxWidth) {
      position = position + diff;
    }
    // reset the initial frame, once position exceeds limit width
    else {
      position = minWidth;
    }
  }, interval);
}
function animateEnemyScript(maxWidth, minWidth, speed) {
  maxWidth = Number(maxWidth);
  minWidth = Number(minWidth);
  speed = Number(speed);
  var position = minWidth; //start position for the image slicer
  const interval = speed; // interval for the setInterval(), frame by frame
  const diff = minWidth; //diff as a variable for position offset
  animIDENEMY = setInterval(() => {
    var pageZoom = sessionStorage.PAGE_ZOOM / 100;
    enemy_group.style.zoom = pageZoom;
    enemy_sprite.style.backgroundPosition = `-${position}px 0px`;
    enemy_sprite.style.transform = `scale(-1,1)`;

    // increment position by frame width each time
    if (position < maxWidth) {
      position = position + diff;
    }
    // reset the initial frame, once position exceeds limit width
    else {
      position = minWidth;
    }
  }, interval);
}

function stopAnimate() {
  clearInterval(animID);
}

function winnerAnimation(winner) {
  clearInterval(animIDPLAYER);
  clearInterval(animIDENEMY);
  setTimeout(function () {
    if (winner == "player") {
      var playerSpeedWin = sessionStorage.PLAYER_SPEED_WIN;
      playerMaxWidth = sessionStorage.PLAYER_MAXWIDTH_WIN;
      player_sprite.style.backgroundImage = `url(assets/imgs/chars/${playerName}Win.png)`;
      animatePlayerScript(playerMaxWidth, playerWidth, playerSpeedWin);
    } else {
      enemy_sprite.style.backgroundImage = `url(assets/imgs/chars/${enemyName}Win.png)`;
      enemyMaxWidth = sessionStorage.ENEMY_MAXWIDTH_WIN;
      enemySpeed = sessionStorage.ENEMY_SPEED_WIN;
      animateEnemyScript(enemyMaxWidth, enemyWidth, enemySpeed);
    }
  }, 1);
}

/*
4X:
max-width: 3120
width: 312
height: 444

3.5x:
max-width: 2730
width: 273
height: 388.5

3x:
max-width: 2340
width: 234
height: 333
*/
