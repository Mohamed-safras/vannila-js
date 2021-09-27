const musicContiner = document.querySelector(".musicContiner");
const play = document.querySelector("#play");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const audio = document.querySelector("#audio");
const cover = document.querySelector("#cover");
const progress = document.querySelector(".progress");
const progressContiner = document.querySelector(".progress-container");
const title = document.querySelector("#title");

//song title

const songs = ["Oru-Kutti-Katha", "Vaathi-Coming", "Vaathi-Kabaddi"];

//keep track of songs

let songIndex = 0;

// Intially load song info DOM

loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = song;
  audio.src = `audio/${song}.mp3`;
  cover.src = `img/${song}.jpg`;
}

function pauseSong() {
  musicContiner.classList.remove("play");
  play.querySelector("i.fas").classList.add("fa-play");
  play.querySelector("i.fas").classList.remove("fa-pause");
  audio.pause();
}

function playSong() {
  musicContiner.classList.add("play");
  play.querySelector("i.fas").classList.remove("fa-play");
  play.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}

play.addEventListener("click", () => {
  const isPlaying = musicContiner.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);

  playSong();
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);

  playSong();
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercentage = (currentTime / duration) * 100;
  progress.style.width = `${progressPercentage}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;

  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

prev.addEventListener("click", prevSong);

next.addEventListener("click", nextSong);

audio.addEventListener("timeupdate", updateProgress);

progressContiner.addEventListener("click", setProgress);

audio.addEventListener("ended", nextSong);
