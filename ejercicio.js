function suma(numeros) {
  let sumatoria = 0;
  for (let numero of numeros) {
    if (numero > 7) {
      sumatoria = sumatoria + numero;
    }
  }
  return console.log(sumatoria);
}

suma([2, 5, 9, 8, 11]);
