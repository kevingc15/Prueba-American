import empleadosData from "../data/empleados.json";

// Cargar empleados desde mock
export function getEmpleados() {
  return empleadosData;
}

// Agregar un empleado nuevo
export function addEmpleado(empleados, nuevo) {
  return [
    ...empleados,
    {
      id: empleados.length + 1,
      ...nuevo,
      salario: parseFloat(nuevo.salario)
    }
  ];
}