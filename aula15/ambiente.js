// -- EXPLICAÇÃO --

//let num = [1, 2, 3, 4, 5]
//let num[5] = 11  - nessa declaração temos que o quinto elemento [5] receberá a variável 11:
//let num = [1, 2, 3, 4, 5, 11]
//ELEMENTOS  0 -1 -2 -3 -4 - 5
// let pode ser substituído por var
// 1, 2, 3, 4, 5 são as variáveis
// 4 são os elementos, começando do zero (0, 1, 2, 3, 4) - temos 5 elementos

//num.push(x): PUSH significa que o último elemento receberá a variável x
//num.length: conta quantos elementos existem. não há parênteses no fim do atributo length:
//num.sort: coloca os elementos em ordem crescente

//------------------------------------

//let num = [1, 2, 3, 4, 5];

//console.log(`Nosso vetor é o ${num}`);
/*num.sort();
num.push(11);
console.log(num);
console.log(`Nosso vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);*/

// -- FOR -- da forma tradicional

//let num = [9, 3, 5, 2, 1];

for (let pos = 0; pos < num.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${num[pos]} `);
}

//-------------------------------------

// -- FOR IN -- da forma simples

let num = [9, 3, 5, 2, 1];
num.sort();

for (let pos in num) {
  console.log(`A posição ${pos} tem o valor ${num[pos]} `);
}

//------------------------------------

// num.indexOf(x); -- busca o valor x entre as variáveis e retorna a posição do respectivo elemento (chave)
// caso não encontre o valor (x) entre os elementos, retornará -1

let num = [9, 3, 5, 2, 1];
num.sort();
console.log(num);
let pos = num.indexOf(4);

if (pos == -1) {
  console.log("O valor não foi encontrado.");
} else {
  console.log(`O valor procurado está na posição ${pos}`);
}
