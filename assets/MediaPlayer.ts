// definicion clase
class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.iniPlugins();
  }

  private iniPlugins() {
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }

  play() {
    this.media.play();
  }

  pause() {
    this.media.pause();
  }

  togglePlay(btn:HTMLElement) {
    if (this.media.paused) {
      this.play();
      btn.innerText = 'Pause'
    } else {
      this.pause();
      btn.innerText = 'Play'
    }
  }

  mute() {
    this.media.muted = true;
  }

  unmute() {
    this.media.muted = false;
  }

  toggleMute(btn:HTMLElement) {
    if (this.media.muted) {
      this.unmute();
      btn.innerText = 'Mute'
    } else {
      this.mute();
      btn.innerText = 'Unmute'
    }
  }
}

export default MediaPlayer;
