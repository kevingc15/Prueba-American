import { useState } from "react";
import inversionesData from "../data/inversiones.json";
import InversionCard from "../components/inversiones/InversionCard";
import InversionTable from "../components/inversiones/InversionTable";

export default function Inversiones() {
  const [inversiones] = useState(inversionesData);

  return (
    <div className="p-6 min-h-screen bg-gray-900">
      <h1 className="text-2xl font-bold text-gray-100 mb-6 text-center sm:text-left">
        Gestión de Inversiones
      </h1>

      {/* Gráficos */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {inversiones.map((inv) => (
          <InversionCard key={inv.id} inversion={inv} />
        ))}
      </div>

      {/* Tabla de inversiones */}
      <div className="bg-gray-800 p-4 rounded-2xl shadow-md">
        <InversionTable inversiones={inversiones} />
      </div>
    </div>
  );
}
