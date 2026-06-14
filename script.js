const button = document.querySelector('#test-button');
const statusMessage = document.querySelector('#status-message');

button.addEventListener('click', () => {
  statusMessage.textContent = 'This button has been pressed.';
});
