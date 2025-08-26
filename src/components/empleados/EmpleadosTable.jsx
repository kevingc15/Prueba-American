import { calcularBono, formatearMoneda } from "../../utils/bono";

// Componente para fila de tabla
function EmpleadoRow({ empleado }) {
  let porcentaje = "0%";
  if (empleado.rol.toLowerCase() === "ejecutivo") porcentaje = "10%";
  if (empleado.rol.toLowerCase() === "analista") porcentaje = "5%";

  return (
    <tr className="hover:bg-gray-800 transition">
      <td className="px-4 py-2">{empleado.id}</td>
      <td className="px-4 py-2">{empleado.nombre}</td>
      <td className="px-4 py-2">{empleado.rol}</td>
      <td className="px-4 py-2">{formatearMoneda(empleado.salario)}</td>
      <td className="px-4 py-2 text-red-400 font-semibold">
        {formatearMoneda(empleado.bono)}{" "}
        <span className="text-gray-400">({porcentaje})</span>
      </td>
    </tr>
  );
}

// Componente para card
function EmpleadoCard({ empleado }) {
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

export default function EmpleadosTable({ empleados }) {
  return (
    <div className="overflow-x-auto">
      {/* Tabla Desktop / Tablet */}
      <table className="hidden sm:table min-w-full border border-gray-700 rounded-lg">
        <thead className="bg-gray-800 text-gray-300">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Nombre</th>
            <th className="px-4 py-2 text-left">Rol</th>
            <th className="px-4 py-2 text-left">Salario</th>
            <th className="px-4 py-2 text-left">Bono</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700 bg-gray-900 text-gray-200">
          {empleados.map((emp) => (
            <EmpleadoRow key={emp.id} empleado={emp} />
          ))}
        </tbody>
      </table>

      {/* Cards Mobile */}
      <div className="block sm:hidden space-y-4 mt-4">
        {empleados.map((emp) => (
          <EmpleadoCard key={emp.id} empleado={emp} />
        ))}
      </div>
    </div>
  );
}
