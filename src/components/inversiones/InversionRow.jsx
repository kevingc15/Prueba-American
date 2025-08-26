import { valorFuturo, formatearMoneda } from "../../utils/inversiones";

export default function InversionRow({ inversion }) {
  return (
    <tr className="hover:bg-gray-800 transition">
      <td className="px-6 py-3">{inversion.id}</td>
      <td className="px-6 py-3">{formatearMoneda(inversion.monto)}</td>
      <td className="px-6 py-3">{(inversion.tasa * 100).toFixed(2)}%</td>
      <td className="px-6 py-3">{formatearMoneda(valorFuturo(inversion.monto, inversion.tasa, inversion.años))}</td>
    </tr>
  );
}
