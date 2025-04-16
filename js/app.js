function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        const confirmar = confirm('Tem certeza que deseja devolver este jogo?');
        if (!confirmar) {
            return;
        }

        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }

    contarJogosAlugados(); // Atualiza na tela
}

function contarJogosAlugados() {
    const alugados = document.querySelectorAll('.dashboard__item__img--rented');
    const contador = document.getElementById('contador-alugados');
    contador.textContent = `Jogos alugados: ${alugados.length}`;
}
function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        const confirmar = confirm('Tem certeza que deseja devolver este jogo?');
        if (!confirmar) {
            return;
        }

        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }

}


