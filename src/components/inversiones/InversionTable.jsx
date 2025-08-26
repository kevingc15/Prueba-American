import InversionRow from "./InversionRow";

export default function InversionTable({ inversiones }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-700 rounded-lg">
        <thead className="bg-gray-800 text-gray-300">
          <tr>
            <th className="px-6 py-3 text-left">ID Inversión</th>
            <th className="px-6 py-3 text-left">Monto Invertido</th>
            <th className="px-6 py-3 text-left">Rentabilidad Anual</th>
            <th className="px-6 py-3 text-left">Valor Futuro</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700 bg-gray-900 text-gray-200">
          {inversiones.map((inv) => (
            <InversionRow key={inv.id} inversion={inv} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
