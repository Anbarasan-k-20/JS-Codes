document.querySelector("#form-control").addEventListener("submit", (e) => {
  e.preventDefault();
  let username = document.querySelector("#uName").value;
  let eMail = document.querySelector("#eMail").value;
  let password = document.querySelector("#passwd").value;
  let ConfirmPassword = document.querySelector("#confirmPwd").value;

  let uNSpan = document.querySelector(".unSpan");
  let eMSpan = document.querySelector(".em-span");
  let pswSpan = document.querySelector(".psw-span");
  let cPswSpan = document.querySelector(".cPsw-span");

  let submit;

  if (username == "") {
    uNSpan.innerText = "*Username Is Required!";
    submit = false;
  } else {
    uNSpan.innerText = "";
    submit = true;
  }

  if (eMail == "") {
    eMSpan.innerText = "*E-mail is Required!";
    submit = false;
  } else {
    eMSpan.innerText = "";
    submit = true;
  }

  if (password == "") {
    pswSpan.innerText = "*Password is Required!";
    submit = false;
  } else {
    pswSpan.innerText = "";
    submit = true;
  }

  if (ConfirmPassword == "") {
    cPswSpan.innerText = "* Confirm Password is Required!";
  } else if (ConfirmPassword !== password) {
    cPswSpan.innerText = "* Password Does Not Match!";
    submit = false;
  } else {
    cPswSpan.innerText = "";
    submit = true;
  }
  if (submit) {
    alert(`Welcome ${username} Login SucessFul`);
  }
});
