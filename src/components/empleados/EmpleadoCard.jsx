import { formatearMoneda } from "../../utils/bono";

export default function EmpleadoCard({ empleado }) {
  let porcentaje = "0%";
  if (empleado.rol.toLowerCase() === "ejecutivo") porcentaje = "10%";
  if (empleado.rol.toLowerCase() === "analista") porcentaje = "5%";

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 shadow-md">
      <p>
        <span className="font-semibold text-gray-400">ID:</span> {empleado.id}
      </p>
      <p>
        <span className="font-semibold text-gray-400">Nombre:</span> {empleado.nombre}
      </p>
      <p>
        <span className="font-semibold text-gray-400">Rol:</span> {empleado.rol}
      </p>
      <p>
        <span className="font-semibold text-gray-400">Salario:</span> {formatearMoneda(empleado.salario)}
      </p>
      <p className="text-red-400 font-semibold">
        <span className="font-semibold text-gray-400">Bono:</span> {formatearMoneda(empleado.bono)}{" "}
        <span className="text-gray-400">({porcentaje})</span>
      </p>
    </div>
  );
}