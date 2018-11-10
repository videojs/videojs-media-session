import videojs from 'video.js';
import path from 'path';

const MEDIA_SESSION_EXISTS = Boolean(navigator.mediaSession);

const DEFAULT_SKIP_TIME = 10;

// Default options for the plugin.
const defaults = {
  skipTime: DEFAULT_SKIP_TIME
};

// Cross-compatibility for Video.js 5 and 6.
const registerPlugin = videojs.registerPlugin || videojs.plugin;
// const dom = videojs.dom || videojs;

/**
 * Function to invoke when the player is ready.
 *
 * This is a great place for your plugin to initialize itself. When this
 * function is called, the player will have its DOM and child components
 * in place.
 *
 * @function onPlayerReady
 * @param    {Player} player
 *           A Video.js player.
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
const onPlayerReady = (player, options) => {
  if (!MEDIA_SESSION_EXISTS) {
    videojs.log.warn(`Media Session is not available on this device.
                      Please try Chrome for Android 57`);
    return;
  }

  setUpSkips(player, options.skipTime);

  if (player.playlist) {
    setUpPlaylist(player)
  }

  player.on('loadstart', () => updateMediaSession(player, options));
  updateMediaSession(player, options);
  player.addClass('vjs-media-session');

};

const updateMediaSession = (player, options) => {
  let curSrc;

  if (player.playlist) {
    const playlist = player.playlist();
    curSrc = Object.assign({}, playlist[player.playlist.currentItem()]);
  } else {
    curSrc = Object.assign({}, player.currentSource());
  }

  if (options.title) {
    curSrc.title = options.title;
  } else {
    if (!curSrc.title) {
      curSrc.title = curSrc.name;
    }
  }
  
  if (options.artist) {
    curSrc.artist = options.artist;
  }
  
  if (options.album) {
    curSrc.album = options.album;
  }
  
  if (options.artwork) {
    curSrc.artwork = options.artwork;
  } else if (!curSrc.artwork) {
    const poster = player.poster();

    if (curSrc.thumbnail) {
      curSrc.artwork = curSrc.thumbnail.map((thumb) => ({
        src: thumb.srcset || thumb.src,
        type: thumb.type || path.extname(thumb.src).slice(1)
      }));
    } else if (poster) {
      curSrc.artwork = [{
        src: poster,
        type: 'image/' + path.extname(poster).slice(1)
      }];
    }
  }

  curSrc.src = player.currentSrc();
  navigator.mediaSession.metadata = new MediaMetadata(curSrc);
};

const setUpSkips = (player, skipTime) => {
  navigator.mediaSession.setActionHandler('seekbackward', function() {
    player.currentTime(player.currentTime() - skipTime);
  });
  navigator.mediaSession.setActionHandler('seekforward', function() {
    player.currentTime(player.currentTime() + skipTime);
  });
};

const setUpPlaylist = (player) => {
  navigator.mediaSession.setActionHandler('previoustrack', function() {
    player.playlist.previous();
  });
  navigator.mediaSession.setActionHandler('nexttrack', function() {
    player.playlist.next();
  });
};

/**
 * A video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @function mediaSession
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
const mediaSession = function(options) {
  this.ready(() => {
    onPlayerReady(this, videojs.mergeOptions(defaults, options));
  });
};

// Register the plugin with video.js.
registerPlugin('mediaSession', mediaSession);

// Include the version number.
mediaSession.VERSION = '__VERSION__';

export default mediaSession;
