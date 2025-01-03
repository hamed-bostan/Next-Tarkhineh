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
      <Button variant={variant} className={buttonStyle}>
        <img src={imageSrc} className={iconStyle} alt={alt} />
        {label}
      </Button>
    </div>
  );
}
