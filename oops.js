const playPauseBtn = document.getElementById("playPauseBtn");
const icon = document.getElementById("icon");
const body = document.querySelector("body");
let isPlaying = true;

playPauseBtn.addEventListener("click", function () {
  if (isPlaying) {
     icon.src = "png/play-button.png";
    icon.alt = "Play";
  } else {
    icon.src = "png/pause.png";
    icon.alt = "Pause";
    
  }
  isPlaying = !isPlaying;
});