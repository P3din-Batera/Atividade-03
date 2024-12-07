alert("BEM VINDO!")

    let MaisNovo = "";
    let IdadeMaisNova;

    for (let i = 1; i <= 10; i++) {
        let nome = prompt("Digite o nome da " + i + "ª pessoa:");
        let idade = parseInt(prompt("Digite a idade de " + nome));

        if (i === 1 || idade < IdadeMaisNova) {
            IdadeMaisNova = idade;
            MaisNovo = nome;
        }
    }

    alert("A pessoa mais nova é:" + MaisNovo);


