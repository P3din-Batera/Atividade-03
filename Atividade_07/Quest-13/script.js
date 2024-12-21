let palavra = prompt("Digite uma palavra para verificar se é um palíndromo:");

palavra = palavra.toLowerCase();

if (palavra === palavra.split("").reverse().join("")) {
    alert("A palavra é um palíndromo!");
} else {
    alert("A palavra não é um palíndromo.");
}
