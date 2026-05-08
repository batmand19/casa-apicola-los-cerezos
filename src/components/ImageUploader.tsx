"use client";

interface Props {
  value: string;

  onChange: (value: string) => void;
}

export default function ImageUploader({
  value,
  onChange,
}: Props) {

  function handleFile(
    event: React.ChangeEvent<HTMLInputElement>
  ) {

    const file =
      event.target.files?.[0];

    if (!file) return;

    const reader =
      new FileReader();

    reader.onloadend = () => {

      onChange(
        reader.result as string
      );

    };

    reader.readAsDataURL(file);
  }

  return (
    <div className="space-y-4">

      <img
        src={value}
        alt="Preview"
        className="w-full h-56 object-cover rounded-2xl"
      />

      <label className="block border-2 border-dashed border-[#c98b2e] rounded-2xl p-8 text-center cursor-pointer hover:bg-[#fff7ec] transition">

        <span>
          Subir imagen
        </span>

        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFile}
        />

      </label>

    </div>
  );
}