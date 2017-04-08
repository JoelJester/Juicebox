

// Juicebox app

var Juicebox = {
  songs: [],
  currentSong: null,
  dom: {},
  isPlaying: false,
  volumeLevel: 100,

  // initialization function
  start: function() {
    this.dom = {
      play: $(".js-song-controls .play"),
      stop: $(".js-song-controls .stop"),
      skip: $(".js-song-controls .skip"),
      previous: $(".js-song-controls .previous"),
      mute: $(".js-song-controls .mute"),
      // this.pause: $(".js-song-controls pause"),
    };
    this.listen();
  },

  listen: function() {
    this.dom.play.on("click", this.play);
    this.dom.stop.on("click", this.stop);
    this.dom.skip.on("click", this.skip);
    this.dom.previous.on("click", this.previous);
    this.dom.mute.on("click", function() {
      this.setVolume(0);
    }.bind(this));
  },

  play: function(song) {
    console.log("Juicebox is playing");
    // this.currentSong = song;
  },
  pause: function() {
    console.log("Juicebox is pauseing");
  },
  stop: function() {
    console.log("Juicebox is stoping");
  },
  change: function(song) {
    console.log("Juicebox is changeing");
  },
  shuffle: function() {
    console.log("Juicebox is shuffleing");
  },
  skip: function() {

  },
  setVolume: function(volume) {
    volumeLevel = volume;
    console.log("Volume is " + volumeLevel);
  },

};


$(document).ready(function() {
  Juicebox.start();
  console.log("app linked");
});
