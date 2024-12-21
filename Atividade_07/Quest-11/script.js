alert("Bem Vindo!!!");
alert("Veja os 10 primeiros números da sequência de Fibonacci!");

let a = 0, b = 1;

for (let i = 0; i < 10; i++) {

    alert(a);

    let Soma = a + b;

    a = b;
    
    b = Soma;
}

