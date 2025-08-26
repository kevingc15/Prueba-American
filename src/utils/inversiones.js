export function valorFuturo(monto, tasaAnual, años) {
  return monto * Math.pow(1 + tasaAnual, años);
}

// Formatear dinero
export function formatearMoneda(valor) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(valor);
}