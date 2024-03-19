function simuladorPagoCuotas() {
  let monto, cuotas;

  // Ciclo para solicitar al usuario que ingrese el monto hasta que sea válido
  while (true) {
    monto = parseFloat(prompt("Ingrese el monto a pagar:"));
    if (!isNaN(monto) && monto > 0) {
      break;
    }
    alert("Por favor, ingrese un monto válido mayor que cero.");
  }

  // Ciclo para solicitar al usuario que ingrese la cantidad de cuotas hasta que sea válida
  while (true) {
    cuotas = parseInt(
      prompt("Ingrese la cantidad de cuota sin interés (3, 6, 12):")
    );
    if ([3, 6, 12].includes(cuotas)) {
      break;
    }
    alert("Por favor, ingrese una cantidad de cuotas válida.");
  }

  // Calcular el monto final dependiendo de las cuotas seleccionadas
  let montoFinal;
  switch (cuotas) {
    case 3:
      montoFinal = Math.floor(monto / 3);
      break;
    case 6:
      montoFinal = Math.floor(monto / 6);
      break;
    case 12:
      montoFinal = Math.floor(monto / 12);
      break;
    case 18:
      montoFinal = Math.floor(monto / 18);
      break;
  }

  // Mostrar el monto final al usuario
  alert("El monto final a pagar en " + cuotas + " cuotas es: $" + montoFinal);

  // Imprimir el resultado por consola
  console.log("Monto final a pagar en " + cuotas + " cuotas: $" + montoFinal);
}

// Llamar a la función para iniciar el simulador
simuladorPagoCuotas();
