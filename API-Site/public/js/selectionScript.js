/* LOAD CHARACTERS */
sessionStorage.PLAYER_ID = 2;
var randomizeLength = 9;
var charsArray = [];
var stagesArray = [];
var stageName = [];

bgAudio();
function bgAudio() {
  var randomSong = Math.floor(Math.random() * 4) + 1;
  select_music.src = `assets/audios/musics/SelectionTheme${randomSong}.mp3`;
}

loadStages();
function loadStages() {
  div_characters.style.display = "none";
  div_stages.style.display = "flex";
  stage_name.style.width = "40%";
  fetch(`/chars/listStages/${sessionStorage.PLAYER_ID}`)
    .then(function (resposta) {
      if (resposta.ok) {
        if (resposta.status == 204) {
          var divChars = document.getElementById("div_stages");
          var msg = document.createElement("span");
          msg.innerHTML = "-";
          msg.value = "0";
          divChars.appendChild(msg);
          throw "no stages created";
        }

        resposta.json().then(function (resposta) {
          console.log("Stages created: ", JSON.stringify(resposta));
          var stageCounter = 0;
          while (stageCounter < resposta.length) {
            randomizeLength = resposta.length + 1;
            var stage = resposta[stageCounter];
            stageCounter++;
            stagesArray.push(stage.nameChar);
            stageName.push(stage.nameStage);

            var stageCard = document.getElementById(`stage_${stage.nameChar}`);
            // setting id's
            stageCard.id = `stage_${stage.nameChar}`;
            // appending a class
            stageCard.className = "stage-char acquired unselected";

            // setting attributes
            stageCard.setAttribute(
              "onmouseenter",
              `hoverCard("enter", "stage", "${stage.nameChar}", "${stage.nameStage}")`
            );
            stageCard.setAttribute(
              "onmouseleave",
              `hoverCard("leave", "stage", "${stage.nameChar}")`
            );
            stageCard.setAttribute(
              "onclick",
              `setCard("stage", ${stage.idChar}, "${stage.nameChar}")`
            );
            /* keyboard settings */
            stageCard.setAttribute("tabindex", stageCounter);
            stageCard.setAttribute(
              "onfocus",
              `hoverCard("enter", "stage", "${stage.nameChar}", "${stage.nameStage}")`
            );
            stageCard.setAttribute(
              "onblur",
              `hoverCard("leave", "stage", "${stage.nameChar}")`
            );
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

// loadChars();
function loadChars() {
  div_characters.style.display = "flex";
  div_stages.style.display = "none";
  stage_name.style =
    "width: 20%; font-size: 2vw; text-align: center; animation: 0; text-shadow: 0.1vw 0.2vh #ed145b; margin-top: -46vh; max-width: 13vw;";
  fetch(`/chars/listChars/${sessionStorage.PLAYER_ID}`)
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
          var charsCounter = 0;
          while (charsCounter < resposta.length) {
            randomizeLength = resposta.length + 1;
            var character = resposta[charsCounter];
            charsCounter++;
            charsArray.push(character.nameChar);

            var charCard = document.getElementById(`btn_${character.nameChar}`);
            // setting id's
            charCard.id = `btn_${character.nameChar}`;
            // appending a class
            charCard.className = "btn-char acquired unselected";

            // setting attributes
            charCard.setAttribute(
              "onmouseenter",
              `hoverCard("enter", "character", "${character.nameChar}", null)`
            );
            charCard.setAttribute(
              "onmouseleave",
              `hoverCard("leave", "character", "${character.nameChar}")`
            );
            charCard.setAttribute(
              "onclick",
              `setCard("character", ${character.idChar}, "${character.nameChar}")`
            );
            /* keyboard settings */
            charCard.setAttribute("tabindex", charsCounter);
            charCard.setAttribute(
              "onfocus",
              `hoverCard("enter", "character", "${character.nameChar}", null)`
            );
            charCard.setAttribute(
              "onblur",
              `hoverCard("leave", "character", "${character.nameChar}")`
            );

            // COMPLEX
            // creating elements
            // if (leftChars < 5) {
            //   var charCard = document.createElement("button");

            // // setting id's
            // charCard.id = `btn_${character.nameChar}`;

            //   // put values in innerHTML
            //   charCard.style.backgroundImage = `url(../assets/imgs/chars/${character.nameChar}/PORTRAIT.png)`;

            // // appending a class
            // charCard.className = "btn-char unselected";

            // // setting attributes
            // charCard.setAttribute(
            //   "onmouseenter",
            //   `hoverCharacter("${character.nameChar}", "enter")`
            // );
            // charCard.setAttribute(
            //   "onmouseleave",
            //   `hoverCharacter("${character.nameChar}", "leave")`
            // );
            // charCard.setAttribute(
            //   "onclick",
            //   `setCharacter(${character.idChar}, "${character.nameChar}")`
            // );
            // /* keyboard settings */
            // charCard.setAttribute("tabindex", character.idChar);
            // charCard.setAttribute(
            //   "onfocus",
            //   `hoverCharacter("${character.nameChar}", "enter")`
            // );
            // charCard.setAttribute(
            //   "onblur",
            //   `hoverCharacter("${character.nameChar}", "leave")`
            // );

            //   if (leftChars == 4) {
            //     charCard.style.marginRight = "-2.8vw";
            //   }
            //   leftChars++;
            //   // appending childs
            //   leftGroup.appendChild(charCard);
            // } else {
            //   // COMPLEX
            //   // creating elements
            //   var charCard = document.createElement("button");

            //   // setting id's
            //   charCard.id = `btn_${character.nameChar}`;

            //   // put values in innerHTML
            //   charCard.style.backgroundImage = `url(../assets/imgs/chars/${character.nameChar}/PORTRAIT.png)`;

            //   // appending a class
            //   charCard.className = "btn-char unselected";

            //     // setting attributes
            //     charCard.setAttribute(
            //       "onmouseenter",
            //       `hoverCharacter("${character.nameChar}", "enter")`
            //     );
            //     charCard.setAttribute(
            //       "onmouseleave",
            //       `hoverCharacter("${character.nameChar}", "leave")`
            //     );
            //     charCard.setAttribute(
            //       "onclick",
            //       `setCharacter(${character.idChar}, "${character.nameChar}")`
            //     );
            //     /* keyboard settings */
            //     charCard.setAttribute("tabindex", character.idChar);
            //     charCard.setAttribute(
            //       "onfocus",
            //       `hoverCharacter("${character.nameChar}", "enter")`
            //     );
            //     charCard.setAttribute(
            //       "onblur",
            //       `hoverCharacter("${character.nameChar}", "leave")`
            //     );

            //   if (rightChars == 3) {
            //     charCard.style.marginLeft = "-2.8vw";
            //   }
            //   rightChars++;
            //   // appending childs
            //   rightGroup.appendChild(charCard);
            // }
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
function hoverCard(status, btnType, nameChar, nameStage) {
  if (btnType == "stage") {
    var cardSelected = document.getElementById(`stage_${nameChar}`);
    if (status == "enter") {
      console.log(cardSelected);
      cardSelected.classList.add("chosen-stage");
      back_stage.style.backgroundImage = `url(../assets/imgs/stages/stage_${nameChar}.gif)`;
      stage_name.innerHTML = nameStage.toUpperCase();
    } else {
      cardSelected.classList.remove("chosen-stage");
    }
  } else {
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
}

var playerID = 0;
var enemyID = 0;
function setCard(btnType, idChar, nameChar) {
  if (btnType == "stage") {
    var cardSelected = document.getElementById(`stage_${nameChar}`);
    back_stage.style.backgroundImage = `url(../assets/imgs/stages/stage_${nameChar}.gif)`;
    back_stage.style.filter = `blur(0.5vw) brightness(0.4)`;
    sessionStorage.STAGE = nameChar;
    player_name.innerHTML = "";

    loadChars();
  } else {
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
}

function battleStorage(idChar, charSelected) {
  var idVar = idChar;

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
      console.log("ESTOU NO THEN DO entrar()!");
      if (resposta.ok) {
        console.log(resposta);

        resposta.json().then((json) => {
          console.log(json);
          console.log(JSON.stringify(json));

          if (charSelected == "player") {
            // CHARACTERS
            sessionStorage.PLAYER_NAME = json.nameChar;
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
            // BASIC
            sessionStorage.PLAYER_WIDTH = json.width;
            sessionStorage.PLAYER_HEIGHT = json.height;
            sessionStorage.PLAYER_IDLE_TOP = json.top;
            sessionStorage.PLAYER_IDLE_SIDE = json.side;
            sessionStorage.PLAYER_ENTRY_WIDTH = json.entryWidth;
            sessionStorage.PLAYER_ENTRY_HEIGHT = json.entryHeight;
            sessionStorage.PLAYER_ENTRY_TOP = json.entryTop;
            sessionStorage.PLAYER_ENTRY_SIDE = json.entrySide;
            sessionStorage.PLAYER_DEFEND_WIDTH = json.defendWidth;
            sessionStorage.PLAYER_DEFEND_HEIGHT = json.defendHeight;
            sessionStorage.PLAYER_DEFEND_TOP = json.defendTop;
            sessionStorage.PLAYER_DEFEND_SIDE = json.defendSide;            
            sessionStorage.PLAYER_LOSE_WIDTH = json.loseWidth;
            sessionStorage.PLAYER_LOSE_HEIGHT = json.loseHeight;
            sessionStorage.PLAYER_LOSE_TOP = json.loseTop;
            sessionStorage.PLAYER_LOSE_SIDE = json.loseSide;
            // ADVANCED
            sessionStorage.PLAYER_ATK_SPEED = json.atkSpeed;
            sessionStorage.PLAYER_ATK_WIDTH = json.atkWidth;
            sessionStorage.PLAYER_ATK_HEIGHT = json.atkHeight;
            sessionStorage.PLAYER_SP1_SPEED = json.sp1Speed;
            sessionStorage.PLAYER_SP1_WIDTH = json.sp1Width;
            sessionStorage.PLAYER_SP1_HEIGHT = json.sp1Height;
            sessionStorage.PLAYER_SP2_SPEED = json.sp2Speed;
            sessionStorage.PLAYER_SP2_WIDTH = json.sp2Width;
            sessionStorage.PLAYER_SP2_HEIGHT = json.sp2Height;
            sessionStorage.PLAYER_SP3_SPEED = json.sp3Speed;
            sessionStorage.PLAYER_SP3_WIDTH = json.sp3Width;
            sessionStorage.PLAYER_SP3_HEIGHT = json.sp3Height;
            sessionStorage.PLAYER_ATK_TOP = json.atkTop;
            sessionStorage.PLAYER_ATK_SIDE = json.atkSide;
            sessionStorage.PLAYER_SP1_TOP = json.sp1Top;
            sessionStorage.PLAYER_SP1_SIDE = json.sp1Side;
            sessionStorage.PLAYER_SP2_TOP = json.sp2Top;
            sessionStorage.PLAYER_SP2_SIDE = json.sp2Side;
            sessionStorage.PLAYER_SP3_TOP = json.sp3Top;
            sessionStorage.PLAYER_SP3_SIDE = json.sp3Side;
          } else {
            // CHARACTERS
            sessionStorage.ENEMY_NAME = json.nameChar;
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
            // BASIC
            sessionStorage.ENEMY_WIDTH = json.width;
            sessionStorage.ENEMY_HEIGHT = json.height;
            sessionStorage.ENEMY_IDLE_TOP = json.top;
            sessionStorage.ENEMY_IDLE_SIDE = json.side;
            sessionStorage.ENEMY_ENTRY_WIDTH = json.entryWidth;
            sessionStorage.ENEMY_ENTRY_HEIGHT = json.entryHeight;
            sessionStorage.ENEMY_ENTRY_TOP = json.entryTop;
            sessionStorage.ENEMY_ENTRY_SIDE = json.entrySide;
            sessionStorage.ENEMY_DEFEND_WIDTH = json.defendWidth;
            sessionStorage.ENEMY_DEFEND_HEIGHT = json.defendHeight;
            sessionStorage.ENEMY_DEFEND_TOP = json.defendTop;
            sessionStorage.ENEMY_DEFEND_SIDE = json.defendSide;            
            sessionStorage.ENEMY_LOSE_WIDTH = json.loseWidth;
            sessionStorage.ENEMY_LOSE_HEIGHT = json.loseHeight;
            sessionStorage.ENEMY_LOSE_TOP = json.loseTop;
            sessionStorage.ENEMY_LOSE_SIDE = json.loseSide;
            // ADVANCED
            sessionStorage.ENEMY_ATK_SPEED = json.atkSpeed;
            sessionStorage.ENEMY_ATK_WIDTH = json.atkWidth;
            sessionStorage.ENEMY_ATK_HEIGHT = json.atkHeight;
            sessionStorage.ENEMY_SP1_SPEED = json.sp1Speed;
            sessionStorage.ENEMY_SP1_WIDTH = json.sp1Width;
            sessionStorage.ENEMY_SP1_HEIGHT = json.sp1Height;
            sessionStorage.ENEMY_SP2_SPEED = json.sp2Speed;
            sessionStorage.ENEMY_SP2_WIDTH = json.sp2Width;
            sessionStorage.ENEMY_SP2_HEIGHT = json.sp2Height;
            sessionStorage.ENEMY_SP3_SPEED = json.sp3Speed;
            sessionStorage.ENEMY_SP3_WIDTH = json.sp3Width;
            sessionStorage.ENEMY_SP3_HEIGHT = json.sp3Height;
            sessionStorage.ENEMY_ATK_TOP = json.atkTop;
            sessionStorage.ENEMY_ATK_SIDE = json.atkSide;
            sessionStorage.ENEMY_SP1_TOP = json.sp1Top;
            sessionStorage.ENEMY_SP1_SIDE = json.sp1Side;
            sessionStorage.ENEMY_SP2_TOP = json.sp2Top;
            sessionStorage.ENEMY_SP2_SIDE = json.sp2Side;
            sessionStorage.ENEMY_SP3_TOP = json.sp3Top;
            sessionStorage.ENEMY_SP3_SIDE = json.sp3Side;
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

function randomizeSet() {
  var idChar = Math.floor(Math.random() * randomizeLength);
  if (div_stages.style.display == "flex") {
    setCard("stage", idChar + 1, saveCard);
  }else {
    idChar = Math.floor(Math.random() * 2);
    setCard("character", idChar + 1, saveCard);
  }
}

var saveCard = 0;
function randomizePreview(status) {
  var idChar = Math.floor(Math.random() * randomizeLength);
  if (div_stages.style.display == "flex") {
    if (status == "enter") {
      hoverCard(status, "stage", stagesArray[idChar], stageName[idChar]);
      saveCard = stagesArray[idChar];
    } else {
      hoverCard(status, "stage", saveCard, stagesArray[idChar]);      
    }
  }
}

function finalizarAguardar(texto) {
  var divLoading = document.getElementById("div_loading");
  divLoading.style.display = "none";
  //   var divErrosLogin = document.getElementById("div_erros_login");
  //   if (texto) {
  //     divErrosLogin.innerHTML = texto;
  //   }
}
