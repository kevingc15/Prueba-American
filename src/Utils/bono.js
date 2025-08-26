export function calcularBono(rol, salario) {
  if (rol.toLowerCase() === "ejecutivo") return salario * 0.1;
  if (rol.toLowerCase() === "analista") return salario * 0.05;
  return 0;
}

export function formatearMoneda(valor) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(valor);
}
