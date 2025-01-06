import Image from "next/image";
import MyButton from "./MyButton";

export default function Banner({
  styleContainer = "",
  imageSrc,
  text,
  isButton = true,
}) {
  return (
    <div className={`relative h-44 mb-6 md:h-48 ${styleContainer}`}>
      <Image src={imageSrc} alt={text} width={300} height={150} className="h-full w-full object-cover" />
      <span className="absolute top-1/2 right-1/2 text-[#E5F2E9] -translate-y-1/2 translate-x-1/2 text-nowrap md:text-2xl">
        {text}
      </span>
      {isButton && (
        <MyButton
          buttonStyle="absolute right-1/2 translate-x-1/2 bottom-7 bg-[#417F56] px-2 py-1 md:px-6 md:py-2"
          label="سفارش آنلاین غذا"
        />
      )}
    </div>
  );
}
