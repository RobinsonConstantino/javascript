function verificar() {
  data = new Date();
  ano = data.getFullYear();
  fano = document.getElementById("txtano");
  res = document.querySelector("div#res");
  if (
    fano.value.leght == 0 ||
    Number(fano.value) > ano ||
    Number(fano.value) == ""
  ) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    fsex = document.getElementsByName("radsex");
    idade = ano - Number(fano.value);
    genero = "";
    img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade < 10) {
        //criança
        img.setAttribute("src", "imagens/crianca-m.png");
      } else if (idade < 18) {
        //adolescente
        img.setAttribute("src", "imagens/jovem-m.png");
      } else if (idade < 30) {
        //jovem
        img.setAttribute("src", "imagens/adulto-m.png");
      } else if (idade <= 65) {
        //adulto
        img.setAttribute("src", "imagens/adulto-m.png");
      } else {
        //idoso
        img.setAttribute("src", "imagens/idoso-m.png");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade < 10) {
        //criança
        img.setAttribute("src", "imagens/crianca-f.png");
      } else if (idade < 18) {
        //adolescente
        img.setAttribute("src", "imagens/jovem-f.png");
      } else if (idade < 30) {
        //jovem
        img.setAttribute("src", "imagens/adulto-f.png");
      } else if (idade <= 65) {
        //adulto
        img.setAttribute("src", "imagens/adulto-f.png");
      } else {
        //idoso
        img.setAttribute("src", "imagens/idoso-f.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Seu gênero é ${genero}, e sua idade é de ${idade} anos.`;
    res.appendChild(img);
  }
}
