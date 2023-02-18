

function onChengeEmail() {
  toggleButtonsDisable();
  toggleEmailErrors();
}

function onChengePassword() {
  toggleButtonsDisable();
  togglePasswordErrors();
}

function login() {
  firebase.auth().signInWithEmailAndPassword(
    form.email().value, form.password().value
  ).then(response => {
    window.location.href = "https://tcc.douglasqueirozm.repl.co/index.html";
  }).catch(error => {
    alert(getErrorMessage(error));
  });
}

function getErrorMessage(error) {
  if (error.code == "auth/user-not-found") {
    return "Usuário nao encontrado";
  }
  return error.message;
}

function cadastrar() {
  window.location.href = "https://tcc.douglasqueirozm.repl.co/registrar.html";
}
function recuperarPassword() {
  firebase.auth().sendPasswordResetEmail(form.email().value).then(() => {
    alert('email enviado com sucesso');
  }).catch(error => {
    alert(getErrorMessage(error));
  });
}
function isEmailValid() {
  const email = form.email().value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}

function toggleEmailErrors() {
  const email = form.email().value;
  form.error_email().style.display = email ? "none" : "block";
}

function togglePasswordErrors() {
  const email = form.password().value;
  form.error_password().style.display = email ? "none" : "block";
}

function toggleButtonsDisable() {
  const emailValid = isEmailValid();
  form.recuperar().disabled = !emailValid;

  const passwordValid = isPasswordValid();
  form.btn_login().disabled = !emailValid || !passwordValid;
}

function isPasswordValid() {
  const password = form.password().value;
  if (!password) {
    return false;
  }
  return true;
}

const form = {
  email: () => document.getElementById("NameInputEmail1"),
  password: () => document.getElementById("exampleInputEmail1"),
  btn_login: () => document.getElementById("btn-login"),
  recuperar: () => document.getElementById("recuperarsenha"),
  error_password: () => document.getElementById("error-password"),
  error_email: () => document.getElementById("error-email"),
}