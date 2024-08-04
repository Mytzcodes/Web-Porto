function Shown() {
  document.getElementById("conten1").style.display = "block";
  document.getElementById("conten1").style.transitionProperty = "all";
  document.getElementById("conten1").style.transition = "20s";
  document.getElementById("Act").style.display = "none";
  document.getElementById("Shop").style.backgroundImage = "Css.png";
}
function Shown1() {
  document.getElementById("Act").style.display = "block";
  document.getElementById("conten1").style.display = "none";
}

function ShownC() {
  document.getElementById("conten1").style.display = "none";
  document.getElementById("Act").style.display = "none";
}
