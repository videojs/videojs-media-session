import videojs from 'video.js';
import path from 'path';

// Default options for the plugin.
const defaults = {};

// Cross-compatibility for Video.js 5 and 6.
const registerPlugin = videojs.registerPlugin || videojs.plugin;
// const dom = videojs.dom || videojs;

const MEDIA_SESSION_EXISTS = Boolean(navigator.mediaSession);

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
  }

  player.addClass('vjs-media-session');

  const curSrc = Object.assign({}, player.currentSource());
  const poster = player.poster();

  if (!curSrc.artwork && poster) {
    curSrc.artwork = [{
      src: poster,
      type: 'image/' + path.extname(poster).slice(1)
    }];
  }

  navigator.mediaSession.metadata = new MediaMetadata(curSrc);
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
