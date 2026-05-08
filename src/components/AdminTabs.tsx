interface Props {
  active: string;

  setActive: (value: string) => void;
}

export default function AdminTabs({
  active,
  setActive,
}: Props) {
  return (
    <div className="flex flex-wrap gap-4 mb-12">

      <button
        onClick={() =>
          setActive("productos")
        }
        className={`px-6 py-3 rounded-full transition ${
          active === "productos"
            ? "bg-[#c98b2e] text-white"
            : "bg-white"
        }`}
      >
        Productos
      </button>

      <button
        onClick={() =>
          setActive("estadisticas")
        }
        className={`px-6 py-3 rounded-full transition ${
          active === "estadisticas"
            ? "bg-[#c98b2e] text-white"
            : "bg-white"
        }`}
      >
        Estadísticas
      </button>

    </div>
  );
}