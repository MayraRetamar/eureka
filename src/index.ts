let contador: number = 1;
let contraseña: string;

while (contador <= 3 && contraseña != "eureka") {
  contador = contador + 1;
  contraseña = prompt("Ingrese la contraeña");
}
if (contraseña === "eureka") {
  console.log("Contraseña correcta");
} else {
  console.log("Agoto las posibilidades");
}
