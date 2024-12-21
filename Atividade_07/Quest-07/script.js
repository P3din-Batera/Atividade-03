let Palavra = prompt("Digite uma palavra, e te mostraremos ela escrita inversamente:");

let PalavraInvertida = "";

for (let i = Palavra.length - 1; i >= 0; i--) {
    PalavraInvertida += Palavra[i]; 
}

alert("A Palavra ao contrário é: " + PalavraInvertida);