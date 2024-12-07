alert("Digite 20 números e te mostraremos quantos são maiores que 8!");

Maiores = 0;

for (let i = 1; i <= 20; i++) {
    let numero = parseFloat(prompt(i + "º Número"));

    if(numero >= 8){
        Maiores++;
    }
}

alert("Quantidade de números maior que 8: " + Maiores);
