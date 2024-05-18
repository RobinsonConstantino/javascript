let amigo = {
  nome: "Robi",
  sexo: "M",
  peso: 73, // -- EM NÚMERO NÃO PÕE ASPAS (SE FOR PRA SER CALCULADO)
  engordar(p = 0) {
    console.log("Engordou");
    this.peso += p;
  },
};

amigo.engordar(5.0);
console.log(`${amigo.nome} pesa ${amigo.peso} kg.`);
