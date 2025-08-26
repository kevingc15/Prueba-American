import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Empleados from "../pages/Empleados";
import Prestamos from "../pages/Prestamos";
import Inversiones from "../pages/Inversiones";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Redirigir la raíz al listado de empleados */}
          <Route index element={<Navigate to="empleados" replace />} />
          
          <Route path="empleados" element={<Empleados />} />
          <Route path="prestamos" element={<Prestamos />} />
          <Route path="inversiones" element={<Inversiones />} />

          {/* Si no existe, también redirige a empleados */}
          <Route path="*" element={<Navigate to="empleados" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}
