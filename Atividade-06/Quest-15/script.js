alert("Digite uma lista de números, e a encerraremos quando for digitado um valor negativo!");

let Soma = 0;

do {
    numero = parseFloat(prompt("Digite os valores"));
    
    if (numero >= 0) {
        Soma += numero;
    }
    
} while (numero >= 0); 

alert("Valor total da soma: " + Soma)