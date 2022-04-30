
let startingMinutes = prompt("How many minutes do you want your timer to be?");

if (startingMinutes === null)
{
  startingMinutes = 2;
}

let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown(){
  const minutes = Math.floor(time/60);
  let seconds = time%60;

  seconds = seconds < 10 ? '0' + seconds : seconds;

  countdownEl.innerHTML = `${minutes}:${seconds}`;

  if (time > 0)
  {
    time--;
  }
}

function clickCancel(){
  time = 0;
  console.log("cancel pressed");
}

  function windowLoaded(){
    console.log('loaded');
    document.getElementById("cancel").addEventListener("click", clickCancel);
  }

  window.onload = windowLoaded;
