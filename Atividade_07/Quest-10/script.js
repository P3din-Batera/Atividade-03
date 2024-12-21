alert("Bem Vindo!!!");
alert("Digíte um número e te diremos se ele é primo:");

for(let i = 0; i < 1; i++){
    
    let Numero = parseInt(prompt("Escreva seu número abaixo:"));
    
    if (Numero % 2 == 1){

        alert("Esse número é primo: " + Numero);
        break;

    } else { 
        
        alert("Esse número não é primo: " + Numero);

        break;
    } 
}