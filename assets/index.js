import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()]}); // -> instancia de un objeto (player) de tipo MediaPlayer

const button = document.querySelector("button");
button.onclick = () => player.togglePlay(); // -> llamado a el metodo play