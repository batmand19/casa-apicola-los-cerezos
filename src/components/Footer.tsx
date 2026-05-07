export default function Footer() {
  return (
    <footer className="bg-[#1d160f] text-[#f4e7cf] py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">

        <div>
          <h3 className="text-2xl mb-2">
            Casa Apícola Los Cerezos
          </h3>

          <p className="text-sm opacity-80">
            Pureza y tradición en cada cosecha.
          </p>
        </div>

        <div className="text-sm opacity-80">
          <p>Vereda La Playa</p>
          <p>Caldas, Boyacá</p>
        </div>

      </div>
    </footer>
  );
}