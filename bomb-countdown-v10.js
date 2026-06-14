const button = document.querySelector('.red-button');
const display = document.querySelector('#countdown-display');
const buttonLabel = document.querySelector('.button-label');

let countdownInterval = null;

function startCountdown() {
  clearInterval(countdownInterval);

  let secondsLeft = 10;
  display.textContent = secondsLeft;

  countdownInterval = setInterval(() => {
    secondsLeft -= 1;
    display.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(countdownInterval);
      countdownInterval = null;
    }
  }, 1000);
}

button.addEventListener('pointerdown', () => {
  button.classList.add('is-pressed');
  buttonLabel.textContent = 'You have pressed the button';
  startCountdown();
});

button.addEventListener('pointerup', () => {
  button.classList.remove('is-pressed');
});

button.addEventListener('pointerleave', () => {
  button.classList.remove('is-pressed');
});

button.addEventListener('pointercancel', () => {
  button.classList.remove('is-pressed');
});
