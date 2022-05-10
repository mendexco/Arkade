// changeDisplay();
window.onload = function (event) {
  setTimeout(function () {
    loadingFade("fade-out", 1);
  }, 500);
};

window.addEventListener("resize", () => {
  var pageZoom = Math.round(window.devicePixelRatio * 100);
  // console.log(`PAGE ZOOM: ${pageZoom}`);
  if (pageZoom > 100) {
    pageZoom = 100 - (pageZoom - 100);
  } else {
    pageZoom = 100 + (100 - pageZoom);
  }
  sessionStorage.PAGE_ZOOM = pageZoom;
});

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