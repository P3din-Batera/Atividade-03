alert("Digite 20 números e te mostraremos quantos estão entre 0 a 100!");

Entre = 0;

for (let i = 1; i <= 20; i++) {
    let numero = parseFloat(prompt(i + "º Número"));

    if(numero >= 0 && numero <=100){
        Entre++;
    }
}

alert("Quantidade de números: " + Entre);
