let sumaM = 0, sumaT = 0, sumaN = 0;

for (let i = 1; i <= 5; i++) {
  sumaM += parseInt(prompt("Edad del estudiante del turno mañana " + i + ":"));
}
for (let i = 1; i <= 6; i++) {
  sumaT += parseInt(prompt("Edad del estudiante del turno tarde " + i + ":"));
}
for (let i = 1; i <= 11; i++) {
  sumaN += parseInt(prompt("Edad del estudiante del turno noche " + i + ":"));
}

let promM = sumaM / 5;
let promT = sumaT / 6;
let promN = sumaN / 11;

console.log(`Promedio mañana: ${promM.toFixed(2)}`);
console.log(`Promedio tarde: ${promT.toFixed(2)}`);
console.log(`Promedio noche: ${promN.toFixed(2)}`);

if (promM > promT && promM > promN)
  console.log("El turno mañana tiene el promedio mas alto.");
else if (promT > promN)
  console.log("El turno tarde tiene el promedio mas alto.");
else
  console.log("El turno noche tiene el promedio mas alto.");