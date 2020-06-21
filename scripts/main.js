function start() {
  windowHeight = window.innerHeight;
  titleCont = document.getElementById('titleCont');
  titleContHeight = titleCont.offsetHeight;
  divideHeight = (windowHeight - titleContHeight) / 2.0;
  divideHeight = divideHeight + 20;
  titleCont.style.padding = divideHeight + "px 0px";
}

window.onload = start;
