let numero = parseFloat(prompt("Digíte um número, e te mostraremos o fatorial do mesmo:"));

Inicial = 1;

for(let i = 1; i <= numero; i++){

    Inicial *= i;
}

alert("O fatorial de " + numero + " é: " + Inicial);