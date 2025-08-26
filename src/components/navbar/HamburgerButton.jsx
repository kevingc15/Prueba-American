export default function HamburgerButton({ open, toggle }) {
  return (
    <div className="sm:hidden">
      <button
        onClick={toggle}
        className="text-gray-200 hover:text-red-500 focus:outline-none text-2xl"
      >
        {open ? "✕" : "☰"}
      </button>
    </div>
  );
}
