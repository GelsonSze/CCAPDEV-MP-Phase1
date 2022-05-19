function verifyLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "" || password == "") {
    document.getElementById("error").innerHTML = "*Please fill in all fields.*";
    return false;
  } else if (!(username == "Glitch" && password == "Glitch123")) {
    document.getElementById("error").innerHTML =
      "*Username or password does not exist!*";
    return false;
  } else {
    window.location.href = "home.html";
  }
}
