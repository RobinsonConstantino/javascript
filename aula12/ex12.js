/* CONDIÇÕES COMPOSTAS */

hora = 3;
/*var hora = 8 */
console.log(`Agora são ${hora} horas.`);
if (hora < 12) {
  console.log("Bom dia!  :- )");
} else if (hora < 18) {
  console.log("Boa tarde!  :- )");
} else {
  console.log("Boa noite! :- )");
}
/*------------------------------------------------------*/

var agora = new Date();
var hora = agora.getHours();
console.log(`Agora são ${hora} horas.`);
if (hora < 12) {
  console.log("Bom dia!  :- )");
} else if (hora < 18) {
  console.log("Boa tarde!  :- )");
} else {
  console.log("Boa noite! :- )");
}
