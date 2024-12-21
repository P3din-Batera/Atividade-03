let linhas = 5;

let piramide = "";

for (let i = 1; i <= linhas; i++) {

    let linha = "";
    for (let j = 1; j <= i; j++) {
        linha += i;
    }
    piramide += linha + "\n"; 
}

alert(piramide);
