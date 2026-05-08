interface Props {
  title: string;

  value: string;
}

export default function AdminStats({
  title,
  value,
}: Props) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg">

      <p className="text-[#8b5e34] mb-3">
        {title}
      </p>

      <h3 className="text-4xl">
        {value}
      </h3>

    </div>
  );
}