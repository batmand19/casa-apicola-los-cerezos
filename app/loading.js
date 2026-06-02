export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-50">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-2 border-honey-200" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-honey-500 animate-spin" />
          <span className="absolute inset-0 flex items-center justify-center text-2xl" aria-hidden="true">🍯</span>
        </div>
        <p className="text-sm text-earth-500 font-medium">Cargando...</p>
      </div>
    </div>
  );
}
