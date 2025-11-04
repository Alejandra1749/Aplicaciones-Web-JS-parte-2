let negativos = 0, positivos = 0, multiplos15 = 0, sumaPares = 0;

for (let i = 1; i <= 10; i++) {
  let num = parseInt(prompt("Ingrese el valor " + i + ":"));

  if (num < 0) negativos++;
  if (num > 0) positivos++;
  if (num % 15 === 0) multiplos15++;
  if (num % 2 === 0) sumaPares += num;
}

console.log("Negativos: " + negativos);
console.log("Positivos: " + positivos);
console.log("Multiplos de 15: " + multiplos15);
console.log("Suma de numeros pares: " + sumaPares);