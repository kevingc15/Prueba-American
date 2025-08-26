import { useState } from "react";
import prestamosData from "../data/prestamos.json";
import PrestamoCard from "../components/prestamos/PrestamoCard";

export default function Prestamos() {
  const [filtroEmpleado, setFiltroEmpleado] = useState("");

  const prestamosFiltrados = prestamosData.filter((p) =>
    filtroEmpleado ? p.empleado === filtroEmpleado : true
  );

  const empleados = [...new Set(prestamosData.map((p) => p.empleado))];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-100 mb-4">Gestión de Préstamos</h1>

      {/* Filtro por empleado */}
      <div className="mb-4">
        <label className="text-gray-300 mr-2">Filtrar por empleado:</label>
        <select
          value={filtroEmpleado}
          onChange={(e) => setFiltroEmpleado(e.target.value)}
          className="px-3 py-2 rounded bg-gray-800 text-gray-100"
        >
          <option value="">Todos</option>
          {empleados.map((emp) => (
            <option key={emp} value={emp}>{emp}</option>
          ))}
        </select>
      </div>

      {/* Lista de cards de préstamos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {prestamosFiltrados.map((prestamo) => (
          <PrestamoCard key={prestamo.id} prestamo={prestamo} />
        ))}
      </div>
    </div>
  );
}
