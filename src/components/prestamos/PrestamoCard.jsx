import { calcularCuota, formatearMoneda } from "../../utils/prestamos";

export default function PrestamoCard({ prestamo }) {
  const cuota = calcularCuota(prestamo.monto, prestamo.plazo, prestamo.tasa);

  return (
    <div className="bg-gray-900 rounded-xl shadow-lg p-4 text-gray-100">
      <h2 className="text-lg font-semibold mb-2">{prestamo.empleado}</h2>
      <p>
        <span className="font-bold">Monto:</span> {formatearMoneda(prestamo.monto)}
      </p>
      <p>
        <span className="font-bold">Plazo:</span> {prestamo.plazo} meses
      </p>
      <p>
        <span className="font-bold">Tasa:</span> {(prestamo.tasa * 100).toFixed(2)}%
      </p>
      <p>
        <span className="font-bold">Cuota mensual:</span> {formatearMoneda(cuota)}
      </p>
    </div>
  );
}
