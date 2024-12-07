alert("Digite a idade dessas 20 pessoas!");

let Soma = 0;

for (let i = 1; i <= 20; i++) {
    let numero = parseFloat(prompt("Digite a " + i + "º idade:"));
    
    Soma += numero;
}

alert("A soma das 20 idades é: " + Soma);