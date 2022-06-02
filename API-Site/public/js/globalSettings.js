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