var arr = [];
var tamaño = Number(prompt("Tamaño"));
var suma=0;



for (let i=0; i <= tamaño; i++) {
  var datoIntroducir = prompt("Que quieres meter");
  arr.push(getRandom());
  suma += arr.push(getRandom());
}




function getRandom() {
   return Math.floor(Math.random() * 10);
}

console.log(suma);

console.log(getRandom());
console.log(arr.length);
console.log(arr);
console.log(datoIntroducir);
console.log(datoIntroducir.length);