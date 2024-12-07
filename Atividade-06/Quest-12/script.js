alert("Digite 20 números e te mostraremos quantos são pares!");

Pares = 0;

for (let i = 1; i <= 20; i++) {
    let numero = parseFloat(prompt(i + "º Número"));

    if(numero % 2 == 0){
        Pares++;
    }
}

alert("Quantidade de números pares: " + Pares);
