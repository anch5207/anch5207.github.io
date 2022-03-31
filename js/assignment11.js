
function button1Clicked(eventObj){
  eventObj.target.classList.toggle("was-clicked");
}

function header1mouseover(){
  document.getElementById("header-1").classList.toggle("was-mouseovered");
}

function windowLoaded(){
  console.log('loaded');
  document.getElementById("button-1").addEventListener("click", button1Clicked);
  document.getElementById("header-1").addEventListener("mouseover", header1mouseover);
}
console.log('h')

window.onload = windowLoaded;
