// IDs dos vídeos ou o ID de uma playlist sua
// se quiser, basta colocar só os IDs de cada música
const playlist = [
  'fZPappHi2xs', // 0308
  'Z7yNvMzz2zg', // psycho
  '_ERf86GnC4c', // new youth
  '27rdSyt-Qt8',
  't4YJEekL1f8',
  '3yp17XEP5ck',
  'DzBB7izZnZk',
  'Oswujxm2Ag0',
  'kAzmhLHePqU',
  'n5B5q1Hwt_U',
  'LvCmsOWPwKA',
  'diMyNjWyDW8',
  'TamDOXponnM',
  'aFrQIJ5cbRc',
  'vSPnf72JsCQ',
  'SHbAWniC_j8',
  'svlLy7Ujym4',
  'p1-MIzpFnkA',
  'uHo8TOL3mGY',
  'utGcrIdSQXE',
  '86fJXRuP6Ko',
  'VWLWY2mLL2I',
  'jUNz-uTF--E',
  'xji9Zg-35Es',
  'jWQx2f-CErU',
  'phuiiNCxRMg',
  '1c_3pK15yWg',
  'V0OAgnHSo9Y',
  'i0p1bmr0EmE',
  'mAKsZ26SabQ',
  'FyG21rXCxlY'
];

let player;           // objeto YT.Player

// 1) Função que a API chama assim que estiver pronta
function onYouTubeIframeAPIReady () {
  player = new YT.Player('ytplayer-container', {
    width: 320,
    height: 180,
    videoId: playlist[0],       // carrega algo só para inicializar
    playerVars: {
      rel: 0,
      modestbranding: 1
    }
  });
}

// 2) Clique no botão escolhe um vídeo aleatório e toca
document.getElementById('playSong').addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * playlist.length);
  const randomVideoId = playlist[randomIndex];

  // se o player já existe, só troca de vídeo
  if (player && typeof player.loadVideoById === 'function') {
    player.loadVideoById({ videoId: randomVideoId });
  } else {
    // caso o usuário clique antes de a API terminar de carregar
    // cria um iframe “manual” — fallback simples
    document.getElementById('ytplayer-container').innerHTML =
      `<iframe width="480" height="270"
               src="https://www.youtube.com/embed/${randomVideoId}?autoplay=1&rel=0&modestbranding=1"
               frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
       </iframe>`;
  }
});

/***********  CONTAGEM REGRESSIVA  ***********/
(function(){
  // Data‑alvo: 18 de maio de 2025 às 00:00 no fuso de Brasília (‑03:00)
  // troque a hora se quiser outro horário específico (ex.: 09:00)
  const launchDate = new Date('2025-05-18T00:00:00-03:00').getTime();
  const el = document.getElementById('countdown');

  function twoDigits(n){ return String(n).padStart(2,'0'); }

  function update(){
    const now   = Date.now();
    let diff    = launchDate - now;

    if (diff <= 0){
      el.textContent = 'the aobum is here !!';
      clearInterval(timer);
      return;
    }
    const sec  = Math.floor(diff/1000)%60;
    const min  = Math.floor(diff/1000/60)%60;
    const hour = Math.floor(diff/1000/60/60)%24;
    const day  = Math.floor(diff/1000/60/60/24);

    el.textContent = `ETA: ${day}d ${twoDigits(hour)}h ${twoDigits(min)}m ${twoDigits(sec)}s`;
  }

  update();                     // mostra assim que a página carrega
  const timer = setInterval(update,1000);   // atualiza todo segundo
})();
