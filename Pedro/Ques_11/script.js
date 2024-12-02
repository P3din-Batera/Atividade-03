let nota1 = parseFloat(prompt("Digíte a primeira nota do seu aluno:"));
let nota2 = parseFloat(prompt("Digíte a segunda nota do seu aluno:"));
let nota3 = parseFloat(prompt("Digíte a terceira nota do seu aluno:"));

media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    
    alert("Parabéns, aprovado: ");
}

else { 
    
    alert("Você está de recuperação: ");
}