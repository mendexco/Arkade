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
          const descConst = "";
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
    statNumber.innerHTML = `
    Special: ${special} - Attack: ${attack}<br />
    Physical Resist: ${pr} - Magical Resist: ${mr}<br />
    Life: ${life} - Overall: ${overall}
    `;
    button_purchase.innerHTML = `<img src="assets/imgs/ArkadeKoins.png" alt="AK-Icon" />${price}`;
    statStage.src = `assets/imgs/stages/stage_${name}.gif`;
    statCharacter.src = `assets/imgs/chars/${name}/SplashFULL.png`;
    plotGraph();
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

function plotGraph() {
  // GRÁFICO DE BARRA
  const stats = ["life", "attack", "special"];

  let dataBars = [100, 12, 28];

  const dataBAR = {
    labels: stats,
    datasets: [
      {
        // MEDIDAS DO SENSOR
        data: dataBars,
        // label: 'MÉDIA',
        backgroundColor: "#ed145b50",
        borderColor: "#ed145b",
        borderWidth: 4,
        pointBorderWidth: 8,
        pointHoverBorderWidth: 10,
      },
    ],
  };

  let delayed;
  // const settingsRADAR = {
  // maintainAspectRatio: false,
  // responsive: true,

  //   // ANIMAÇÃO (RETIRAR)
  //   animation: {
  //     onComplete: () => {
  //       delayed = true;
  //     },
  //     delay: (context) => {
  //       let delay = 0;
  //       if (context.type === "data" && context.mode === "default" && !delayed) {
  //         delay = context.dataIndex * 200 + context.datasetIndex * 100;
  //       }
  //       return delay;
  //     },
  //   },
  //   // PARTE SUPERIOR
  //   plugins: {
  //     // TÍTULO NO GRÁFICO
  //     title: {
  //       display: true,
  //       padding: 10,
  //       text: "| SEMANAL |",
  //       color: "#5E2D92",
  //       font: {
  //         size: 15,
  //         family: "Quicksand_Bold",
  //       },
  //     },
  //     // LEGENDA DOS DATASETS
  //     legend: {
  //       display: true,
  //       labels: {
  //         boxHeight: 4,
  //         boxWidth: 25,
  //         color: "#5E2D92",
  //         font: {
  //           size: 15,
  //           family: "Quicksand_Bold",
  //         },
  //       },
  //     },
  //     // TOOLTIP
  //     tooltip: {
  //       enabled: true,
  //       displayColors: false,
  //       backgroundColor: "rgba(67, 27, 109, 0.9)",
  //       caretSize: 12,
  //       caretPadding: 15,
  //       padding: 20,
  //       cornerRadius: 20,
  //       titleAlign: "center",
  //       titleColor: "#e2c6ff",
  //       titleFont: {
  //         size: 15,
  //         family: "Quicksand_Book",
  //         style: "italic",
  //       },
  //       titleMarginBottom: 10,
  //       bodyAlign: "center",
  //       bodyColor: "white",
  //       bodyFont: {
  //         size: 15,
  //         family: "Quicksand_Bold",
  //       },
  //     },
  //     // SCALES
  //     scales: {
  //       display: true,
  //       gridLines: {
  //         color: "red",
  //       },
  //       angleLines: {
  //         color: "red",
  //       },
  //     },
  //   },
  // };

  const settingsRADAR = {
    maintainAspectRatio: false,
    responsive: true,
    animation: {
      duration: 2000,
    },
    // HEADER
    plugins: {
      // TÍTULO NO GRÁFICO
      title: {
        display: false,
      },
      // LEGENDA DOS DATASETS
      legend: {
        display: false,
      },
    },
    // TOOLTIP
    tooltip: {
      enabled: false,
    },
    // LINES
    scales: {
      display: true,
      r: {
        angleLines: {
          color: "#920d39",
        },
        grid: {
          color: "#920d39",
        },
      },
    },
  };

  const configRADAR = {
    type: "radar",
    data: dataBAR,
    options: settingsRADAR,
  };

  let ChartRADAR = new Chart(
    document.getElementById("radarStats"),
    configRADAR
  );
}
