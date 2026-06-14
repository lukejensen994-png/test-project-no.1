const button = document.querySelector('#test-button');
const statusMessage = document.querySelector('#status-message');

button.addEventListener('click', () => {
  statusMessage.textContent = 'The button works. This is ready for a phone edit test.';
});
