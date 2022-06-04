// fighters_items.addEventListener("load", plotPortraits("fighter"));
// stages_items.addEventListener("load", plotPortraits("stage"));
function plotPortraits(plot, search) {
  const charsArray = [
    "Ryu",
    "Ken",
    "Sagat",
    "Guile",
    "Dhalsim",
    "Vega",
    "Balrog",
    "Chun-Li",
    "Akuma",
    "M.Bison",
  ];
  const stagesArray = [
    "Suzaku Castle",
    "Battle Harbor",
    "Ayutthaya Ruins",
    "Air Force Base",
    "Maharaja Palace",
    "Flamenco Tavern",
    "World Warrior",
    "Taiping Road",
    "Ruined Dojo",
    "Shadaloo Fortress",
  ];
  let char = "";
  let searchArray;
  if (plot == "fighter") {
    search = ipt_searchF.value;
    fighters_items.innerHTML = "";
    searchArray = charsArray;
  } else {
    search = ipt_searchS.value;
    stages_items.innerHTML = "";
    searchArray = stagesArray;
  }
  console.log(searchArray);
  for (let i = 0; i < charsArray.length; i++) {
    char = charsArray[i];
    if (searchArray[i].toUpperCase().indexOf(search.toUpperCase()) != -1) {
      if (plot == "fighter") {
        fighters_items.innerHTML += `
        <div onclick="searchDetails('${char}', 'fighter')" class="fighter-item">
        <img class="fighter-img" src="assets/imgs/chars/${char}/SplashMIN.png">
        <p class="fighter-p">${char.toUpperCase()}</p>
      </div>
      `;
      } else {
        stages_items.innerHTML += `
      <div onclick="searchDetails('${char}', 'stage')" class="stage-item">
      <img class="stage-img" src="assets/imgs/stages/stage_${char}.png">
      <p class="stage-p">${stagesArray[i].toUpperCase()}</p>
      </div>
      `;
      }
    }
  }
}

side_menu.addEventListener("load", sideMenu("show"));
function sideMenu(status) {
  const menu = document.querySelector("#side_menu");
  const container = document.querySelector("#container_sec");
  const btnClose = document.querySelector("#btn_closeMenu");
  if (status == "show") {
    menu.style.left = "0vh";
    container.style.left = "16.5vw";
    btnClose.style.marginRight = "0%";
    btnClose.style.backgroundImage = "url(../assets/imgs/close.png)";
    btnClose.style.backgroundSize = "40% 40%";
    btnClose.setAttribute("onclick", "sideMenu('hide')");
  } else {
    menu.style.left = "-25vh";
    container.style.left = "10vw";
    btnClose.style.marginRight = "-24%";
    btnClose.style.backgroundImage = "url(../assets/imgs/menu.png)";
    btnClose.style.backgroundSize = "60% 60%";
    btnClose.setAttribute("onclick", "sideMenu('show')");
  }
}

sec_play.style.opacity = 1;
container_sec.addEventListener("load", changeSections("shop"));
// sec_shop.style.opacity = 1;
// container_sec.addEventListener("load", changeSections("play"));
function changeSections(section) {
  const cardsLobby = document.querySelectorAll(".card-lobby");
  for (let i = 0; i < cardsLobby.length; i++) {
    cardsLobby[i].style.display = "inline-grid";
  }
  if (section == "play" && sec_shop.style.opacity == 1) {
    market_fighters.style.display = "none";
    market_stages.style.display = "none";
    sec_play.style.opacity = "0";
    sec_shop.style.opacity = "0";
    setTimeout(() => {
      sec_play.style.display = "flex";
      sec_shop.style.display = "none";
      setTimeout(() => {
        sec_play.style.opacity = "1";
        for (let i = 0; i < cardsLobby.length; i++) {
          cardsLobby[i].style.opacity = "1";
        }
        card_arcade.style.marginLeft = "16vh";
        card_versus.style.marginRight = "16vh";
        card_fighters.style.marginRight = "30vh";
        card_stages.style.marginLeft = "30vh";
      }, 250);
    }, 500);
  } else if (
    (section == "shop" && sec_play.style.opacity == 1) ||
    (section == "shop" &&
      (market_fighters.style.display == "flex" ||
        market_stages.style.display == "flex"))
  ) {
    market_fighters.style.display = "none";
    market_stages.style.display = "none";
    sec_shop.style.opacity = "0";
    sec_play.style.opacity = "0";
    setTimeout(() => {
      sec_shop.style.display = "flex";
      sec_play.style.display = "none";
      setTimeout(() => {
        sec_shop.style.opacity = "1";
        for (let i = 0; i < cardsLobby.length; i++) {
          cardsLobby[i].style.opacity = "1";
        }
        card_fighters.style.marginRight = "16vh";
        card_stages.style.marginLeft = "16vh";
        card_arcade.style.marginLeft = "30vh";
        card_versus.style.marginRight = "30vh";
      }, 250);
    }, 500);
  }
}

lobbyOnClik("stages");
function lobbyOnClik(card) {
  const cardsLobby = document.querySelectorAll(".card-lobby");
  if (card == "arcade") {
    window.location = "../selection.html";
  } else if (card == "fighters" || card == "stages") {
    const market = document.querySelector(`#market_${card}`);
    for (let i = 0; i < cardsLobby.length; i++) {
      cardsLobby[i].style.opacity = "0";
    }
    setTimeout(() => {
      for (let i = 0; i < cardsLobby.length; i++) {
        cardsLobby[i].style.display = "none";
      }
      market.style.display = "flex";
    }, 800);
  }
}

function searchDetails(character, type) {
  let charNameVar = character;
  console.log("NAME CHARACTER: ", charNameVar);

  fetch("/medidas/charDetails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nameServer: charNameVar,
    }),
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN DO charDetails()!");
      if (resposta.ok) {
        console.log(resposta);

        resposta.json().then((json) => {
          console.log(json);
          let idItemVar = json.idChar;
          let nameVar = json.nameChar;
          let descVar = json.charDesc;
          const lifeConst = json.life;
          const attackConst = json.attack;
          const specialConst = (
            (json.magicDmg1 + json.magicDmg2 + json.magicDmg3) /
            3
          ).toFixed(0);
          const prConst = json.physical_resistance;
          const mrConst = json.magical_resistance;
          const overallConst =
            lifeConst + attackConst + Number(specialConst) + prConst + mrConst;
          let priceConst = json.priceChar;
          if (type == "stage") {
            idItemVar = json.idStage;
            descVar = nameVar;
            nameVar = json.nameStage;
            priceConst = json.priceStage;
          }
          showStats(
            type,
            nameVar,
            descVar,
            lifeConst,
            attackConst,
            specialConst,
            prConst,
            mrConst,
            overallConst,
            priceConst,
            idItemVar
          );
        });
      } else {
        console.log("Error while searching stats!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });

  return false;
}

const backFront = document.querySelector(".back-front");
function showStats(
  item,
  name,
  desc,
  life,
  attack,
  special,
  pr,
  mr,
  overall,
  price,
  idItem
) {
  sideMenu("hide");
  backFront.style.opacity = "1";
  backFront.style.pointerEvents = "all";
  price = Number(price);
  if (item == "fighter") {
    char_stats.style.display = "flex";
    stage_stats.style.opacity = "0";
    stage_stats.style.display = "none";
    char_stats.style.opacity = "1";
    char_stats.style.marginTop = "0vh";
    char_stats.style.marginRight = "0vw";
    statTitle.innerHTML = `${name}`;
    statDesc.innerHTML = `${desc}`;
    h_attack.innerHTML = `${attack}`;
    h_special.innerHTML = `${special}`;
    h_pr.innerHTML = `${pr}`;
    h_mr.innerHTML = `${mr}`;
    h_life.innerHTML = `${life}`;
    h_overall.innerHTML = `${overall}`;
    button_purchase_fighter.innerHTML = `<img src="assets/imgs/ArkadeKoins.png" alt="AK-Icon" />${price}`;
    statStage.src = `assets/imgs/stages/stage_${name}.gif`;
    statCharacter.src = `assets/imgs/chars/${name}/SplashFULL.png`;
  } else if (item == "stage") {
    stage_stats.style.display = "flex";
    char_stats.style.opacity = "0";
    char_stats.style.display = "none";
    stage_stats.style.opacity = "1";
    stage_stats.style.marginTop = "0vh";
    stage_stats.style.marginRight = "0vw";
    stageTitle.innerHTML = `${name.toUpperCase()}`;
    stageImg.src = `assets/imgs/stages/stage_${desc}.gif`;
    button_purchase_stage.innerHTML = `<img src="assets/imgs/ArkadeKoins.png" alt="AK-Icon" />${price}`;
  } else {
    backFront.style.opacity = "0";
    backFront.style.pointerEvents = "none";
    char_stats.style.marginTop = "10vh";
    char_stats.style.marginRight = "10vw";
    stage_stats.style.marginTop = "10vh";
    stage_stats.style.marginRight = "10vw";
  }

  let route = "";
  if (item == "fighter") {
    route = "listChars";
  } else {
    route = "listStages";
  }
  if (item == "fighter" || item == "stage") {
    fetch(`/chars/${route}/${sessionStorage.PLAYER_ID}`)
      .then(function (resposta) {
        if (resposta.ok) {
          resposta.json().then(function (resposta) {
            console.log(resposta);
            let purchased = false;
            for (let i = 0; i < resposta.length; i++) {
              let nameColumn = "";
              if (item == "fighter") {
                nameColumn = resposta[i].nameChar;
              } else if (item == "stage") {
                nameColumn = resposta[i].nameStage;
              }
              if (nameColumn == name) {
                purchased = true;
              }
            }
            let button = document.querySelector(`#button_purchase_${item}`);
            if (purchased) {
              console.log("Item already bought");
              button.innerHTML = "PURCHASED";
              button.disabled = true;
              button.setAttribute("onclick", "");
            } else if ((Number(sessionStorage.PLAYER_ARKCOIN) - price) < 0) {
              console.log("Not enough ArkCoins");
              button.disabled = true;
              button.innerHTML = `<img src="assets/imgs/ArkadeKoins.png" alt="AK-Icon" style="filter: grayscale(1)" />${price}`;
              button.setAttribute("onclick", "");
            } else {
              console.log("Able to buy the item");
              button.disabled = false;
              button.setAttribute("onclick", `buyItem(${sessionStorage.PLAYER_ID}, ${price}, '${item}', ${idItem})`);              
            }
          });
        } else {
          throw "There's an error in the API!";
        }
      })
      .catch(function (resposta) {
        console.error(resposta);
      });
  }
}

function buyItem(playerID, arkcoins, itemType, itemID) {  
  let newArkcoins = Number(sessionStorage.PLAYER_ARKCOIN) - arkcoins;
  

  let button = document.querySelector(`#button_purchase_${itemType}`);
  button.innerHTML = "PURCHASED";
  button.disabled = true;
  button.setAttribute("onclick", "");
}
