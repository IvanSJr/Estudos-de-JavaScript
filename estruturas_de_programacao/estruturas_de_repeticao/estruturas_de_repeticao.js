/*let x = 10;

while (x > 0) {
    console.log('O x é ' + x);
    x = x - 1;
}

let y = 1

while ( y <= 10){
    console.log('O y é ' + y);
    y = y + 1;
}

for (let numero = 1; numero <= 100; numero *= 2){
    console.log(numero);
}
*/

// Break para parar execução do loop
let nome = 'Matheus';
for (let i = 0; i < 10; i += 1){

    if (i == 3){
        nome = 'João';
    }
    if (i == 5 && nome == 'João'){
        console.log('i é igual a 5 e o nome é João. Break executado');
        break;
    }
    console.log(i);
}

// Continue
let x = 0;
while (x < 10){
    x += 1;
    if (x % 2 == 0){
        continue;
    }
    console.log(x);  // Só imprimirá números impares.
}