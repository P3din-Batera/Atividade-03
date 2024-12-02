let salario = parseFloat(prompt("Digíte o seu salário:"));

let percentual = parseFloat(prompt("Digíte o seu percentual de almento:"))

let reajuste = (salario * percentual) / 100;

let reajustetotal = reajuste + salario;

alert("Valor do ajuste: " + reajuste + " Valor do salario total: " + reajustetotal);