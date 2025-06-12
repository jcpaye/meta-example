function switchTab(tabName) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.chat-list').forEach(list => {
    list.classList.add('hidden');
    list.classList.remove('visible');
  });

  document.querySelector(`.tab[onclick="switchTab('${tabName}')"]`).classList.add('active');
  document.getElementById(tabName).classList.remove('hidden');
  document.getElementById(tabName).classList.add('visible');
}