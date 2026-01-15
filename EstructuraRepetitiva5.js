let equilatero = 0, isosceles = 0, escaleno = 0;

for (let i = 1; i <= 4; i++) {
  let lado1 = parseFloat(prompt(`Ingrese el primer lado del triangulo ${i}:`));
  let lado2 = parseFloat(prompt(`Ingrese el segundo lado del triangulo ${i}:`));
  let lado3 = parseFloat(prompt(`Ingrese el tercer lado del triangulo ${i}:`));

  if (lado1 === lado2 && lado2 === lado3) {
    console.log(`Triangulo ${i}: equilatero`);
    equilatero++;
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log(`Triangulo ${i}: isosceles`);
    isosceles++;
  } else {
    console.log(`Triangulo ${i}: escaleno`);
    escaleno++;
  }
}

console.log(`Equilateros: ${equilatero}`);
console.log(`Isosceles: ${isosceles}`);
console.log(`Escalenos: ${escaleno}`);

let menor = Math.min(equilatero, isosceles, escaleno);
if (menor === equilatero) console.log("Hay menos triangulos equilateros.");
else if (menor === isosceles) console.log("Hay menos triangulos isosceles.");
else console.log("Hay menos triangulos escalenos.");