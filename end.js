document.addEventListener("DOMContentLoaded", function (e) {
  //const finalScore = document.getElementById("score");
  playersUsername.innerText = localStorage.getItem("username");
  finalScore.innerText = localStorage.getItem("playerScore");
});
