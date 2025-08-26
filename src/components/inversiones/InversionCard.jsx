import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { valorFuturo, formatearMoneda } from "../../utils/inversiones";

export default function InversionCard({ inversion }) {
  // Prepara datos para el gráfico: cada punto es un año y el valor acumulado
  const graficoData = [];
  for (let i = 0; i <= inversion.años; i++) {
    graficoData.push({ año: i, valor: valorFuturo(inversion.monto, inversion.tasa, i) });
  }

  return (
    <div className="bg-gray-900 p-4 rounded-xl mb-6 shadow-lg">
      <h2 className="text-lg font-semibold text-gray-100 mb-2">Inversión {inversion.id}</h2>
      <div className="w-full" style={{ height: 220 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={graficoData} margin={{ top: 20, right: 40, left: 20, bottom: 20 }}>
            <CartesianGrid stroke="#555" />
            <XAxis dataKey="año" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip formatter={(value) => formatearMoneda(value)} />
            <Line type="monotone" dataKey="valor" stroke="#f87171" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
