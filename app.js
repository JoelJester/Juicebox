
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
      pause: $(".js-song-controls .pause"),
      play: $(".js-song-controls .play"),
      stop: $(".js-song-controls .stop"),
      skip: $(".js-song-controls .skip"),
      back: $(".js-song-controls .back"),
      mute: $(".js-song-controls .mute"),
      statusBar: $(".js-status-hide")[0],
    };
    this.addSong("./assets/audio/gcThaMessage.mp3");
    this.listen();
    this.change(this.songs[0]);

    // this.render();  ? will this need to take a playlist as an argument ?
  },
  // create a display function to render the html elements of the playlist
  // target the ul and add li elements with image, song info and a clickable
  // feature to add songs to a playlist

  listen: function() {
    this.dom.play.on("click", this.play.bind(this));
    this.dom.stop.on("click", this.stop.bind(this));
    this.dom.skip.on("click", this.skip.bind(this));
    this.dom.pause.on("click", this.pause.bind(this));
    // this.dom.back.on("click", this.back.bind(this));
    this.dom.mute.on("click", function() {
      this.setVolume(0);
    }.bind(this));
  },

  render: function() {
    var songDuration = this.currentSong.audio.duration;

    statusBar = function() {
    var songCTime = this.currentSong.audio.currentTime;
    var completePercent = ( 1 - (songCTime / songDuration))*100;
    if ( completePercent > 0.005 && this.isPlaying === true ) {
        this.dom.statusBar.style.width = "" + completePercent + "%";
      } else {
        clearInterval(interval);
        this.dom.statusBar.style.width = "" + completePercent + "%";
      }
    }.bind(this);
    var interval = setInterval(statusBar, 30);
  },

  play: function(song) {
    if (this.isPlaying === false ) {
    this.currentSong.play();
    this.isPlaying = true;
    this.dom.play.html("Pause");
    this.render();
  } else {
    this.currentSong.pause();
    this.isPlaying = false;
    this.dom.play.html("Play");
  }
  },
  pause: function() {
    console.log(pause);
    this.currentSong.pause();
  },
  stop: function() {
    this.currentSong.stop();
    this.isPlaying = false;
    this.render();
    this.dom.play.html("Play");
    // this.playPause("pause");
  },
  change: function(song) {
    this.currentSong = song;
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
    volumeLevel = (volume / 100);

    this.currentSong.audio.volume = volumeLevel;
  },
  addSong: function(path) {
    this.songs.push(new Song(path));
  },

};

class Song {
  constructor(file) {
    this.file = file;
    this.audio = new Audio(file);
  };
  play() {
    this.audio.play();
  };
  pause() {
    this.audio.pause();
  };
  stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
  };
}
// params for song object; file, title, artist, artwork


$(document).ready(function() {
  Juicebox.start();
  // debugger;
  console.log("app linked");
});

// to do list:
// connect logic to status bar, toggle isPlaying t/f and check within the sb function
// toggle between play & pause


// ****** Someday
// make status bar interactive and clickable, advance track.











// end of program
