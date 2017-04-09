

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
      back: $(".js-song-controls .back"),
      mute: $(".js-song-controls .mute"),
      // this.pause: $(".js-song-controls pause"),
    };
    this.addSong();
    this.listen();
  },

  listen: function() {
    this.dom.play.on("click", this.play.bind(this));
    this.dom.stop.on("click", this.stop.bind(this));
    this.dom.skip.on("click", this.skip.bind(this));
    // this.dom.back.on("click", this.back.bind(this));
    this.dom.mute.on("click", function() {
      this.setVolume(0);
    }.bind(this));
  },

  play: function(song) {
    console.log(this);
    // this.currentSong = song;
    currentSong.play();
  },
  pause: function() {
    console.log(this);
    console.log("Juicebox is pauseing");
  },
  stop: function() {
    currentSong.stop();
  },
  change: function(song) {
    console.log("Juicebox is changeing");
  },
  shuffle: function() {
    // currentSong = songs[Math.floor.rand(songs.length);
    // change(currentSong);
    console.log("Juicebox is shuffleing");
  },
  skip: function() {
    // if (currentSong < songs.length) songs +1;
    // currentSong = songs[i+1];
    // change(currentSong);
  },
  setVolume: function(volume) {
    volumeLevel = volume;
    console.log("Volume is " + volumeLevel);
  },
  addSong: function(path) {
    this.songs.push(new Song(path));
  },

};

class Song {
  constructor(file, title, artist, art, link) {

  }

}



$(document).ready(function() {
  Juicebox.start();
  // debugger;
  console.log("app linked");
});
