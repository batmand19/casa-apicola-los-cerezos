export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-miel-50">
      <div className="text-center">
        <div className="relative w-14 h-14 mx-auto mb-5">
          <div className="absolute inset-0 rounded-full border-2 border-miel-200" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-miel-500 animate-spin" />
          <span className="absolute inset-0 flex items-center justify-center text-xl" aria-hidden="true">📝</span>
        </div>
        <p className="text-sm text-tierra-500 font-medium">Cargando artículos...</p>
      </div>
    </div>
  );
}
