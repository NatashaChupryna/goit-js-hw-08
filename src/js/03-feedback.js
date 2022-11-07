import throttle from 'lodash.throttle';

const email = document.querySelector("input");
const message = document.querySelector('textarea');
const submitButton = document.querySelector('button');
let userData = {};


email.addEventListener('input', throttle(onInputChange, 500));
function onInputChange(event) {
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify(userData)
    );
    userData.email = event.target.value;
  console.log(userData)
};

message.addEventListener('input', throttle(onMessageEnter, 500));
function onMessageEnter(event) {
    localStorage.setItem('feedback-form-state', JSON.stringify(userData));
    userData.message = event.target.value;
    console.log(userData);
};

submitButton.addEventListener('click', onButtonClick);
function onButtonClick(event) {
  localStorage.clear();
};

function onPageReboot(event) {
  if (email.value.length === 0) {
    email.value = JSON.parse(localStorage.getItem('feedback-form-state'));
  }
  if (message.value === '') {
    message.value = JSON.parse(localStorage.getItem('feedback-form-state'));
  }
};

