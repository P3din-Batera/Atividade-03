alert("Bem vindo!!!");

let Array = [1, 2, 3, 4, 5];
let ArrayInvertido = [];

for (let i = Array.length - 1; i >= 0; i--) {

    ArrayInvertido.push(Array[i]);
}

alert("Array invertido: " + ArrayInvertido.join(", "));
