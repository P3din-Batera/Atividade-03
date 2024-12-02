let produto = parseFloat(prompt("Digíte seu produto e aplicaremos a correção do mesmo:"));

let reajuste = (produto * 33.33) / 100;

let reajustetotal = reajuste + produto;

alert(reajustetotal);