
document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('show');
});

const botToggle = document.getElementById('bot-toggle');
const botWindow = document.getElementById('bot-window');
botToggle.addEventListener('click', () => {
  botWindow.classList.toggle('hidden');
});
