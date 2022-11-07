
const email = document.querySelector("input");
const message = document.querySelector('textarea');
const submitButton = document.querySelector('button');
let userData = {};


email.addEventListener('input', _.throttle(onInputChange, 500ms));
function onInputChange(event) {
    localStorage.setItem('feedback-form-state-email', event.target.value);
    userData.email = event.target.value;
    console.log(userData)
};

message.addEventListener('input', _.throttle(onMessageEnter, 500ms));
function onMessageEnter(event) {
    localStorage.setItem('feedback-form-state-message', event.target.value);
    userData.message = event.target.value;
    console.log(userData);
};

submitButton.addEventListener('click', onButtonClick);
function onButtonClick(event) {
  localStorage.clear();
};

