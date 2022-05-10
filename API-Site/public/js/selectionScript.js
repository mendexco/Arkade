/* LOAD CHARACTERS */
loadChars("Ryu");
function loadChars() {
  fetch(`/chars/listChars/`)
    .then(function (resposta) {
      if (resposta.ok) {
        if (resposta.status == 204) {
          var divChars = document.getElementById("div_characters");
          var msg = document.createElement("span");
          msg.innerHTML = "-";
          msg.value = "0";
          divChars.appendChild(msg);
          throw "no characters created";
        }

        resposta.json().then(function (resposta) {
          console.log("Chars created: ", JSON.stringify(resposta));

          var leftGroup = document.getElementById("left_group");
          var rightGroup = document.getElementById("right_group");
          leftGroup.innerHTML = "";
          rightGroup.innerHTML = "";
          for (let i = 0; i < resposta.length; i++) {
            var character = resposta[i];

            if (i <= 4) {
              // COMPLEX
              // creating elements
              var charCard = document.createElement("button");

              // setting id's
              charCard.id = `btn_${character.nameChar}`;

              // put values in innerHTML
              charCard.style.backgroundImage = `url(../assets/imgs/chars/${character.nameChar}/PORTRAIT.png)`;

              // appending a class
              charCard.className = "btn-char unselected";

              // setting attributes
              charCard.setAttribute(
                "onmouseenter",
                `hoverCharacter("${character.nameChar}", "enter")`
              );
              charCard.setAttribute(
                "onmouseleave",
                `hoverCharacter("${character.nameChar}", "leave")`
              );
              charCard.setAttribute(
                "onclick",
                `setCharacter(${character.idChar}, "${character.nameChar}")`
              );
              /* keyboard settings */
              charCard.setAttribute("tabindex", character.idChar);
              charCard.setAttribute(
                "onfocus",
                `hoverCharacter("${character.nameChar}", "enter")`
              );
              charCard.setAttribute(
                "onblur",
                `hoverCharacter("${character.nameChar}", "leave")`
              );

              if (i == 4) {
                charCard.style.marginRight = "-2.8vw";
              }
              // appending childs
              leftGroup.appendChild(charCard);
            } else {
              // COMPLEX
              // creating elements
              var charCard = document.createElement("button");

              // setting id's
              charCard.id = `btn_${character.nameChar}`;

              // put values in innerHTML
              charCard.style.backgroundImage = `url(../assets/imgs/chars/${character.nameChar}/PORTRAIT.png)`;

              // appending a class
              charCard.className = "btn-char unselected";

              // setting attributes
              charCard.setAttribute(
                "onmouseenter",
                `hoverCharacter("${character.nameChar}", "enter")`
              );
              charCard.setAttribute(
                "onmouseleave",
                `hoverCharacter("${character.nameChar}", "leave")`
              );
              charCard.setAttribute(
                "onclick",
                `setCharacter(${character.idChar}, "${character.nameChar}")`
              );
              /* keyboard settings */
              charCard.setAttribute("tabindex", character.idChar);
              charCard.setAttribute(
                "onfocus",
                `hoverCharacter("${character.nameChar}", "enter")`
              );
              charCard.setAttribute(
                "onblur",
                `hoverCharacter("${character.nameChar}", "leave")`
              );

              if (i == 8) {
                charCard.style.marginLeft = "-2.8vw";
              }
              // appending childs
              rightGroup.appendChild(charCard);
            }
          }

          // finalizarAguardar();
        });
      } else {
        throw "There's an error in the API!";
      }
    })
    .catch(function (resposta) {
      console.error(resposta);
      // console.log("");
      // finalizarAguardar();
    });
}

var playerChoose = false;
var enemyChoose = false;
function hoverCharacter(nameChar, status) {
  if (enemyChoose == false) {
    var cardSelected = document.getElementById(`btn_${nameChar}`);
    if (playerChoose == false) {
      if (status == "enter") {
        cardSelected.classList.add("chosen-char");
        img_player.src = `assets/imgs/chars/selection/${nameChar}FULL.png`;
        player_name.innerHTML = nameChar.toUpperCase();
      } else {
        cardSelected.classList.remove("chosen-char");
      }
    } else {
      if (status == "enter") {
        cardSelected.classList.add("chosen-char");
        img_enemy.src = `assets/imgs/chars/selection/${nameChar}FULL.png`;
        enemy_name.innerHTML = nameChar.toUpperCase();
      } else {
        cardSelected.classList.remove("chosen-char");
      }
    }
  }
}

var playerID = 0;
var enemyID = 0;
function setCharacter(idChar, nameChar) {
  var cardSelected = document.getElementById(`btn_${nameChar}`);
  if (playerChoose == false) {
    playerChoose = true;
    cardSelected.classList.remove("unselected");
    cardSelected.style.filter = "saturate(1)";
    cardSelected.style.backgroundColor = "#ed145b";
    playerID = idChar;
    battleStorage(playerID, "player");
  } else {
    cardSelected.classList.remove("unselected");
    cardSelected.style.filter = "saturate(1)";
    cardSelected.style.backgroundColor = "#ed145b";
    enemyID = idChar;
    battleStorage(enemyID, "enemy");

    var disabledButtons = document.getElementsByClassName("unselected");
    var buttonCount = 0;
    while (buttonCount < disabledButtons.length) {
      disabledButtons[buttonCount].disabled = true;
      buttonCount++;
    }

    enemyChoose = true;
  }
}

function battleStorage(idChar, charSelected) {
  var idVar = idChar;

  console.log("ID CHARACTER: ", idVar);

  fetch("/usuarios/autenticar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idServer: idVar,
    }),
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN DO entrar()!");
      if (resposta.ok) {
        console.log(resposta);

        resposta.json().then((json) => {
          console.log(json);
          console.log(JSON.stringify(json));

          if (charSelected == "player") {
            // sessionStorage.PLAYER_MAXWIDTH_IDLE = json.maxWidthIdle;
            // sessionStorage.PLAYER_MAXWIDTH_WIN = json.maxWidthWin;
            // sessionStorage.PLAYER_SPEED_IDLE = json.speedIdle;
            // sessionStorage.PLAYER_SPEED_WIN = json.speedWin;
            sessionStorage.PLAYER_NAME = json.nameChar;
            sessionStorage.PLAYER_WIDTH = json.width;
            sessionStorage.PLAYER_HEIGHT = json.height;
            sessionStorage.PLAYER_LIFE = json.life;
            sessionStorage.PLAYER_ATTACK = json.attack;
            sessionStorage.PLAYER_NAME_M1 = json.magicName1;
            sessionStorage.PLAYER_DMG_M1 = json.magicDmg1;
            sessionStorage.PLAYER_NAME_M2 = json.magicName2;
            sessionStorage.PLAYER_DMG_M2 = json.magicDmg2;
            sessionStorage.PLAYER_NAME_M3 = json.magicName3;
            sessionStorage.PLAYER_DMG_M3 = json.magicDmg3;
            sessionStorage.PLAYER_PR = json.physical_resistance;
            sessionStorage.PLAYER_MR = json.magical_resistance;
            sessionStorage.PLAYER_SPECIAL = json.special;
          } else {
            // sessionStorage.ENEMY_MAXWIDTH_IDLE = json.maxWidthIdle;
            // sessionStorage.ENEMY_MAXWIDTH_WIN = json.maxWidthWin;
            // sessionStorage.ENEMY_SPEED_IDLE = json.speedIdle;
            // sessionStorage.ENEMY_SPEED_WIN = json.speedWin;
            sessionStorage.ENEMY_NAME = json.nameChar;
            sessionStorage.ENEMY_WIDTH = json.width;
            sessionStorage.ENEMY_HEIGHT = json.height;
            sessionStorage.ENEMY_LIFE = json.life;
            sessionStorage.ENEMY_ATTACK = json.attack;
            sessionStorage.ENEMY_NAME_M1 = json.magicName1;
            sessionStorage.ENEMY_DMG_M1 = json.magicDmg1;
            sessionStorage.ENEMY_NAME_M2 = json.magicName2;
            sessionStorage.ENEMY_DMG_M2 = json.magicDmg2;
            sessionStorage.ENEMY_NAME_M3 = json.magicName3;
            sessionStorage.ENEMY_DMG_M3 = json.magicDmg3;
            sessionStorage.ENEMY_PR = json.physical_resistance;
            sessionStorage.ENEMY_MR = json.magical_resistance;
            sessionStorage.ENEMY_SPECIAL = json.special;
            window.location = "battle.html";
          }

          // setTimeout(function () {
          //   window.location = "./dashboard/cards.html";
          // }, 1000); // apenas para exibir o loading
        });
      } else {
        console.log("Houve um erro ao tentar realizar o login!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });

  return false;
}

function finalizarAguardar(texto) {
  var divLoading = document.getElementById("div_loading");
  divLoading.style.display = "none";
  //   var divErrosLogin = document.getElementById("div_erros_login");
  //   if (texto) {
  //     divErrosLogin.innerHTML = texto;
  //   }
}
