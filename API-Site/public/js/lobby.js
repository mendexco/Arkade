fighters_items.addEventListener("load", plotPortraits());
function plotPortraits() {
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
  let char = "";
  for (let i = 0; i < charsArray.length; i++) {
    char = charsArray[i];
    fighters_items.innerHTML += `
        <div onclick="charDetails('${char}')" class="fighter-item">
        <img src="assets/imgs/chars/${char}/SplashMIN.png">
        <p>${char.toUpperCase()}</p>
      </div>
        `;
  }
}

function sideMenu(status) {
  const menu = document.querySelector("#side_menu");
  const container = document.querySelector("#container_sec");
  if (status == "show") {
    menu.style.left = "0vh";
    container.style.left = "16.5vw";
  } else {
    menu.style.left = "-25vh";
    container.style.left = "10vw";
  }
}



function charDetails(character) {
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
          const nameConst = json.nameChar;
          const descConst = json.charDesc;
          const lifeConst = json.life;
          const attackConst = json.attack;
          const specialConst = (
            (json.magicDmg1 + json.magicDmg2 + json.magicDmg3) /
            3
          ).toFixed(0);
          const prConst = json.physical_resistance;
          const mrConst = json.magical_resistance;
          const overallConst = lifeConst + attackConst + Number(specialConst) + prConst + mrConst;
          const priceConst = json.priceChar;
          showStats(
            "fighter",
            nameConst,
            descConst,
            lifeConst,
            attackConst,
            specialConst,
            prConst,
            mrConst,
            overallConst,
            priceConst
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
function showStats(item, name, desc, life, attack, special, pr, mr, overall, price) {
  sideMenu("hide");
  backFront.style.opacity = "1";
  backFront.style.pointerEvents = "all";
  // statStage.src = ``;
  if (item == "fighter") {
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
    button_purchase.innerHTML = `<img src="assets/imgs/ArkadeKoins.png" alt="AK-Icon" />${price}`;
    statStage.src = `assets/imgs/stages/stage_${name}.gif`;
    statCharacter.src = `assets/imgs/chars/${name}/SplashFULL.png`;
  } else if (item == "stage") {
    stage_stats.style.opacity = "1";
    stage_stats.style.marginTop = "0vh";
    stage_stats.style.marginRight = "0vw";
  } else {
    backFront.style.opacity = "0";
    backFront.style.pointerEvents = "none";
    char_stats.style.marginTop = "10vh";
    char_stats.style.marginRight = "10vw";
  }
}
