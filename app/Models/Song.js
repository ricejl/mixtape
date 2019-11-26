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
          <div class="media bg-white text-dark p-2">
            <img src="//placehold.it/100x100" class="mr-3" alt="..." />
            <div class="media-body">
              <h5 class="mt-0">Song Title</h5>
              Artist
            </div>
          </div>
        `;
  }

  get playlistTemplate() {
    return `

        `;
  }
}
