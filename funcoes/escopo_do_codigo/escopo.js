// Escopo do código
// function
/*
let n = 10;

function imprimir(){
    let n = 25;
    console.log(n);
}
console.log(n);  // Retorna 10
imprimir();  // retorna 25

// if
let x = 15;
if (true){
    let x = 20;
    console.log(x)  // escopo do if
}
console.log(x)  // escopo global
*/
// Escopo alinhado
let y = 5; 

const multiplicando = function(n){
    let y = n * 2;
    console.log(y)  // escopo da função imprime: 10 

    if (y > 4){
        let y = 55;
        console.log(y);  // escopo if dentro da função imprime: 55
    }
}
console.log(y);  // imprime 5
multiplicando(y);