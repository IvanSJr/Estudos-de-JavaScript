// Funções Built-in
// Prompt
let idade = prompt('Qual sua idade?');
console.log(idade);
let nome = prompt('Qual seu nome?');
console.log(`Seu nome é ${nome}`);

// Alert
alert('Bem vindo ao site!');
alert('Segunda mensagem');


// Math.x()
let n1 = prompt('Digite um número: ');
let n2 = prompt('Digite um número: ');
let n3 = prompt('Digite um número: ');
let n4 = prompt('Digite um número: ');
let maiorNumero = Math.max(n1, n2, n3, n4);
let menorNumero = Math.min(n1, n2, n3, n4);
console.log(`O maior número é o ${maiorNumero}`);
console.log(`O menor número é o ${menorNumero}`);

n5 = 5.22525;
n6 = 5.10222;
let arredondar = Math.round(n5);  // Arredonda para cima ou para baixo dependendo da segunda casa
let arrendondarParaCima = Math.ceil(n6);  // Sempre arredonda para cima
console.log(`O número era ${n5} arredondado ficou ${arredondar}`);
console.log(`O número era ${n6} arredondado para cima ficou ${arrendondarParaCima}`);