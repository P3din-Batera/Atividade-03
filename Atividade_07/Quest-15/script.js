alert("Bem vindo!!!");

alert("Vou te apresentar os números multiplos de 3 e 5, e no intervalo de 1 até 50!");

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        alert(i);
    }
}