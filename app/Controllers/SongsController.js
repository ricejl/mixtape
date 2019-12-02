import store from "../store.js";
import SongService from "../Services/SongsService.js";

//Private
/**Draws the Search results to the page */
function _drawResults() {
  let template = "";
  let songs = store.State.songs;
  songs.forEach(song => (template += song.Template));
  document.getElementById("songs").innerHTML = template;
}

/**Draws the Users saved songs to the page */
function _drawPlaylist() {
  let template = "";
  let playlistSongs = store.State.playlist;
  playlistSongs.forEach(song => (template += song.playlistTemplate));
  document.getElementById("playlist").innerHTML = template;
}

function _drawPreview() {
  let template = store.State.currentSong.previewTemplate;
  // songs.forEach(song => (template = song.previewTemplate));
  // template += songs[0].previewTemplate;
  document.getElementById("song-preview").innerHTML = template;
}

//Public
export default class SongsController {
  constructor() {
    //TODO Don't forget to register your subscribers
    // NOTE these are subscribing to store to know when changes are made to songs or playlist
    store.subscribe("songs", _drawResults);
    store.subscribe("playlist", _drawPlaylist);
    store.subscribe("currentSong", _drawPreview);
    _drawResults();
    _drawPlaylist();
    _drawPreview();
  }

  /**Takes in the form submission event and sends the query to the service */
  search(e) {
    //NOTE You dont need to change this method
    e.preventDefault();
    // TODO add in function to load page / spinner and call it here
    try {
      SongService.getMusicByQuery(e.target.query.value);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Takes in a song id and sends it to the service in order to add it to the users playlist
   * @param {string} id
   */
  addSong(id) {
    SongService.addSong(id);
  }

  /**
   * Takes in a song id to be removed from the users playlist and sends it to the server
   * @param {string} id
   */
  removeSong(id) {
    SongService.removeSong(id);
  }

  previewSong(id) {
    SongService.previewSong(id);
  }
}
