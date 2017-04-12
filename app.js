
// Juicebox app

var Juicebox = {
  library: [],
  playlist: [],
  currentSong: null,
  dom: {},
  isPlaying: false,
  volumeLevel: .5,
  isMute: false,

  // initialization function
  start: function() {
    this.dom = {
      back: $(".js-song-controls .back"),
      play: $(".js-song-controls .play"),
      stop: $(".js-song-controls .stop"),
      skip: $(".js-song-controls .skip"),
      mute: $(".js-song-controls .mute"),
      progressBar: $(".js-progress-hide")[0],
    };
    this.addSong("./assets/audio/gcThaMessage.mp3");
    this.listen();
    this.change(this.playlist[0]);

    // this.render();  ? will this need to take a playlist as an argument ?
  },
  // create a display function to render the html elements of the playlist
  // target the ul and add li elements with image, song info and a clickable
  // feature to add individual songs to a playlist
  //
  // Will also create both a library and a playlist variable to organize, display and play files

  listen: function() {

    this.dom.back.on("click", this.back.bind(this));
    this.dom.play.on("click", this.play.bind(this));
    this.dom.stop.on("click", this.stop.bind(this));
    this.dom.skip.on("click", this.skip.bind(this));
    // this.dom.pause.on("click", this.pause.bind(this));
    this.dom.mute.on("click", this.setVolume.bind(this));
  },

  render: function() {
    var songDuration = this.currentSong.audio.duration;

    progressBar = function() {
    var songCTime = this.currentSong.audio.currentTime;
    var completePercent = ( 1 - (songCTime / songDuration))*100;
    if ( completePercent > 0.005 && this.isPlaying === true ) {
        this.dom.progressBar.style.width = "" + completePercent + "%";
      } else {
        clearInterval(interval);
        this.dom.progressBar.style.width = "" + completePercent + "%";
      }
    }.bind(this);
    var interval = setInterval(progressBar, 30);
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
    // sort a way for change to identify which element is calling in order to handle functionality
    // change will handle any action that changes or resets the track; back, skip, shuffle, etc.

    this.currentSong = song;
  },
  shuffle: function() {
    // currentSong = playlist[Math.floor.rand playlist.length);
    // change(currentSong);
    console.log("Juicebox is shuffleing");
  },
  skip: function() {
    // if (currentSong < playlist.length) playlist +1;
    // currentSong = playlist[i+1];
    // change(currentSong);
  },
  back: function() {
    if ( this.isPlaying === true ) {
      this.currentSong.stop();
      this.currentSong.play();
    }
  },
  setVolume: function() {
    var saveVolume = 1;

    if ( this.isMute === false ){
      saveVolume = this.volumeLevel;
      this.volumeLevel = 0;
      this.currentSong.audio.volume = this.volumeLevel;
      this.dom.mute.html("Un-mute");
      this.isMute = true;
      console.log(saveVolume);
    } else if ( this.isMute === true ) {
      this.volumeLevel = saveVolume;
      this.currentSong.audio.volume = this.volumeLevel;
      this.dom.mute.html("Mute");
      this.isMute = false;
    }
  },
  addSong: function(path) {
    this.playlist.push(new Song(path));
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
  // ?build a reset song function on thw song object?
}
// params for song object; file, title, artist, artwork


$(document).ready(function() {
  Juicebox.start();
  // debugger;
  console.log("app linked");
});

// to do list:
// connect logic to progress bar, toggle isPlaying t/f and check within the sb function
// toggle between play & pause


// ****** Someday
// make progress bar interactive and clickable, advance track.











// end of program
