/*// Exercicio 6
let v1 = 1;
let v2 = 1.1;
let v3 = 'João';
let v4 = true;
console.log(typeof v1);
console.log(typeof v2);
console.log(typeof v3);
console.log(typeof v4);

// Exercicio 7
let idade = 17;
if (idade >= 18){
    console.log('Pode entrar')
}else{
    console.log('Não pode entrar')
}

// Exercicio 8
let nome = 'Ivan';
if (nome === 'Ivan'){
    console.log('Bem vindo Ivan!')
}else{
    console.log(`Bem vindo ${nome}`)
}

// Exercicio 9
let base2 = Math.pow(2, 2);
let base3 = Math.pow(3, 2);
let base18 = Math.pow(18, 2);
console.log(base2);
console.log(base3);
console.log(base18);

// Exercicio 10
velocidade = 100;
if (velocidade > 80){
    console.log('Levou multa');
}else{
    console.log('Não levou multa');
}

// Exercicio 11
idade = 18;
cnh = true;
if (idade >= 18 && cnh){
    console.log('È maior de anos e tem cnh');
}else if (idade >= 18 && !(cnh)){
    console.log('É mairo de 18 anos e não tem');
}else if (idade < 18 && !(cnh)){
    console.log('Não tem 18 anos nem cnh');
}

// Exercicio 12
let i = 0
while (i <=10){
    console.log(i);
    i+=1;
}

// Exercicio 13
for (let i = 100; i >= 50; i-=1){
    console.log(i);
}

// Exercicio 14
for (let i = 0; i<=50; i+=1){
    if (i % 2 == 0){
        console.log(`${i} é par`)
    }else{
        console.log(`${i} é impar`)
    }
}*/

// Exercicio 15
let numero = prompt('Digite um número: ');
controlador = 0;
for (let i = 1; i <= numero; i+=1){
    if (numero % i == 0){
        controlador += 1;
    }
}
if (controlador == 2){
    console.log(`O número ${numero} é primo.`);
}else{
    console.log('Não é primo!')
}