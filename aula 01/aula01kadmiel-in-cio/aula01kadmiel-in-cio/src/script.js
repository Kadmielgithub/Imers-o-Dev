function conversor() {
valoreuro = prompt("Digite um valor em euro")
umeuro = 6.15;
alert ("R$" + valoreuro * umeuro)

   if (valoreuro && !isNaN(valoreuro)) {
        const resultado = (valoreuro * umeuro).toFixed(2); // Limita a 2 casas decimais
        alert("R$ " + resultado);
      } else {
        alert("Por favor, digite um número válido.");
      }
    }