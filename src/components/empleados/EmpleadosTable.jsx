import { calcularBono, formatearMoneda } from "../../utils/bono";
import EmpleadoRow from "./EmpleadoRow"
import EmpleadoCard from "./EmpleadoCard";

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
