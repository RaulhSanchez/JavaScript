var numero1=Number (prompt("añdade numero"));
var signo=(prompt("añdade operacion"));
var numero2=Number (prompt("añdade numero"));
var resultado;

function calculadora(){
    if(signo == "+"){
        resultado =  numero1 + numero2;
        console.log(resultado);
    }   
}
calculadora()