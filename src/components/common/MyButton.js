import { Button } from "../ui/button";

export default function MyButton({
  imageSrc,
  iconStyle,
  variant,
  buttonStyle,
  containerStyle = "",
  alt,
  label,
}) {
  return (
    <div className={containerStyle}>
      <Button
        variant={variant}
        className={`flex items-center text-[#FFFFFF] text-xs text-center hover:bg-[#326343] md:text-sm ${buttonStyle}`}
      >
        <img src={imageSrc} className={iconStyle} alt={alt} />
        {label}
      </Button>
    </div>
  );
}
