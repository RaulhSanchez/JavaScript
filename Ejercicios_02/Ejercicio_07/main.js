var numero =Number(prompt("numero"));
var moneda=prompt("moneda");
var libra="libra";
var dolar="dolar";
var yenes="yenes";
var resultado;

switch (moneda) {
    case libra:
        resultado = 0.86 * numero;
        break;
    case dolar:
        resultado = 1.28611 * numero;
        break;
    case yenes:
        resultado = 129.852 * numero;
    default:
        break;
}
console.log(resultado);  

