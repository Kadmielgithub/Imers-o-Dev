function jogar() {
    document.getElementById("formulario").style.display = "block";
}

document.getElementById("enviar").addEventListener("click", function() {
    let nome = document.getElementById("nome").value;
    let idade = Number(document.getElementById("idade").value);
    const mensagemDiv = document.getElementById("mensagem");

    mensagemDiv.innerHTML = ""; // Limpa mensagens anteriores
    mensagemDiv.className = "mensagem"; // Reseta a classe para a mensagem padrão

    if (idade < 18) {
        mensagemDiv.textContent = "Você não pode jogar.";
        mensagemDiv.classList.add("erro"); // Adiciona a classe de erro
        return;
    }

    document.getElementById("formulario").style.display = "none";
    iniciarJogo(nome);
});

function iniciarJogo(nome) {
    const opcoes = { 1: "Pedra", 2: "Papel", 3: "Tesoura" };
    
    document.getElementById("mensagem").innerHTML = `
        <h3>${nome}, escolha:</h3>
        <button onclick="jogarRodada(1, '${nome}')">Pedra</button>
        <button onclick="jogarRodada(2, '${nome}')">Papel</button>
        <button onclick="jogarRodada(3, '${nome}')">Tesoura</button>
    `;
}

function jogarRodada(escolhaJogador, nome) {
    const opcoes = { 1: "Pedra", 2: "Papel", 3: "Tesoura" };
    let escolhaComputador = Math.floor(Math.random() * 3) + 1;

    let resultado = "";
    if (escolhaJogador === escolhaComputador) {
        resultado = "Empate!";
    } else if (
        (escolhaJogador === 1 && escolhaComputador === 3) ||
        (escolhaJogador === 2 && escolhaComputador === 1) ||
        (escolhaJogador === 3 && escolhaComputador === 2)
    ) {
        resultado = "Você venceu!";
    } else {
        resultado = "Computador venceu!";
    }

    document.getElementById("mensagem").innerHTML += `
        <p>Você escolheu: ${opcoes[escolhaJogador]}</p>
        <p>Computador escolheu: ${opcoes[escolhaComputador]}</p>
        <p><strong>${resultado}</strong></p>
        <button onclick="iniciarJogo('${nome}')">Jogar novamente</button>
    `;
}