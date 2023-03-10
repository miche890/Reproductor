import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
}); // -> instancia de un objeto (player) de tipo MediaPlayer

const playButton: HTMLElement = document.querySelector("#playButton")!;
playButton.onclick = () => player.togglePlay(playButton); // -> llamado a el metodo play

const muteButton: HTMLElement = document.querySelector("#muteButton")!;
muteButton.onclick = () => player.toggleMute(muteButton);

if ("serviceWorkerd" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.log(error.message);
  });
}
