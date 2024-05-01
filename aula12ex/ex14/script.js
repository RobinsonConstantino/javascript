function carregar() {
  var img = window.document.getElementById("imagem");
  var msg = window.document.getElementById("msg");
  var data = new Date();
  var hora = data.getHours();
  //var hora = 22; // Teste
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora < 12) {
    //Bom dia! :-)
    img.src = "imagens/manha.png";
    document.body.style.background = "#40c9ff";
  } else if (hora < 18) {
    //BOA TARDE
    img.src = "imagens/tarde.png";
    document.body.style.background = "#0000ff";
  } else {
    //BOA NOITE
    img.src = "imagens/noite.png";
    document.body.style.background = "#000068";
  }
}
