import { calcularBono } from "../../utils/empleadoUtils";

export default function EmpleadoRow({ empleado }) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="p-3 border">{empleado.id}</td>
      <td className="p-3 border">{empleado.nombre}</td>
      <td className="p-3 border capitalize">{empleado.rol}</td>
      <td className="p-3 border">${empleado.salario.toLocaleString()}</td>
      <td className="p-3 border">
        ${calcularBono(empleado.rol, empleado.salario).toLocaleString()}
      </td>
    </tr>
  );
}
