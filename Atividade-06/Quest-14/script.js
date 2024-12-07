alert("Digite 20 números e te mostraremos quantos estão entre 0 a 100, 101 e 200 e maiores que 200!");

EntreZeroCem = 0;
EntreDuzentos = 0;
MaiorDuzentos = 0;

for (let i = 1; i <= 20; i++) {
    let numero = parseFloat(prompt(i + "º Número"));

    if(numero >= 0 && numero <=100){
        EntreZeroCem++;

    }else if(numero >= 101 && numero <=200){
        EntreDuzentos++;

    }else if(numero > 200){
        MaiorDuzentos++;
    }
}

alert("Números entre 0 e 100: " + EntreZeroCem + " Números entre 101 e 200: " + EntreDuzentos + " Números maiores que 200: " + MaiorDuzentos);
