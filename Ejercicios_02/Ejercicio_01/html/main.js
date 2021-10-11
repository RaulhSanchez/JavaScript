var figura= prompt("Que figura quieres calcular");
//var valor_01=Number(prompt("Valor 1"))
//var valor_02=Number(prompt("Valor 2"))
var circulo= "circulo";
var cuadrado="Cuadrado";
var triangulo="triangulo";
var resultado;

switch (figura) {
    case circulo:
        var valor_01=Number(prompt("Valor 1"));
        resultado=(valor_01 ^ 2)*Math.PI;
        console.log(resultado);
        break;
    case cuadrado:
        var valor_01=Number(prompt("valor 1"));
        resultado = 2*(valor_01);
        console.log(resultado);
        break;
    case triangulo:
        var valor_01=Number(prompt("Valor 1"))
        var valor_02=Number(prompt("Valor 2"))
        resultado = (valor_01 * valor_02) /2;
        console.log(resultado);
    default:
        break;
}