import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
}); // -> instancia de un objeto (player) de tipo MediaPlayer

const playButton: HTMLElement = document.querySelector('#playButton')!;
playButton.onclick = () => player.togglePlay(); // -> llamado a el metodo play

const muteButton: HTMLElement = document.querySelector('#muteButton')!;
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};

if ('serviceWorkerd' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch((error) => {
    console.log(error.message);
  });
}
