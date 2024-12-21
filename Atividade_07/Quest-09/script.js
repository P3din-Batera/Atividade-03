alert("Bem Vindo!!!");
alert("Digíte 5 números e te mostraremos o resultado da multiplicação entre eles!");

let resultado = 1;

for (let i = 0; i < 5; i++) {

    let numero = parseInt(prompt("Digite um número:"));

    resultado *= numero;
}

alert("O resultado da multiplicação dos números é:" + resultado);
