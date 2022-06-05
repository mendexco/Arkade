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

function sideMenu(status, sec) {
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

confirmAction("show");
function confirmAction(status, action, page) {
  const card = document.querySelector("#confirm_card");
  if (status == "show") {
    card.style.zIndex = "15";
    card.style.opacity = "1";
  } else if (status == "hide") {
    card.style.zIndex = "-5";
    card.style.opacity = "0";
  }
}