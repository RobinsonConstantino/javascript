function parimpar(n) {
  if (n % 2 == 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

console.log(parimpar(7));

// ou
let res = parimpar(2);
console.log(res);

// parimpar: é a chamada
// (7), (2): são parâmetros
