let num = parseInt(prompt("Ingrese un numero del 1 al 10:"));
if (num >= 1 && num <= 10) {
  for (let i = 1; i <= 12; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
} else {
  console.log("Numero fuera de rango.");
}