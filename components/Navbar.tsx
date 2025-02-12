import Link from "next/link";

const Navbar: React.FC = () => (
  <nav className="p-4 shadow-md flex justify-between items-center bg-white">
    <h1 className="text-xl font-bold">Descubrimientos Científicos</h1>
    <ul className="flex gap-4">
      <li><Link href="/" className="text-gray-700 hover:text-black">Inicio</Link></li>
      <li><Link href="/about" className="text-gray-700 hover:text-black">Acerca</Link></li>
    </ul>
  </nav>
);

export default Navbar;
