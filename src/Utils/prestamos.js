export function calcularCuota(monto, plazo, tasaAnual) {
  const i = tasaAnual / 12; // interés mensual
  return (monto * i) / (1 - Math.pow(1 + i, -plazo));
}

// Formatear dinero en COP
export function formatearMoneda(valor) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(valor);
}