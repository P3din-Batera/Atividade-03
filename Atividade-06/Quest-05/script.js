alert("Digite 10 números e te diremos a soma deles!");

let Soma = 0;

for (let i = 1; i <= 10; i++) {
    let numero = parseFloat(prompt("Digite o " + i + "º número:"));
    // "parseFloat" converte os números de forma decimal para natural//
    
    Soma += numero;
}

alert("A soma dos 10 números é: " + Soma);