import { useState } from "react";
import EmpleadosTable from "../components/empleados/EmpleadosTable";
import EmpleadoModal from "../components/empleados/EmpleadoModal";
import { calcularBono } from "../utils/bono";
import empleadosData from "../data/empleados.json";
import AgregarEmpleadoButton from "../components/empleados/AgregarEmpleadoButton";

export default function Empleados() {
  const [empleados, setEmpleados] = useState(
    empleadosData.map((emp) => ({
      ...emp,
      bono: calcularBono(emp.rol, emp.salario),
    }))
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const agregarEmpleado = (nuevo) => {
    const empleadoConBono = {
      ...nuevo,
      id: empleados.length + 1,
      salario: Number(nuevo.salario),
      bono: calcularBono(nuevo.rol, nuevo.salario),
    };
    setEmpleados([...empleados, empleadoConBono]);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h1 className="text-3xl font-bold text-white mb-6 text-center sm:text-left">
          Gestión de Empleados
        </h1>

        {/* Tabla de empleados */}
        <div className="overflow-x-auto bg-gray-800 rounded-2xl shadow-md p-4">
          <EmpleadosTable empleados={empleados} />
        </div>

        <div className="flex justify-center sm:justify-end mt-6">
          <AgregarEmpleadoButton onClick={() => setIsModalOpen(true)} />
        </div>

        {/* Modal */}
        {isModalOpen && (
          <EmpleadoModal
            onClose={() => setIsModalOpen(false)}
            onSave={agregarEmpleado}
          />
        )}
      </div>
    </div>
  );
}
