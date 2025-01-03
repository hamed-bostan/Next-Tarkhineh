import { Button } from "../ui/button";

export default function Banner({
  styleContainer = "",
  imageSrc,
  text,
  isButton = true,
}) {
  return (
    <div className={`relative h-44 mb-6 md:h-48 ${styleContainer}`}>
      <img src={imageSrc} alt={text} className="h-full w-full object-cover" />
      <span className="absolute top-1/2 right-1/2 text-white -translate-y-1/2 translate-x-1/2 text-sm text-nowrap">
        {text}
      </span>
      {isButton && (
        <Button className="text-sm absolute right-1/2 translate-x-1/2 bottom-9 text-white bg-[#417F56] px-2 py-1">
          سفارش آنلاین غذا
        </Button>
      )}
    </div>
  );
}
