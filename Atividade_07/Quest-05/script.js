alert("Bem vindo!!! Vamos mostrar o maior número de um array");

let Numeros = [4, 10, 2, 5, 7, 1];

let MaiorValor = Numeros[0];

for (let i = 1; i < Numeros.length; i++) {
    if (Numeros[i] > MaiorValor) {
        MaiorValor = Numeros[i];
    }
}

alert("O maior número é: " + MaiorValor);