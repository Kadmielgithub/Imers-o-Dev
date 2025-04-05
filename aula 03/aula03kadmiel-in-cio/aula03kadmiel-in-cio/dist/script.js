rodada = 1
venceu = false
while(rodada <= 3){
  console.log("rodada " + rodada);
  escolhaJogador = prompt("Nível " + rodada + " Piso (1, 2 ou 3)");
  if (escolhaJogador == 1 || escolhaJogador == 2 || escolhaJogador == 3){
  pisoQuebrado = Math.floor(Math.random() * 3)+ 1;
  if (escolhaJogador == pisoQuebrado){
   alert("Você perdeu! Piso " + pisoQuebrado + " qubrebrou");
    rodada = 1000
  }
  else{
    alert("Subiu de nível! o piso falso era o " + pisoQuebrado)
  }
  
  rodada += 1;
  
  if(rodada ==4 ){
    venceu = true
    alert("Você Venceu, Parabéns!")
  }
  }
  else{
    alert("Voce precisa escolher entre 1 2 ou 3")
  }
  
}

if (venceu){
  console.log("Jogador venceu o jogo!")
}else{
  "Jogador perdeu o jogo!"
}