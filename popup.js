document.getElementById('syncButton').addEventListener('click', syncTrack);

async function syncTrack() {
  const track = await getCurrentSpotifyTrack();
  const youtubeLink = await searchYouTube(track);
  await openYouTubeVideo(youtubeLink);
}

async function getCurrentSpotifyTrack() {
  // Implementar chamada à API do Spotify
  return {
    name: "Nome da Música",
    artist: "Artista"
  };
}

async function searchYouTube(track) {
  const query = `${track.name} ${track.artist}`;
  // Implementar busca no YouTube
  return "https://youtube.com/watch?v=exemplo";
}

async function openYouTubeVideo(link) {
  chrome.tabs.create({ url: link });
}
teste