// changeDisplay();
window.onload = function (event) {
  setTimeout(function () {
    loadingFade("fade-out", 1);
  }, 500);
};

function loadingFade(fadeType, durationTime) {
  if (fadeType == "fade-in") {
    div_loading.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: durationTime * 1000,
      easing: "ease-in",
      direction: "normal",
    });
  } else {
    div_loading.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: durationTime * 1000,
      easing: "ease-in",
      direction: "reverse",
    });
  }
  changeDisplay("div_loading", durationTime, "flex");
}

function changeDisplay(id, seconds, displayType) {
  if (id == null) {
    id = "div_loading";
    seconds = 0.1;
    displayType = "flex";
  }
  seconds *= 1000;
  setTimeout(function () {
    var idElement = document.getElementById(id);
    if (idElement.style.display == "none") {
      idElement.style.display = displayType;
    } else {
      idElement.style.display = "none";
    }
  }, seconds);
}

// loading function
function loadingIcon(idElement, status) {
  let imgLogo = document.querySelector(`#${idElement}`);
  if (status == "gif") {
    imgLogo.src = "";
    imgLogo.src = "./assets/loading_logo.gif";
  } else {
    imgLogo.src = "";
    imgLogo.src = "./assets/imgs/ark-logoWHITE.png";
  }
}

// clear sessionStorage
function clearSession() {
  console.log("Cleaning session...");
  sessionStorage.clear();
}

function logoutAccount() {
  console.log("Cleaning session...");
  sessionStorage.clear();
  window.location = "index.html";
}

function sideMenu(status) {
  const menu = document.querySelector("#side_menu");
  const container = document.querySelector("#container_sec");
  const btnClose = document.querySelector("#btn_closeMenu");
  if (status == "start") {
    user_name.innerHTML = sessionStorage.PLAYER_USERNAME;
    user_arkScore.innerHTML += sessionStorage.PLAYER_ARKSCORE;
    user_arkCoin.innerHTML += sessionStorage.PLAYER_ARKCOIN;
  } else if (status == "show") {
    menu.style.left = "0vh";
    btnClose.style.marginRight = "0%";
    btnClose.style.backgroundImage = "url(../assets/imgs/close.png)";
    btnClose.style.backgroundSize = "40% 40%";
    btnClose.setAttribute("onclick", "sideMenu('hide')");
    if (typeof container_sec != "undefined") {
      container.style.left = "16.5vw";
    }
  } else if (status == "hide") {
    menu.style.left = "-25vh";
    btnClose.style.marginRight = "-24%";
    btnClose.style.backgroundImage = "url(../assets/imgs/menu.png)";
    btnClose.style.backgroundSize = "60% 60%";
    btnClose.setAttribute("onclick", "sideMenu('show')");
    if (typeof container_sec != "undefined") {
      container.style.left = "10vw";
    }
  }
}

function loadRank() {
  fetch(`/usuarios/rankList`)
    .then(function (resposta) {
      if (resposta.ok) {
        if (resposta.status == 204) {
          alert("no users registered");
          throw "no users registered";
        }
        resposta.json().then(function (resposta) {
          console.log("Users in rank: ", JSON.stringify(resposta));
          const tbody = document.querySelector("#table_body");
          // tbody.innerHTML = "";
          for (let i = 0; i < resposta.length; i++) {
            let user = resposta[i];

            let row = document.createElement("tr");
            let colPOS = document.createElement("td");
            let colIMG = document.createElement("td");
            let colNAME = document.createElement("td");
            let colSCORE = document.createElement("td");

            colPOS.innerHTML = `${i + 1}º`;
            colIMG.innerHTML = `<img src="assets/imgs/chars/Ryu/SplashMIN.png" class="user-photo" />`;
            colNAME.innerHTML = `${user.namePlayer}`;
            colSCORE.innerHTML = `${user.arkScore}`;

            row.className = "tr-ark";
            colPOS.className = "td-ark";
            colPOS.style = "text-shadow: 0 0 1vh #FFF";
            colIMG.className = "td-ark";
            colIMG.style = "text-align: right; width: 0";
            colNAME.className = "td-ark td-name";
            colSCORE.className = "td-ark";

            if (i % 2 == 0) {
              row.style.backgroundColor = "#1d1c1c";
            }            

            row.appendChild(colPOS);
            row.appendChild(colIMG);
            row.appendChild(colNAME);
            row.appendChild(colSCORE);
            tbody.appendChild(row);

            if (i == 0) {
              first_name.innerHTML = `${user.namePlayer}`;
              first_arkScore.innerHTML = `<img src="assets/imgs/ArkadeScore.png" alt="AS-Icon" draggable="false">${user.arkScore}`;
              colPOS.style = "color: #ed145b; text-shadow: 0 0 1vh #ed145b; font-weight: 1000; font-size: 1.7vw";
              row.classList.add("tr-first");              
            }

            if (user.idPlayer == sessionStorage.PLAYER_ID) {
              user_pos.innerHTML = `${i + 1}º`;
            }
          }
          if (typeof log_fights != "undefined" ) {
            log_fights.innerHTML = `Fights: <b>${sessionStorage.PLAYER_FIGHTS}</b>`;
            log_wins.innerHTML = `Wins: <b>${sessionStorage.PLAYER_WINS}</b>`;
            log_loss.innerHTML = `Loss: <b>${sessionStorage.PLAYER_LOSS}</b>`;
          } else {
            page_header.style.top = "-1vh";
          }
          total_players.innerHTML = `${resposta.length}`;
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

// confirmAction("show");
function confirmAction(status, action, msg) {
  const card = document.querySelector("#confirm_card");
  if (status == "hide") {
    card.style.zIndex = "-5";
    card.style.opacity = "0";
  } else if (status == "show") {
    question.innerHTML = msg;
    card.style.zIndex = "15";
    card.style.opacity = "1";
    confirm_buttons.innerHTML = `
    <button
    id="btn_no"
    onclick="confirmAction('hide')"
    class="btn-ark"
    type="button"
    tabindex="1"
    >
      NO
    </button>
    `;
    if (action == "lobby") {
      confirm_buttons.innerHTML += `
      <button
      id="btn_yes"
      onclick="window.location='${action}.html'"
      class="btn-ark"
      type="button"
      tabindex="2"
    >
      YES
    </button>
      `;
    } else {
      confirm_buttons.innerHTML += `
      <button
      id="btn_yes"
      onclick="${action}"
      class="btn-ark"
      type="button"
      tabindex="2"
    >
      YES
    </button>
      `;
    }
  }
}
