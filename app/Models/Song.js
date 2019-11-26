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
            <img src="${this.albumArt}" class="mr-3" alt="..." />
            <div class="media-body">
              <h5 class="mt-0">${this.title}</h5>
              <p class="text-muted">${this.album}</p>
              <p>${this.artist}</p>
              <button class="btn btn-warning" type="button" onsubmit="addSong(${this._id})">Add to playlist</button>
              </div>
              </div>
              `;
  }

  // <audio src="${this.preview}" controls>

  get playlistTemplate() {
    return `

        `;
  }
}
