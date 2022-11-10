import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let time = Number(localStorage.getItem('videoplayer-current-time')) || 0;

player.on(
  'timeupdate',
  throttle(function (event) {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(event.seconds)
    );
  }, 1000)
);

player
  .setCurrentTime(time)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
