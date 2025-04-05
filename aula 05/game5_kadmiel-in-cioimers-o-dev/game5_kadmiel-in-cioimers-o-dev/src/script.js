// Lista de perguntas e respostas
const perguntas = [
  {
    pergunta: "Qual comando é usado para declarar uma variável em JavaScript?",
    respostas: [
      { opcao: "let", correto: true },
      { opcao: "const", correto: true },
      { opcao: "var", correto: true },
      { opcao: "declare", correto: false }
    ]
  },
  {
    pergunta: "Qual é o seletor de ID no CSS?",
    respostas: [
      { opcao: "#meuId", correto: true },
      { opcao: ".meuId", correto: false },
      { opcao: "meuId", correto: false },
      { opcao: "*meuId", correto: false }
    ]
  },
  {
    pergunta: "Qual das opções é uma linguagem de programação?",
    respostas: [
      { opcao: "HTML", correto: false },
      { opcao: "JavaScript", correto: true },
      { opcao: "CSS", correto: false },
      { opcao: "SQL", correto: false }
    ]
  },
  {
    pergunta: "Qual a extensão de um arquivo Python?",
    respostas: [
      { opcao: ".py", correto: true },
      { opcao: ".java", correto: false },
      { opcao: ".html", correto: false },
      { opcao: ".css", correto: false }
    ]
  }
];

// Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Cria as opções de resposta
  perguntaAtual.respostas.forEach((resposta, index) => {
    const botao = document.createElement("button");
    botao.classList.add("botao-resposta");
    botao.innerText = resposta.opcao;

    botao.onclick = function () {
      if (resposta.correto) {
        acertos++;
      }
      indiceAtual++;

      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        finalizarJogo(); // Finaliza o jogo
      }
    };

    respostasElemento.appendChild(botao);
  });
}

// Função para finalizar o jogo
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde a área de perguntas
  conteudoFinal.style.display = "flex"; // Exibe a tela final
}

// Função para reiniciar o jogo
function reiniciarJogo() {
  indiceAtual = 0;
  acertos = 0;
  conteudo.style.display = "flex";
  conteudoFinal.style.display = "none";
  carregarPergunta(); // Carrega a primeira pergunta
}

// Iniciar o jogo
carregarPergunta();
