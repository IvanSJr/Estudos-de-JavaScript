/*
// Definindo funções
function imprimirNoConsole(){
    console.log('Imprimindo no console.')
}
// Chamando função
imprimirNoConsole();
console.log('Imprimindo no console fora da função');
imprimirNoConsole();
imprimirNoConsole();

// Declarando funções com parametros.
function imprimeUmNumero(num){
    console.log(`Você digitou o número ${num}`);
}
imprimeUmNumero(5);
imprimeUmNumero(199);

// Número Aleatório
function randomNum(){
    console.log(Math.random())
}
randomNum();
randomNum();
randomNum();

// Adicionando estruturas de programação as funções
function multiplicandoNumeros(x, y){
    return x * y;
}

const mult = multiplicandoNumeros(5, 2);
console.log(`O valor da multiplicação é ${mult}`);

function podeDirigir(idade, cnh){
    if (idade >= 18 && cnh){
        console.log('Pode dirigir!');
    }else{
        console.log('Não pode dirigir!');
    }
}

podeDirigir(50, true);
podeDirigir(10, true);
podeDirigir(18, false);
podeDirigir(18, true);
// Funções com argumentos opcionais
function nomeCompleto(nome, sobrenome, idade){
    if(idade === undefined){
        console.log(`Seu nome é ${nome} ${sobrenome}`);
    }else {
        console.log(`Seu nome é ${nome} ${sobrenome} e você tem ${idade} anos.`);
    }
}
nomeCompleto('Ivan', 'Júnior');
nomeCompleto('Ivan', 'Santos', 20);

function soma(a, b){
    if (a == undefined || b == undefined){
        return 'Essa função precisa de 2 argumentos.';
    }else{
        return a + b;
    }
}
console.log(soma(1));
console.log(soma(2, 7));

// Argumentos com valor DEAFULT
function potencia(base, expoente=2){
    return Math.pow(base, expoente);
}
console.log(potencia(2));  // 4
console.log(potencia(2, 2));  // 4
console.log(potencia(2, 4));  // 16

// Clousure
function armazenarSoma(x){
    return y => x + y;
}

let soma1 = armazenarSoma(3);
console.log(soma1(6))  // 9
let soma2 = armazenarSoma(10);
console.log(soma2(10));  // 10

function contador(i){
    let cont = i;
    let somarContador = function(){
        console.log(cont);
        cont ++;
    }
    return somarContador;
}

let meuContador = contador(1);
meuContador();  // 1
meuContador();  // 2
meuContador();  // 3

// arrow functions
const parOuImpar = (n) => {
    if (n % 2 == 0){
        return 'PAR';
    }else{
        return 'IMPAR'
    }
}

console.log(parOuImpar(2));

let soma = (a, b) => {
    return a + b;
}
console.log(soma(5, 2));

const quadrado = (x) => {
    return x * x;
}

console.log(quadrado(4));

// Maneira mais enchuta mas menos adequada
const multiplicaPor2 = x => x*2;
console.log(multiplicaPor2(10));
*/

// Recursion (Recursão)
function retornarNumeroPar(n){
    if (n % 2 == 0){
        console.log(`Número agora é par ${n}`);
    }else{
        console.log(`Número agora é impar ${n}`);
        return  retornarNumeroPar(n-1) + 'ou' + retornarNumeroPar(n+1);
    }
}

retornarNumeroPar(50);
retornarNumeroPar(49);