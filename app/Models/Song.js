export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
  }

  get Template() {
    return `
          <div class="media bg-white text-dark p-2 mb-1">
            <img id="album-art-style" src="${this.albumArt}" class="mr-3" alt="..." />
            <div class="media-body pt-2">
              <button
                class="btn-blank-song"
                type="button"
                onclick="app.songsController.addSong('${this._id}')"
              >
                <i class="far fa-plus-square"></i>
              </button>
              <h5 class="mt-0">${this.title}</h5>
              <p class="text-muted">${this.album}</p>
              <p>${this.artist}</p>
            </div>
          </div>
              `;
  }

  // <audio src="${this.preview}" controls>

  get playlistTemplate() {
    return `
          <div class="media bg-white text-dark p-2 mb-1">
            <img id="album-art-style" src="${this.albumArt}" class="mr-3" alt="..." />
            <div class="media-body pt-2">
              <button
                class="btn-blank-song"
                type="button"
                onclick="app.songsController.removeSong('${this._id}')"
              >
                <i class="fas fa-times"></i>
              </button>
              <h5 class="mt-0">${this.title}</h5>
              <p class="text-muted">${this.album}</p>
              <p>${this.artist}</p>
            </div>
          </div>
        `;
  }
}
