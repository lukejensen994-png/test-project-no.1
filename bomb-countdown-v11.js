const button = document.querySelector('.red-button');
const display = document.querySelector('#countdown-display');
const buttonLabel = document.querySelector('.button-label');
const bombScene = document.querySelector('.bomb-scene');
const explosion = document.querySelector('.explosion');
const birthdayMessage = document.querySelector('.birthday-message');
const colors = ['#ff2d55', '#ffcc00', '#34c759', '#0a84ff', '#af52de', '#ff9500'];

let countdownInterval = null;
let sequenceStarted = false;

function launchConfetti() {
  for (let index = 0; index < 80; index += 1) {
    const piece = document.createElement('span');
    const angle = (Math.PI * 2 * index) / 80;
    const distance = 140 + Math.random() * 320;
    const drift = (Math.random() - 0.5) * 160;

    piece.className = 'confetti-piece';
    piece.style.setProperty('--fly-x', `${Math.cos(angle) * distance + drift}px`);
    piece.style.setProperty('--fly-y', `${Math.sin(angle) * distance - 170 + Math.random() * 220}px`);
    piece.style.setProperty('--spin', `${360 + Math.random() * 900}deg`);
    piece.style.setProperty('--size', `${7 + Math.random() * 9}px`);
    piece.style.setProperty('--color', colors[index % colors.length]);

    document.body.append(piece);
    piece.addEventListener('animationend', () => piece.remove(), { once: true });
  }
}

function showBirthday() {
  bombScene.classList.add('is-hidden');
  birthdayMessage.classList.add('is-visible');
  launchConfetti();
}

function triggerCartoonExplosion() {
  explosion.classList.add('is-active');
  setTimeout(showBirthday, 2300);
}

function startCountdown() {
  if (sequenceStarted) {
    return;
  }

  sequenceStarted = true;
  clearInterval(countdownInterval);

  let secondsLeft = 10;
  display.textContent = secondsLeft;

  countdownInterval = setInterval(() => {
    secondsLeft -= 1;
    display.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(countdownInterval);
      countdownInterval = null;
      triggerCartoonExplosion();
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
