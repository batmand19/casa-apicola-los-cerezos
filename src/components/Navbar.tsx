export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 text-white border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <div>
          <h1 className="text-xl md:text-2xl font-semibold tracking-wide">
            Casa Apícola Los Cerezos
          </h1>
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium">

          <a href="#inicio" className="hover:text-[#c98b2e] transition">
            Inicio
          </a>

          <a href="#productos" className="hover:text-[#c98b2e] transition">
            Productos
          </a>

          <a href="#servicios" className="hover:text-[#c98b2e] transition">
            Servicios
          </a>

          <a href="#nosotros" className="hover:text-[#c98b2e] transition">
            Nosotros
          </a>

          <a href="#contacto" className="hover:text-[#c98b2e] transition">
            Contacto
          </a>

        </nav>
      </div>
    </header>
  );
}