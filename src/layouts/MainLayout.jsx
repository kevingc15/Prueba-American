import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      <main className="flex-1 bg-gray-800 p-6 text-gray-100">
        <Outlet />
      </main>
    </div>
  );
}
