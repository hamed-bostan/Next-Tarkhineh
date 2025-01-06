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
        className={`text-[#FFFFFF] text-xs text-center hover:bg-[#326343] md:text-base ${buttonStyle}`}
      >
        <img src={imageSrc} className={iconStyle} alt={alt} />
        {label}
      </Button>
    </div>
  );
}
