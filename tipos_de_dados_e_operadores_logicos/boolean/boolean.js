// Valores Boleanos (Verdadeiro e Falso)
console.log(5 > 3) // True
console.log(5 < 3) // False
console.log(5+9 <= 5+9) // True
console.log(5+9 == 5+9)  // True Operador de igual é ==
console.log('11' == 11) // True
console.log('11' === 11)  // False === compara o tipo e o valor.
console.log(11 != 20)  // True

// Boolean Operadores Logicos

// && - And As duas devem ser True para retornar True
console.log(5 > 9 && 9 > 8); // False por que 5 > 9
console.log(20 > 10 && 5 != 9); // True

// || - Or Apenas uma deve ser True para retorna true
console.log(5 > 9 || 9 > 8); // True
console.log(10 != 10 || 9 > 50);  // False 

// ! - not Inverte o operador se for True vira False e Vice versa
console.log(!true);  // false
console.log(!false);  // true
console.log(!(10 == 10 && 50 > 40))  // false 

// Operadores ternários
console.log(true ? 1:2);  // Se for true retorna 1, se não retorna 2
console.log(8 > 9 ? 'Sim':'Não');  // Não
console.log('Matheus' === 'Matheus' ? 'É o Matheus':'Não é o Matheus');  // É o Matheus