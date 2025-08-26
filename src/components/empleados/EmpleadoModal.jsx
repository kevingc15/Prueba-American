import { useState } from "react";

export default function EmpleadoModal({ onClose, onSave }) {
  const [form, setForm] = useState({
    nombre: "",
    rol: "analista",
    salario: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const salarioNumber = Number(form.salario);

    // Validación: salario no negativo
    if (salarioNumber < 0) {
      alert("El salario no puede ser negativo.");
      return;
    }

    const nuevoEmpleado = {
      ...form,
      salario: salarioNumber,
    };

    // Pasar al estado en frontend
    onSave(nuevoEmpleado);

    // Reset form
    setForm({ nombre: "", rol: "analista", salario: "" });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-gray-900 rounded-2xl shadow-xl p-6 w-full max-w-sm md:max-w-md lg:max-w-lg">
        <h2 className="text-2xl font-semibold mb-6 text-gray-100 text-center">
          Nuevo Empleado
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            className="w-full border border-gray-700 bg-gray-800 text-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <select
            name="rol"
            value={form.rol}
            onChange={handleChange}
            className="w-full border border-gray-700 bg-gray-800 text-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="analista">Analista</option>
            <option value="ejecutivo">Ejecutivo</option>
          </select>
          <input
            type="number"
            name="salario"
            placeholder="Salario"
            value={form.salario}
            onChange={handleChange}
            required
            className="w-full border border-gray-700 bg-gray-800 text-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <div className="flex justify-end space-x-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
