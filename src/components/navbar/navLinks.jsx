import { Link } from "react-router-dom";

export default function NavLinks({ isMobile = false, onClick }) {
  const classes = isMobile
    ? "block text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
    : "text-gray-200 hover:text-red-500 transition";

  const containerClasses = isMobile ? "flex flex-col" : "flex space-x-6";

  return (
    <div className={containerClasses}>
      <Link to="/empleados" className={classes} onClick={onClick}>
        Empleados
      </Link>
      <Link to="/prestamos" className={classes} onClick={onClick}>
        Préstamos
      </Link>
      <Link to="/inversiones" className={classes} onClick={onClick}>
        Inversiones
      </Link>
    </div>
  );
}
