let idade = 19
if (idade >= 18){
    console.log(`É de maior! Tem ${idade} anos!`);
}

let nome = 'Pedro'
if (nome === 'Ivan'){
    console.log('Seu nome é Ivan')
}else{
    console.log(`Seu nome é ${nome}`);
}

let a = 5;
let b = 5;

if (a + b == 11){
    console.log('Seu resuldado é 11');
}else if (a == 10){
    console.log('O valor de A é 10');
}else if (a * b == a + b){
    console.log('a + b é igual a a * b');
}else{
    console.log('Nenhuma das condições a cima!');  // Essa
}

// Switch
let nome = 'joão';
switch (nome) {
    case "João":
        console.log('Seu nome é João');
        break;
    case 'Pedro':
        console.log('Seu nome é Pedro')
        break;
    default:
        console.log('Seu nome não é nem João nem Pedro');  // CaseSensitive
        break;
}

