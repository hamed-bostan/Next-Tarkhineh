import { Button } from "../ui/button";

export default function MyButton({
  imageSrc,
  iconStyle,
  variant,
  buttonStyle,
  alt = "icon",
  label,
  onClick,
}) {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      className={`flex items-center text-[#FFFFFF] text-xs text-center hover:bg-[#326343] md:text-sm ${buttonStyle}`}
    >
      {imageSrc && <img src={imageSrc} className={iconStyle} alt={alt} />}
      {label}
    </Button>
  );
}
