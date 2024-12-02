 let idade = parseFloat(prompt('Digite a idade do nadador:'));

if (idade >= 18) {

    alert('Categoria: Adulto');

} else if (idade >= 14) {

    alert('Categoria: Juvenil');

} else if (idade >= 9) {

    alert('Categoria: Infantil');

} else {

    alert('Categoria: Mirim');
}