let numero1 = parseFloat(prompt("Digite o primeiro numero:"));
let numero2 = parseFloat(prompt("Digite o segundo numero:"));

let soma = numero1 + numero2;

if (soma > 20) {
    soma += 8; 

} else {

    soma -= 5; 
    
}

alert("O resultado final é: " + soma);