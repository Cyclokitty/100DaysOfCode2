function change() {
  var link = document.querySelector(".foo");

  link.addEventListener("click", function() {
    var col = randomColors();
    this.style.color = col;
    randomBG();
  });
}

function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function randomBG() {
  return document.querySelector('body').style.background = randomColors();

}

change();
