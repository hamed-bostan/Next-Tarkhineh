import { Button } from "../ui/button";

export default function MyButton({
  imageSrc,
  iconStyle,
  variant,
  buttonStyle,
  alt,
  label,
}) {
  return (
    <Button
      variant={variant}
      className={`flex items-center text-[#FFFFFF] text-xs text-center hover:bg-[#326343] md:text-sm ${buttonStyle}`}
    >
      <img src={imageSrc} className={iconStyle} alt={alt} />
      {label}
    </Button>
  );
}
