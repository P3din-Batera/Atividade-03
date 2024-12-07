alert("Digite a idade dessas 20 pessoas e te mostraremos a média!");

let Soma = 0;

for (let i = 1; i <= 20; i++) {
    let numero = parseFloat(prompt("Digite a " + i + "º idade:"));
    
    Soma += numero;
    Valor = i;
}

alert("A soma das 20 idades é: " + Soma/Valor);
//OBS.: Também teria como fazer colocando no final o valor 20, porém assim é mais complexo e mais bonito :)//