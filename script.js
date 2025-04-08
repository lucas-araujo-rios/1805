// Array de URLs das músicas ou links de streaming
const playlist = [
    'musicas/Brunilda.mp3',
    'musicas/Renai.mp3',
    'musicas/Um Desejo.mp3',
    'musicas/Northen Railway.mp3',
    'musicas/Andrômeda.mp3'
  ];
  
  const playButton = document.getElementById('playSong');
  const player = document.getElementById('player');
  
  playButton.addEventListener('click', () => {
    // Escolhe uma música aleatória da playlist
    const randomIndex = Math.floor(Math.random() * playlist.length);
    const randomSong = playlist[randomIndex];
  
    // Atribui a música ao player e toca
    player.src = randomSong;
    player.play();
  });
  