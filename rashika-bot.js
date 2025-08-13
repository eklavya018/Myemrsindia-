document.addEventListener('DOMContentLoaded', () => {
  const botBtn = document.createElement('button');
  botBtn.innerText = '💬 Rashika Bot';
  botBtn.style.position = 'fixed';
  botBtn.style.bottom = '20px';
  botBtn.style.right = '20px';
  botBtn.style.background = '#005A9C';
  botBtn.style.color = 'white';
  botBtn.style.padding = '10px';
  botBtn.style.borderRadius = '50px';
  document.body.appendChild(botBtn);

  botBtn.addEventListener('click', () => {
    alert('Hello! I am Rashika Bot 🤖\nHow can I help you today?');
  });
});
