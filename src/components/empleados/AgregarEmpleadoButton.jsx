export default function AgregarEmpleadoButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 bg-red-600 text-white font-semibold rounded-xl shadow-md hover:bg-red-700 transition-colors duration-300"
    >
      + Agregar Empleado
    </button>
  );
}
