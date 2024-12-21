alert("Bem Vindo!!!");

let numeros = []; 

while (true) {

    let numero = prompt("Digite um número (ou 0 para parar):");

    numero = parseInt(numero);

    if (numero === 0) {
        break;
    }

    numeros.push(numero);
}

alert("Os números digitados foram: " + numeros.join(", "));
