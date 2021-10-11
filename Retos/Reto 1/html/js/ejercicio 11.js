var laborales="lunes"; "martes"; "miercoles";"jueves";"viernes";
var nolaborales="sabado"; "domingo";
var dia=prompt("que dia")
switch (dia) {
    case laborales:
        console.log("laboral")
        break;
    case nolaborales:
        console.log("no laboral")
    default:
        break;
}