import videojs from 'video.js';
import window from 'global/window';

// Default options for the plugin.
const defaults = {};

// Cross-compatibility for Video.js 5 and 6.
const registerPlugin = videojs.registerPlugin || videojs.plugin;
// const dom = videojs.dom || videojs;

const navigator = window.navigator;

const MEDIA_SESSION_EXISTS = Boolean(navigator.mediaSession);

const SKIP_TIME = 10;

const getType = (url) => {
  const ext = url.split(/[#?]/)[0].split('.').pop().trim().toLowerCase();

  if (ext === 'jpg') {
    return 'image/jpeg';
  }
  return `image/${ext}`;
};

const updateMediaSession = (player) => {
  let curSrc;

  if (player.playlist) {
    const playlist = player.playlist();

    curSrc = Object.assign({}, playlist[player.playlist.currentItem()]);
  } else {
    curSrc = Object.assign({}, player.currentSource());
  }

  curSrc.title = curSrc.name;

  if (!curSrc.artwork) {
    const poster = player.poster();

    if (curSrc.thumbnail) {
      curSrc.artwork = curSrc.thumbnail.map((thumb) => ({
        src: thumb.srcset || thumb.src,
        type: thumb.type || getType(thumb.src)
      }));
    } else if (poster) {
      curSrc.artwork = [{
        src: poster,
        type: getType(poster)
      }];
    }
  }

  curSrc.src = player.currentSrc();
  navigator.mediaSession.metadata = new window.MediaMetadata(curSrc);
};

const setUpSkips = (player) => {
  navigator.mediaSession.setActionHandler('seekbackward', function() {
    player.currentTime(player.currentTime() - SKIP_TIME);
  });
  navigator.mediaSession.setActionHandler('seekforward', function() {
    player.currentTime(player.currentTime() + SKIP_TIME);
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

  setUpSkips(player);

  if (player.playlist) {
    setUpPlaylist(player);
  }

  player.on('loadstart', () => updateMediaSession(player));
  updateMediaSession(player);
  player.addClass('vjs-media-session');

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
