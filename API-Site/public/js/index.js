// AUTO FUNCTIONS
body_index.addEventListener(
  "load",
  scrollStart(),
  titleAnimation(),
  clearSession()
);

function scrollStart() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

/* DEBUG */
// body_index.style.overflowY = "auto";
// page_header.style.top = "0vh";
function titleAnimation() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  var div = document.querySelector(".div-title");
  text_title.style.top = "44vh";
  setTimeout(function () {
    text_title.style.opacity = "1";
    text_title.style.top = "36vh";
  }, 1000);
  text_title.innerHTML = "Welcome to";
  text_title.style.fontSize = "10vw";
  text_title.style.mixBlendMode = "unset";
  setTimeout(function () {
    text_title.style.opacity = "0";
  }, 2000);
  setTimeout(function () {
    page_header.style.top = "0vh";
    body_index.style.overflowY = "auto";
    img_arrow.style.opacity = "0.2";
    img_arrow.style.bottom = "0.5vh";
    div.style.backgroundColor = "transparent";
    text_title.style.top = "";
    text_title.style.opacity = "1";
    text_title.innerHTML = "ARKADE";
    text_title.style.fontSize = "20vw";
    text_title.style.mixBlendMode = "multiply";
    video_title.play();
  }, 2500);
}

function isInViewport(element) {
  element = document.querySelector(`${element}`);

  let rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function nextSection(element) {
  const el = document.getElementById(element);
  el.scrollIntoView({ behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  const headerVar = document.querySelector("#page_header");
  let video = isInViewport("#video_title");
  if (video == false) {
    headerVar.classList.add("header-scroll");
  } else {
    headerVar.classList.remove("header-scroll");
  }
});

//------------------------------------------------------------------------------------------------
// USER FUNCTIONS
const cardGroup = document.querySelector("#card_group");
const card = document.querySelector(".hidden-card");
/* DEBUG */
// hiddenCard('open');
function hiddenCard(status) {
  if (status == "open") {
    changeCard("login");
    card.style.marginTop = "0";
    cardGroup.style.opacity = "1";
    cardGroup.style.zIndex = "10";
    body_index.style.overflowY = "hidden";
    formReset();
  } else {
    card.style.marginTop = "5vh";
    cardGroup.style.opacity = "0";
    cardGroup.style.zIndex = "-5";
    body_index.style.overflowY = "auto";
    formReset();
  }
}

const cardLogin = document.querySelector(".div-login");
const cardSignup = document.querySelector(".div-signup");
function changeCard(change) {
  if (change == "signup") {
    cardLogin.style.opacity = "0";
    card.classList.add("signup");
    card.classList.remove("login");
    cardSignup.style.display = "flex";
    setTimeout(() => {
      cardSignup.style.opacity = "1";
      cardLogin.style.display = "none";
      formReset();
    }, 500);
  } else {
    cardSignup.style.opacity = "0";
    card.classList.add("login");
    card.classList.remove("signup");
    cardLogin.style.display = "flex";
    setTimeout(() => {
      cardLogin.style.opacity = "1";
      cardSignup.style.display = "none";
      formReset();
    }, 500);
  }
}

function formReset() {
  btn_signup.disabled = true;
  btn_login.disabled = true;
  check_password_signup.style.backgroundImage =
    "url(../assets/imgs/pages/home/hidePswrd.png)";
  check_password_login.style.backgroundImage =
    "url(../assets/imgs/pages/home/hidePswrd.png)";
  const arrayInputs = [
    "ipt_username_signup",
    "ipt_email_signup",
    "ipt_password_signup",
    "ipt_confirm",
    "ipt_email_login",
    "ipt_password_login",
  ];
  for (let i = 0; i < arrayInputs.length; i++) {
    let inputIndex = arrayInputs[i];
    // console.log(inputIndex);
    let inputVar = document.querySelector(`#${inputIndex}`);
    inputVar.value = null;
    inputVar.focus();
    inputVar.blur();
  }
}

function animateLabel(lbl, ipt, status) {
  let label = document.querySelector(`#${lbl}`);
  let input = document.querySelector(`#${ipt}`);
  if (status == "focus") {
    label.classList.add("label-selected");
  } else if (input.value == "") {
    label.classList.remove("label-selected");
  }
}

function passwordVisible(ipt, chk) {
  const input = document.querySelector(`#${ipt}`);
  const check = document.querySelector(`#${chk}`);
  if (input.type == "password") {
    input.type = "text";
    check.style.backgroundImage =
      "url(../assets/imgs/pages/home/showPswrd.png)";
  } else {
    input.type = "password";
    check.style.backgroundImage =
      "url(../assets/imgs/pages/home/hidePswrd.png)";
  }
}

function buttonStatus(btn) {
  let button = document.querySelector(`#btn_${btn}`);
  if (btn == "login") {
    if (ipt_email_login.value == "" || ipt_password_login.value == "") {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  } else {
    if (
      ipt_username_signup.value == "" ||
      ipt_email_signup.value == "" ||
      ipt_password_signup.value == "" ||
      ipt_confirm.value == ""
    ) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  }
}
//------------------------------------------------------------------------------------------------
// BACKEND FUNCTIONS
function signup() {
  loadingIcon("img_load_signup", "gif");

  // PARAMETERIZING VARIABLES
  let nameVar = ipt_username_signup.value;
  let emailVar = ipt_email_signup.value;
  let passwordVar = ipt_password_signup.value;
  let confirmVar = ipt_confirm.value;

  // INPUT VALIDATIONS
  // EMPTY FIELD
  if (
    nameVar == "" ||
    emailVar == "" ||
    passwordVar == "" ||
    confirmVar == ""
  ) {
    // cardErro.style.display = "block";
    // mensagem_erro.innerHTML = "Campo não preenchido!";
    // ressaltando bordas
    ipt_username_signup.style.border = "0.1vh solid #7e1818";
    ipt_email_signup.style.border = "0.1vh solid #7e1818";
    ipt_password_signup.style.border = "0.1vh solid #7e1818";
    ipt_confirm.style.border = "0.1vh solid #7e1818";
    loadingIcon("img_load_signup", "png");
    return false;
  } else {
    // setInterval(sumirMensagem, 5000);
  }

  // INVALID EMAIL
  if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".com") == -1) {
    // cardErro.style.display = "block";
    // mensagem_erro.innerHTML = "E-mail inválido!";
    ipt_email_signup.style.border = "0.1vh solid #7e1818";
    loadingIcon("img_load_signup", "png");
    return false;
  } else {
    // setInterval(sumirMensagem, 5000);
  }

  // DIFFERENT PASSWORDS
  if (passwordVar != confirmVar) {
    // cardErro.style.display = "block";
    // mensagem_erro.innerHTML = "As senhas necessitam ser iguais";
    ipt_password_signup.style.border = "0.1vh solid #7e1818";
    ipt_confirm.style.border = "0.1vh solid #7e1818";
    loadingIcon("img_load_signup", "png");
    return false;
  } else {
    // setInterval(sumirMensagem, 5000);
  }

  fetch("/usuarios/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nameServer: nameVar,
      emailServer: emailVar,
      passwordServer: passwordVar,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        loadingIcon("img_load_signup", "png");
        changeCard("login");
        // cardErro.style.display = "block";
        // mensagem_erro.innerHTML = "Cadastro realizado com sucesso!";
        // window.location = "login.html";
        // limparFormulario();
      } else {
        throw "Houve um erro ao tentar realizar o cadastro!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      loadingIcon("img_load_signup", "png");
    });

  return false;
}
function login() {
  loadingIcon("img_load_login", "gif");

  let emailVar = ipt_email_login.value;
  let passwordVar = ipt_password_login.value;

  // TODO: VERIFICAR AS VALIDAÇÕES QUE ELES ESTÃO APRENDENDO EM ALGORITMOS
  if (emailVar == "" || passwordVar == "") {
    // cardErro.style.display = "block";
    // mensagem_erro.innerHTML = "Campo não preenchido!";
    input_email.style.border = "0.1vh solid #7e1818";
    input_senha.style.border = "0.1vh solid #7e1818";
    loadingIcon("img_load_login", "png");
    return false;
  } else {
    // setInterval(sumirMensagem, 5000);
  }

  if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".com") == -1) {
    // cardErro.style.display = "block";
    // mensagem_erro.innerHTML = "E-mail inválido!";
    input_email.style.border = "0.1vh solid #7e1818";
    loadingIcon("img_load_login", "png");
    return false;
  } else {
    // setInterval(sumirMensagem, 5000);
  }

  console.log("FORM LOGIN: ", emailVar);
  console.log("FORM SENHA: ", passwordVar);

  fetch("/usuarios/autenticar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      emailServer: emailVar,
      passwordServer: passwordVar,
    }),
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN DO entrar()!");

      if (resposta.ok) {
        console.log(resposta);

        resposta.json().then((json) => {
          console.log(json);
          console.log(JSON.stringify(json));
          sessionStorage.PLAYER_ID = json.idPlayer;
          sessionStorage.PLAYER_USERNAME = json.namePlayer;
          sessionStorage.PLAYER_EMAIL = json.emailPlayer;
          sessionStorage.PLAYER_ARKSCORE = json.arkScore;
          sessionStorage.PLAYER_ARKCOIN = json.arkCoin;
          setTimeout(function () {
            loadingIcon("img_load_signup", "gif");
            window.location = "./lobby.html";
            // window.location = "./selection.html";
          }, 1000); // apenas para exibir o loading
        });
      } else {
        console.log("Houve um erro ao tentar realizar o login!");

        // resposta.text().then(texto => {
        //     console.error(texto);
        //     loadingIcon("img_load_signup", "gif");(texto);
        // });
        // cardErro.style.display = "block";
        // mensagem_erro.innerHTML = "E-mail e/ou senha errados!";
        loadingIcon("img_load_signup", "gif");
        return false;
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });

  return false;
}

function sumirMensagem() {
  cardErro.style.display = "none";
}
