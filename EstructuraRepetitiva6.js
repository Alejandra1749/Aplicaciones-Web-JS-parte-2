let n = parseInt(prompt("Ingrese la cantidad de puntos a procesar:"));
let c1 = 0, c2 = 0, c3 = 0, c4 = 0;

for (let i = 1; i <= n; i++) {
  let x = parseFloat(prompt("Ingrese coordenada X del punto " + i + ":"));
  let y = parseFloat(prompt("Ingrese coordenada Y del punto " + i + ":"));

  if (x > 0 && y > 0) c1++;
  else if (x < 0 && y > 0) c2++;
  else if (x < 0 && y < 0) c3++;
  else if (x > 0 && y < 0) c4++;
}

console.log(`1° cuadrante: ${c1}`);
console.log(`2° cuadrante: ${c2}`);
console.log(`3° cuadrante: ${c3}`);
console.log(`4° cuadrante: ${c4}`);