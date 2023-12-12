function enviarOpiniao() {
    const local = document.getElementById('local').value;
    const classificacao = document.getElementById('classificacao').value;
    const comentario = document.getElementById('comentario').value;

    const opinioesList = document.getElementById('opinioes-list');
    const li = document.createElement('li');
    li.innerHTML = `<strong>${local}</strong> - Avaliação: ${classificacao}/5 <br>${comentario}`;
    opinioesList.appendChild(li);

    // Limpar o formulário após enviar a opinião
    document.getElementById('opiniao-form').reset();
}
