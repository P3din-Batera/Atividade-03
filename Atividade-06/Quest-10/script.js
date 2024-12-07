alert("Digite um número e diremos sua tabuada!");

let numero = parseFloat(prompt("Número:"));
valor = 0;

for(let i = 0; i <= 10; i++){

    valor = numero * i 

    alert("Operação: " + numero + "*" + i + " Resultado: " + valor);
};