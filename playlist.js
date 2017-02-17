function getAwesomePlaylist() {
  const BASE_URL = 'https://storage.googleapis.com/media-session/';

  return [{
    sources: [{
      src: BASE_URL + 'sintel/trailer.mp4',
      type: 'video/mp4'
    }],
    name: '"Sintel" Trailer, Durian Open Movie Project',
    description: 'The film follows a girl named Sintel who is searching for a baby dragon she calls Scales.',
    artist: 'Blender Foundation',
    poster: '//d2zihajmogu5jn.cloudfront.net/sintel/poster.png',
    thumbnail: [{
      srcset: '//d2zihajmogu5jn.cloudfront.net/sintel/poster.png',
      type: 'image/png',
      media: '(min-width: 400px;)'
    }, {
      src: '//d2zihajmogu5jn.cloudfront.net/sintel/poster.png'
    }],
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
    name: '"Big Buck Bunny" Trailer, Peach Open Movie Project',
    description: "'Big' Buck wakes up in his rabbit hole, only to be pestered by three critters, Gimera, Frank and Rinky. When Gimera kills a butterfly, Buck decides on a payback Predator-style.",
    artist: 'Blender Foundation',
    poster: '//d2zihajmogu5jn.cloudfront.net/big-buck-bunny/bbb.png',
    thumbnail: [{
      srcset: '//d2zihajmogu5jn.cloudfront.net/big-buck-bunny/bbb.png',
      type: 'image/png',
      media: '(min-width: 400px;)'
    }, {
      src: '//d2zihajmogu5jn.cloudfront.net/big-buck-bunny/bbb.png'
    }],
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
    name: '"Elephants Dream" Teaser, Orange Open Movie Project',
    description: 'Emo and Proog are two men exploring a strange industrial world of the future.',
    artist: 'Blender Foundation',
    poster: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png',
    thumbnail: [{
      srcset: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png',
      type: 'image/png',
      media: '(min-width: 400px;)'
    }, {
      src: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png'
    }],
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
    name: '"Caminandes 2: Gran Dillama" - Blender Animated Short',
    description: 'A young llama named Koro discovers that the grass is always greener on the other side (of the fence).',
    poster: 'https://image.tmdb.org/t/p/original/gvk44tzEdSCQKU5w0lsYRX9amZJ.jpg',
    thumbnail: [{
      src: 'https://image.tmdb.org/t/p/original/gvk44tzEdSCQKU5w0lsYRX9amZJ.jpg',
    }],
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
