fetch('termos-de-uso.json')
.then(response => response.json())
.then(data => {
  const informacoesProjeto = document.getElementById('informacoes-projeto');
  const botaoToggle = document.getElementById('botao-toggle');

  let isOpen = false;

  botaoToggle.addEventListener('click', () => {
    if (!isOpen) {
      informacoesProjeto.innerHTML = `
        <h2>Objetivo:</h2>
        <p>${data.projeto.objetivo}</p>
      `;
      informacoesProjeto.style.display = 'block';
      botaoToggle.innerText = 'Fechar objetivo';
      isOpen = true;
    } else {
      informacoesProjeto.innerHTML = '';
      informacoesProjeto.style.display = 'none';
      botaoToggle.innerText = 'Conheça nosso objetivo';
      isOpen = false;
    }
  });

  // Definir texto inicial do botão
  botaoToggle.innerText = 'Conheça nosso objetivo';
})
.catch(error => console.error('Erro ao carregar o JSON:', error));
