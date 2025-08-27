import { calcularBono, formatearMoneda } from "../../utils/bono";

export default function EmpleadoRow({ empleado }) {
  let porcentaje = "0%";
  if (empleado.rol.toLowerCase() === "ejecutivo") porcentaje = "10%";
  if (empleado.rol.toLowerCase() === "analista") porcentaje = "5%";
  return (
    <tr className="hover:bg-gray-800 transition">
      {" "}
      <td className="px-4 py-2">{empleado.id}</td>{" "}
      <td className="px-4 py-2">{empleado.nombre}</td>{" "}
      <td className="px-4 py-2">{empleado.rol}</td>{" "}
      <td className="px-4 py-2">{formatearMoneda(empleado.salario)}</td>{" "}
      <td className="px-4 py-2 text-red-400 font-semibold">
        {" "}
        {formatearMoneda(empleado.bono)}{" "}
        <span className="text-gray-400">({porcentaje})</span>{" "}
      </td>{" "}
    </tr>
  );
}
