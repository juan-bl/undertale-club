const personagens = [
    ['../images/personagens/1.png', 'Frisk', '../images/personagens/frisk.jpg', 'O protagonista mudo e misterioso de Undertale, Frisk é um humano que cai no subsolo e decide o destino de monstros por suas ações. O criador do jogo Toby Foxx confirmou que Frisk é uma personagem sem genêro, para que o jogador escolha como como interpretar o protagonista.'],
    ['../images/personagens/2.png', 'Flowey', '../images/personagens/flowey.jpg', 'Uma flor aparentemente inocente, mas cruel e manipuladora, com um passado sombrio conectado à alma de um humano.'],
    ['../images/personagens/3.png', 'Toriel', '../images/personagens/toriel.jpg', 'Uma gentil e protetora mãe-bode que guia Frisk no início da jornada, tentando evitar que se machuquem.'],
    ['../images/personagens/4.png', 'Sans', '../images/personagens/sans.png', 'Um esqueleto preguiçoso e engraçado, mas profundamente enigmático, que esconde grande poder e tristeza.'],
    ['../images/personagens/5.png', 'Papyrus', '../images/personagens/papyrus.jpg', 'Irmão de Sans, é otimista, determinado e sonha em se juntar à Guarda Real, apesar de sua personalidade desajeitada.'],
    ['../images/personagens/6.png', 'Undyne', '../images/personagens/undyne.jpg', 'Capitã da Guarda Real, feroz e apaixonada, que valoriza a justiça e demonstra um lado gentil com seus amigos.'],
    ['../images/personagens/7.png', 'Muffet', '../images/personagens/muffet.jpg', 'Uma aranha comerciante que cobra pedágio em seu território e luta por uma causa: ajudar sua colônia.'],
    ['../images/personagens/8.png', 'Mettaton', '../images/personagens/mettaton.jpg', 'Um robô estrela de TV extravagante e narcisista, criado para entreter e, secretamente, proteger os monstros.'],
    ['../images/personagens/9.png', 'Asgore', '../images/personagens/asgore.jpg', 'Rei dos monstros, bondoso, mas assombrado pela responsabilidade de libertar seu povo, mesmo ao custo de humanos.'],
    ['../images/personagens/10.png', 'Asriel', '../images/personagens/asriel.jpg', 'Filho de Toriel e Asgore, Asriel é uma figura complexa que demonstra o poder de transformação, assumindo a forma do Deus da Hipermorte em um momento de pura intensidade e força.'],
]

personagens.forEach(personagem => {
    const div = document.createElement('div');
    div.className = 'card';
    div.setAttribute('data-bs-toggle', 'modal');
    div.setAttribute('data-bs-target', '#myModal');
  
    div.innerHTML = `
        <img src="${personagem[0]}" alt="">
        <h3 class="text-light">${personagem[1]}</h3>
    `;
  
    div.addEventListener('click', () => {
      document.querySelector('#exampleModalLabel').innerText = `${personagem[1]}`
    })
  
    div.addEventListener('click', () => {
        document.querySelector('.modal-body').innerHTML = `
            <img src="${personagem[2]}" alt="">
            <br>
            <p>${personagem[3]}</p>
            `;
    });
  
    document.querySelector('#mural').appendChild(div);
  });