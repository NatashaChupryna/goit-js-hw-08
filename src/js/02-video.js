import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const onPlay = function (data) {
  // data is an object containing properties specific to that event
  const time = player.getCurrentTime();
    localStorage.setItem('videoplayer-current-time', time);
};

player.on('play', onPlay);
// If later on you decide that you don’t need to listen for play anymore.
player.off('play', onPlay);



player
  .setCurrentTime(onPlay)
  .then(function (seconds) {
    Number(localStorage.getItem('videoplayer-current-time'));
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });