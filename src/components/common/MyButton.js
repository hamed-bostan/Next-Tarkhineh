import { Button } from "../ui/button";

export default function MyButton({
  imageSrc,
  iconStyle,
  variant,
  buttonStyle,
  alt = "icon",
  label,
  onClick,
  icon,
  type = "button", // Default type is "button"
}) {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      type={type}
      className={`flex items-center text-[#FFFFFF] text-xs text-center hover:bg-[#326343] md:text-sm ${buttonStyle}`}
    >
      {imageSrc && <img src={imageSrc} className={iconStyle} alt={alt} />}
      {icon && icon}
      {label}
    </Button>
  );
}
