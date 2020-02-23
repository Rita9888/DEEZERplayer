/* eslint-disable no-undef */
function onPlayerLoaded() {
  DZ.player.playAlbum(301775);
}

DZ.init({
  appId: '394424',
  channelUrl: 'http://developers.deezer.com/examples/channel.php',
  player: {
    container: 'player',
    cover: true,
    playlist: true,
    width: 650,
    height: 300,
    onload: onPlayerLoaded,
  },
});

function search(term) {
  DZ.api(`/search?q=${term}`, (response) => {
    const tracks = [];
    response.data.forEach((element) => {
      tracks.push(element.id);
    });
    DZ.player.playTracks(tracks);
  });
}

export default async function findTrack(id) {
  const trackName = document.getElementById(id).value;
  search(trackName);
}
