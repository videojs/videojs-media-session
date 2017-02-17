function getAwesomePlaylist() {
  const BASE_URL = 'https://storage.googleapis.com/media-session/';

  return [{
    sources: [{
      src: BASE_URL + 'sintel/trailer.mp4',
      type: 'video/mp4'
    }],
    title: '"Sintel" Trailer, Durian Open Movie Project',
    artist: 'Blender Foundation',
    artwork: [
      { src: BASE_URL + 'sintel/artwork-96.png',  sizes: '96x96',   type: 'image/png' },
      { src: BASE_URL + 'sintel/artwork-128.png', sizes: '128x128', type: 'image/png' },
      { src: BASE_URL + 'sintel/artwork-192.png', sizes: '192x192', type: 'image/png' },
      { src: BASE_URL + 'sintel/artwork-256.png', sizes: '256x256', type: 'image/png' },
      { src: BASE_URL + 'sintel/artwork-384.png', sizes: '384x384', type: 'image/png' },
      { src: BASE_URL + 'sintel/artwork-512.png', sizes: '512x512', type: 'image/png' },
    ]
  }, {
    sources: [{
      src: BASE_URL + 'big-buck-bunny/trailer.mov',
      type: 'video/mp4'
    }],
    title: '"Big Buck Bunny" Trailer, Peach Open Movie Project',
    artist: 'Blender Foundation',
    artwork: [
      { src: BASE_URL + 'big-buck-bunny/artwork-96.png',  sizes: '96x96',   type: 'image/png' },
      { src: BASE_URL + 'big-buck-bunny/artwork-128.png', sizes: '128x128', type: 'image/png' },
      { src: BASE_URL + 'big-buck-bunny/artwork-192.png', sizes: '192x192', type: 'image/png' },
      { src: BASE_URL + 'big-buck-bunny/artwork-256.png', sizes: '256x256', type: 'image/png' },
      { src: BASE_URL + 'big-buck-bunny/artwork-384.png', sizes: '384x384', type: 'image/png' },
      { src: BASE_URL + 'big-buck-bunny/artwork-512.png', sizes: '512x512', type: 'image/png' },
    ]
  }, {
    sources: [{
      src: BASE_URL + 'elephants-dream/teaser.mp4',
      type: 'video/mp4'
    }],
    title: '"Elephants Dream" Teaser, Orange Open Movie Project',
    artist: 'Blender Foundation',
    artwork: [
      { src: BASE_URL + 'elephants-dream/artwork-96.png',  sizes: '96x96',   type: 'image/png' },
      { src: BASE_URL + 'elephants-dream/artwork-128.png', sizes: '128x128', type: 'image/png' },
      { src: BASE_URL + 'elephants-dream/artwork-192.png', sizes: '192x192', type: 'image/png' },
      { src: BASE_URL + 'elephants-dream/artwork-256.png', sizes: '256x256', type: 'image/png' },
      { src: BASE_URL + 'elephants-dream/artwork-384.png', sizes: '384x384', type: 'image/png' },
      { src: BASE_URL + 'elephants-dream/artwork-512.png', sizes: '512x512', type: 'image/png' },
    ]
  }, {
    sources: [{
      src: BASE_URL + 'caminandes/short.mp4',
      type: 'video/mp4'
    }],
    title: '"Caminandes 2: Gran Dillama" - Blender Animated Short',
    artist: 'Blender Foundation',
    artwork: [
      { src: BASE_URL + 'caminandes/artwork-96.png',  sizes: '96x96',   type: 'image/png' },
      { src: BASE_URL + 'caminandes/artwork-128.png', sizes: '128x128', type: 'image/png' },
      { src: BASE_URL + 'caminandes/artwork-192.png', sizes: '192x192', type: 'image/png' },
      { src: BASE_URL + 'caminandes/artwork-256.png', sizes: '256x256', type: 'image/png' },
      { src: BASE_URL + 'caminandes/artwork-384.png', sizes: '384x384', type: 'image/png' },
      { src: BASE_URL + 'caminandes/artwork-512.png', sizes: '512x512', type: 'image/png' },
    ]
  }];
}
