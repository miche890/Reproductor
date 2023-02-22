// definicion clase
function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];

  this._iniPlugins();
}

MediaPlayer.prototype._iniPlugins = function () {
  const player = {
    play: () => this.play(),
    pause: () => this.pause(),
    media: this.media,
    get muted() {
      return this.media.muted
    },
    set muted(value) {
      this.media.muted = value;
    }
  }
  this.plugins.forEach(plugin => {
    plugin.run(player);
  });
};

MediaPlayer.prototype.play = function () {
  this.media.play();
};

MediaPlayer.prototype.pause = function () {
  this.media.pause();
};

// definicion de metodo -> este se encarga de reproduccir o pausar el video
MediaPlayer.prototype.togglePlay = function () {
  if (this.media.paused) {
    this.play();
  } else {
    this.pause();
  }
};

MediaPlayer.prototype.mute = function () {
  this.media.muted = true;
}

MediaPlayer.prototype.unmute = function () {
  this.media.muted = false;
}

export default MediaPlayer;
