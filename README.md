# Sistema de Gestión Financiera

Este proyecto es una aplicación web desarrollada con **React.js**, que permite gestionar empleados, préstamos e inversiones de manera interactiva y responsiva. Los datos se almacenan en archivos JSON locales (`data/empleados.json`, `data/prestamos.json`, `data/inversiones.json`).

---

## 📁 Estructura del Proyecto

/src
/components
/empleados
- EmpleadosTable.jsx
- EmpleadoModal.jsx
- EmpleadoRow.jsx
- BotonAgregar.jsx
/prestamos
- PrestamoCard.jsx
/inversiones
- InversionCard.jsx
- InversionTable.jsx
- InversionRow.jsx
/data
- empleados.json
- prestamos.json
- inversiones.json
/utils
- bono.js
- prestamos.js
- inversiones.js
/pages
- Empleados.jsx
- Prestamos.jsx
- Inversiones.jsx

App.jsx

index.jsx

---

## 🖥️ Funcionalidades

### Empleados
- Muestra empleados en **tabla** (desktop/tablet) y **cards**.
- Calcula automáticamente el **bono** según el rol:
  - Ejecutivo → 10%
  - Analista → 5%
- Agrega nuevos empleados a través de un **modal**.
- Mantiene una estética y diseño moderno con TailwindCSS.

### Préstamos
- Listar préstamos en **cards responsivas**.
- Filtra préstamos por empleado.
- Calcula automáticamente la **cuota mensual** usando la fórmula de amortización.
- Mantiene una estética y diseño moderno con TailwindCSS.

### Inversiones
- Muestra gráficos individuales por inversión usando **Recharts**.
- Gráficos con datos de **valor futuro** por año.
- Lista todas las inversiones en una **tabla**:
  - ID inversión
  - Monto invertido
  - Rentabilidad anual
  - Valor futuro calculado.

---

## 🎨 Estilo
- **Colores**:
  - Fondo principal: `bg-gray-900`
  - Texto general: `text-gray-200`
  - Títulos y cabeceras: `text-gray-100`
  - Botones principales: `bg-red-600` con `hover:bg-red-700`.

---

## ⚙️ Utilidades (utils)

### bono.js
- `calcularBono(rol, salario)` → Calcula el bono según el rol.
- `formatearMoneda(valor)` → Formatea números a moneda COP.

### prestamos.js
- `calcularCuota(monto, plazo, tasa)` → Calcula cuota mensual de un préstamo.
- `formatearMoneda(valor)` → Formatea números a moneda COP.

### inversiones.js
- `valorFuturo(monto, tasa, años)` → Calcula valor futuro de la inversión.
- `formatearMoneda(valor)` → Formatea números a moneda COP.

---

## 🛠️ Tecnologías utilizadas
- React.js
- TailwindCSS
- Recharts
- JavaScript (ES6+)

---

## 🚀 Cómo ejecutar el proyecto

1. Clonar el repositorio:
git clone <tu-repositorio>
cd <Frontend>
2. Instalar dependencias:
npm install
3. Ejecutar el proyecto:
npm run dev