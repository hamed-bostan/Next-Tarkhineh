export default function Banner({ imageSrc, text }) {
  return (
    <div className="relative mb-6">
      <img src={imageSrc} alt={text} className="h-44 w-full object-cover" />
      <span className="absolute top-1/2 right-1/2 text-white -translate-y-1/2 translate-x-1/2 text-sm text-nowrap">
        {text}
      </span>
    </div>
  );
}
