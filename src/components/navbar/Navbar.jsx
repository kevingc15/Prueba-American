import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./navLinks";
import HamburgerButton from "./HamburgerButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-gray-200 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Links Desktop / Tablet */}
          <div className="hidden sm:flex md:space-x-6 lg:space-x-8">
            <NavLinks />
          </div>

          {/* Botón hamburguesa */}
          <HamburgerButton open={open} toggle={() => setOpen(!open)} />
        </div>
      </div>

      {/* Menú Mobile */}
      <div
        className={`md:hidden bg-gray-800 overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <NavLinks isMobile onClick={() => setOpen(false)} />
      </div>
    </nav>
  );
}
