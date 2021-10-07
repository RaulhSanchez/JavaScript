var insuficiente ="insuficiente";
var suficiente="suficiente";
var notable="notable";
var sobresaliente="sobresaliente";
var nota=prompt("escribe tu nota");





if(nota ===0 || nota <=4){
    alert(insuficiente);
}
if (nota ==5 || nota ==6 ) {
    alert(suficiente);
} 
if (nota ==7 || nota ==8 ) {
    alert(notable);
} 
if (nota ==9 || nota ==10 ) {
    alert(sobresaliente);
} 
