/* LOAD CHARACTERS */
var randomizeLength = 9;
var charsArray = [];
var stagesArray = [];
var stageName = [];

bgAudio();
select_music.volume = 0.05;
function bgAudio() {
  var randomSong = Math.floor(Math.random() * 4) + 1;
  select_music.src = `assets/audios/musics/SelectionTheme${randomSong}.mp3`;
  select_music.play();
  select_music.onended = function () {
    bgAudio();
  };
}

loadStages();
function loadStages() {
  div_characters.style.display = "none";
  div_stages.style.display = "flex";
  stage_name.style.width = "40%";
  back_stage.style.backgroundImage = `url(../assets/imgs/chars/selection/SelectStage.gif)`;
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
            randomizeLength = resposta.length;
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
            randomizeLength = resposta.length;
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
    console.log(cardSelected);
    back_stage.style.backgroundImage = `url(../assets/imgs/chars/selection/SelectChar.gif)`;
    back_stage.style.filter = `blur(0vw) brightness(1)`;
    sessionStorage.STAGE = nameChar;
    player_name.innerHTML = "";
    loadChars();
  } else {
    var cardSelected = document.getElementById(`btn_${nameChar}`);
    console.log(cardSelected);
    if (playerChoose == false) {
      playerChoose = true;
      cardSelected.classList.remove("unselected");
      cardSelected.style.filter = "saturate(1)";
      cardSelected.style.backgroundColor = "#ed145b";
      playerID = idChar;
      img_player.src = `assets/imgs/chars/selection/${nameChar}FULL.png`;
      console.log(nameChar);
      battleStorage(playerID, "player");
    } else {
      cardSelected.classList.remove("unselected");
      cardSelected.style.filter = "saturate(1)";
      cardSelected.style.backgroundColor = "#ed145b";
      enemyID = idChar;
      img_enemy.src = `assets/imgs/chars/selection/${nameChar}FULL.png`;
      console.log(nameChar);
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

sessionStorage.PLAYER_CHAR = "";
sessionStorage.ENEMY_CHAR = "";
// var player;
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
          console.log(sessionStorage.CHARS);
          if (charSelected == "player") {
            sessionStorage.PLAYER_CHAR = JSON.stringify(json);
          } else {
            sessionStorage.ENEMY_CHAR = JSON.stringify(json);
            window.location = "battle.html";
          }
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
  var idChar = Math.floor(Math.random() * randomizeLength) + 1;
  if (div_stages.style.display == "flex") {
    setCard("stage", idChar, saveCard);
  } else {
    idChar = Math.floor(Math.random() * randomizeLength) + 1;
    setCard("character", idChar, saveCard);
  }
}

var saveCard = 0;
function randomizePreview(status) {
  var idChar = Math.floor(Math.random() * randomizeLength) + 1;
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
