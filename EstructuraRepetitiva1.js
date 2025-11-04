let mayor12 = 0;

for (let i = 1; i <= 3; i++) {
  let base = parseFloat(prompt("Ingrese la base del triangulo " + i + ":"));
  let altura = parseFloat(prompt("Ingrese la altura del triangulo " + i + ":"));
  let superficie = (base * altura) / 2;
  console.log(`Triangulo ${i}: base=${base}, altura=${altura}, superficie=${superficie}`);

  if (superficie > 12) {
    mayor12++;
  }
}
console.log("Cantidad de triangulos con superficie mayor a 12: " + mayor12);