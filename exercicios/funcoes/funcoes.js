// função que imprime hello word
function ola(){
    console.log('Hello Word!');
}

// função que recebe o parametro de idade
function olaIdade(idade){
    console.log(`Olá você tem ${idade} anos.`);
}

// função que soma dois numeros e imprime ele
function soma(a, b){
    return `${a} + ${b} é igual a ${a+b}`;
}
console.log(soma(5, 1));

// função que retorna um numero aleatorio
function random(maior){
    return Math.floor(Math.random() * maior) + 1;
}
console.log(random(100));
console.log(random(10));
console.log(random(5));

// Função que recebe idade de pessoa e se ela pode entrar 
function podeAuto(idade){
    if (idade >= 18){
        return 'Você pode entrar na auto-escola.'
    }else{
        return 'Você é de menor e não pode entrar na auto escola'
    }
}

console.log(podeAuto(17));
console.log(podeAuto(20));

// Escreva uma função que retorna o tipo de dado
function tipoDado(dado){
    if (typeof dado == 'number'){
        return 'É um número';
    }else if (typeof dado == 'string'){
        return 'É um string';
    }else if (typeof dado == 'boolean'){
        return 'É um boleano';
    }else if (typeof dado == 'undefined'){
        return 'É indefinido';
    }
}

console.log(tipoDado(5));
console.log(tipoDado('5'));
console.log(tipoDado(true));
console.log(tipoDado());

// Função que recebe um valor negativo e retorna positivo
function valorAbsoluto(n){
    return Math.abs(n);
}
console.log(valorAbsoluto(-800));

// Função que recebe uma string e se o texto conter mais de 10 imprime texto muito longo
function textoVerifica(texto){
    if (texto.length > 10){
        return 'Texto muito longo';
    }else{
        return 'Texto dentro do limite';
    }
}

console.log(textoVerifica('aaaaaa'));

// Função que recebe dois números e retorna base e potencia
function potencia(base, potencia){
    return Math.pow(base, potencia);
}
console.log(potencia(5, 5));

// Imprima uma função que decrementa de 1 em 1 e apresenta os numeros pares do console
function decrementaNumero(n){
    let cont = n;
    let decrementaContador = function(){
        if (cont % 2 == 0){
            console.log(cont);
        }
        cont --;
    }
    return decrementaContador;
}

console.log(decrementaNumero(10));