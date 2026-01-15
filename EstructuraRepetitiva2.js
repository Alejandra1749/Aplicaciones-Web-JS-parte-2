let numeros = [];
for (let i = 1; i <= 10; i++) {
  numeros.push(parseInt(prompt("Ingrese numero " + i + ":")));
}

let suma = 0;
for (let i = 5; i < 10; i++) {
  suma += numeros[i];
}
console.log("La suma de los ultimos 5 numeros es: " + suma);