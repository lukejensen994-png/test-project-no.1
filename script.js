const button = document.querySelector('.red-button');
const colors = ['#ff2d55', '#ffcc00', '#34c759', '#0a84ff', '#af52de', '#ff9500'];

function launchConfetti() {
  const buttonBox = button.getBoundingClientRect();
  const centerX = buttonBox.left + buttonBox.width / 2;
  const centerY = buttonBox.top + buttonBox.height / 2;

  for (let index = 0; index < 52; index += 1) {
    const piece = document.createElement('span');
    const angle = (Math.PI * 2 * index) / 52;
    const distance = 115 + Math.random() * 190;
    const drift = (Math.random() - 0.5) * 120;

    piece.className = 'confetti-piece';
    piece.style.setProperty('--start-x', `${centerX}px`);
    piece.style.setProperty('--start-y', `${centerY}px`);
    piece.style.setProperty('--fly-x', `${Math.cos(angle) * distance + drift}px`);
    piece.style.setProperty('--fly-y', `${Math.sin(angle) * distance - 130 + Math.random() * 170}px`);
    piece.style.setProperty('--spin', `${360 + Math.random() * 720}deg`);
    piece.style.setProperty('--size', `${7 + Math.random() * 8}px`);
    piece.style.setProperty('--color', colors[index % colors.length]);

    document.body.append(piece);
    piece.addEventListener('animationend', () => piece.remove(), { once: true });
  }
}

button.addEventListener('pointerdown', () => {
  button.classList.add('is-pressed');
  launchConfetti();
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
