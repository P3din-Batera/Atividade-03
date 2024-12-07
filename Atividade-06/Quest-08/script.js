alert("Digite a idade dessas 20 pessoas e te mostraremos quantas são maiores de idade!");

let Idade = 0;

for (let i = 1; i <= 20; i++) {
    let numero = parseFloat(prompt("Digite a " + i + "º idade:"));

    if(numero >= 18){
        Idade++;
    }
}

alert("Quantidade de maiores de idade: " + Idade);
