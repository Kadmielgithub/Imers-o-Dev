// Listar os guerreiros
let guerreiros = ["", "", ""];
let forcaGuerreiros = 0;

// Função para escolher os guerreiros
function escolherGuerreiro(nome) {
  // Encontrar o próximo espaço vazio para adicionar o guerreiro
  for (let i = 0; i < guerreiros.length; i++) {
    if (guerreiros[i] === "") {
      guerreiros[i] = nome;
      alert(nome + " foi adicionado ao seu time!");
      break;
    }
  }

  // Verificar se o time está completo
  if (guerreiros[0] !== "" && guerreiros[1] !== "" && guerreiros[2] !== "") {
    alert("Você selecionou seu time de guerreiros! Agora, vamos para a batalha!");
    document.getElementById("startButton").style.display = "block"; // Mostrar botão para iniciar
  }
}

// Função para iniciar o jogo (batalha)
function iniciarJogo() {
  // Gerar força para cada guerreiro e calcular a força total
  forcaGuerreiros = 0;
  guerreiros.forEach(function(guerreiro) {
    let forca = Math.floor(Math.random() * 10) + 1;
    forcaGuerreiros += forca;
  });

  // Gerar time de vilões aleatórios
  let vilões = ["Shang Tsung", "Kano", "Raiden", "Goro", "Jax", "Sonya", "Baraka", "Mileena", "Kabal", "Shao Kahn"];
  let forcaVilões = 0;
  let vilõesEscolhidos = [];
  for (let i = 0; i < 3; i++) {
    let indiceAleatorio = Math.floor(Math.random() * vilões.length);
    vilõesEscolhidos.push(vilões[indiceAleatorio]);
    forcaVilões += Math.floor(Math.random() * 10) + 1;
  }

  // Comparar forças para decidir o vencedor
  if (forcaGuerreiros > forcaVilões) {
    alert("Seu time de guerreiros é muito forte! Você ganhou! A força do time é: " + forcaGuerreiros);
  } else if (forcaGuerreiros < forcaVilões) {
    alert("Seu time perdeu! O time dos vilões ganhou com força de: " + forcaVilões);
  } else {
    alert("Os dois times têm a mesma força! Empate!");
  }
}