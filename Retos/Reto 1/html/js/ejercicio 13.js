var numero=Number (prompt(parseInt));
var signo= prompt("signo");
var numero2=Number( prompt(parseInt));
var resultado;

if(signo == "+"){
    resultado =  numero + numero2;
}
if(signo == "-"){
    resultado =  numero - numero2;
}
if(signo == "*"){
    resultado =  numero * numero2;
}
if(signo == "/"){
    resultado =  numero / numero2
}
console.log(resultado)
