/* CONDIÇÕES MÚLTIPLAS */
/* usar SWITCH para valores definidos ex: 0,12 etc - para intervalos de valores usar IF */
var agora = new Date();
var diaSemana = agora.getDay();

/*
0 - domingo
1 - segunda
2 - terça
3 - quarta
4 - quinta
5 - sexta
6 - sábado
*/
/* diaSemana = 7 */

console.log(diaSemana);

switch (diaSemana) {
  case 0:
    console.log("domingo");
    break;
  case 1:
    console.log("segunda");
    break;
  case 2:
    console.log("terça");
    break;
  case 3:
    console.log("quarta");
    break;
  case 4:
    console.log("quinta");
    break;
  case 5:
    console.log("sexta");
    break;
  case 6:
    console.log("sábado");
    break;
  default:
    console.log("[ERRO] Dia inválido");
}
